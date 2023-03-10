import { parseJSON, parseISO, format } from 'date-fns';
import {
  newElement, newMenuLi, newTodoLi, priorityString,
} from './domHelperFunctions';
import {
  $, $$, capitalize, parseBoolString,
} from './helperFunctions';
import TodoManager from './todoManager';
import { getTodoForm, getProjectForm } from './modal';

class ScreenController {
  constructor() {
    this.todoManagerInst = new TodoManager(true);
    this.activeProject = 1;
    this.leftMenu = $('.left-menu-inner');
    this.inboxMenu = $('.left-menu-inbox-menu');
    this.projectsMenu = $('.left-menu-projects-menu');
    this.projectContainer = $('.project-container');
    this.projectHeading = $('.project-heading');
    this.todosList = $('.todos-list');
    this.modal = $('.modal');
    this.form = $('.modal-form');
    this.formTitle = $('.modal-title');
    this.formInputs = $('.inputs');
    this.submit = $('[type="submit"]');
    this.closeModalBtn = $('.close-modal');
    this.updateScreen(1);
    this.setEventListeners();
  }

  updateScreen() {
    this.updateInboxMenu();
    this.updateProjectsMenu();
    this.updateProjectContainer();
  }

  updateInboxMenu() {
    const inbox = newMenuLi('Inbox', { projectId: 1, dateFilter: 0 });
    const today = newMenuLi('Today', { projectId: 1, dateFilter: 1 });
    const upcoming = newMenuLi('Upcoming week', { projectId: 1, dateFilter: 2 });
    this.inboxMenu.appendChild(inbox);
    this.inboxMenu.appendChild(today);
    this.inboxMenu.appendChild(upcoming);
  }

  updateProjectsMenu() {
    this.projectsMenu.innerHTML = '';
    const projects = this.todoManagerInst.exportProjects();
    projects.forEach((project) => {
      const projectLi = newMenuLi(project.name, {
        projectId: project.id,
        dateFilter: 0,
      }, true);
      this.projectsMenu.appendChild(projectLi);
    });
  }

  updateProjectContainer(dateFilter) {
    this.projectContainer.dataset.projectId = this.activeProject;

    const currentProject = this.todoManagerInst.findProject(this.activeProject);
    this.projectHeading.textContent = currentProject.getName();

    this.todosList.innerHTML = '';
    const currentTodos = currentProject.getTodosForScreen(dateFilter);
    currentTodos.forEach((todo) => {
      const todoLi = newTodoLi(todo);
      this.todosList.appendChild(todoLi);
    });
  }

  setEventListeners() {
    this.leftMenu.addEventListener('click', this.clickHandlerProjectsMenu.bind(this));

    $$('.add-button').forEach((btn) => {
      btn.addEventListener('click', this.clickHandlerAddBtn.bind(this));
    });

    this.modal.addEventListener('click', this.clickHandlerModal.bind(this));

    this.submit.addEventListener('click', this.clickHandlerSubmit.bind(this));

    this.todosList.addEventListener('click', this.clickHandlerTodosList.bind(this));
  }

  clickHandlerProjectsMenu(e) {
    if (e.target.classList.contains('project-btn')) {
      this.activeProject = +e.target.dataset.projectId;
      const { dateFilter } = e.target.dataset;

      this.updateProjectContainer(dateFilter);
    } else if (e.target.closest('div').classList.contains('edit-svg-container')) {
      this.openModal(e.target.closest('div'));
    } else if (e.target.closest('div').classList.contains('delete-svg-container')) {
      const { projectId } = e.target.closest('li').dataset;
      const projectItem = this.todoManagerInst.findProject(projectId);
      this.todoManagerInst.removeProject(projectItem);
      this.updateProjectsMenu();
      if (this.activeProject === +projectId) {
        this.activeProject = 1;
        this.updateProjectContainer();
      }
    }
  }

  clickHandlerAddBtn(e) {
    this.openModal(e.target);
  }

  clickHandlerSubmit(e) {
    e.preventDefault();
    if (e.target.form.dataset.mode === 'adding') {
      if (e.target.form.dataset.workingOn === 'project') {
        const newProject = TodoManager.createProject({ name: e.target.form.name.value });
        this.todoManagerInst.addProject(newProject);
        this.updateProjectsMenu();
        this.closeModal();
      } else if (e.target.form.dataset.workingOn === 'todo') {
        const newTodo = TodoManager.createTodo({
          title: e.target.form.name.value,
          desc: e.target.form.desc.value,
          priority: +e.target.form.priority.value,
          dueDate: parseISO(e.target.form.dueDate.value),
          project: +e.target.form.project.value,
        });
        this.todoManagerInst.addTodo(newTodo);
        this.updateProjectContainer();
      }
    }

    if (e.target.form.dataset.mode === 'editing') {
      if (e.target.form.dataset.workingOn === 'todo') {
        const { todoId } = e.target.form.dataset;
        const todoItem = this.todoManagerInst.findTodo(todoId);
        if (!todoItem) {
          console.log('no todo item');
        }
        const prop = {
          title: e.target.form.name.value,
          desc: e.target.form.desc.value,
          priority: +e.target.form.priority.value,
          dueDate: parseISO(e.target.form.dueDate.value),
        };

        this.todoManagerInst.updateTodo(todoItem, prop);
        const project = this.todoManagerInst.findProject(e.target.form.project.value);
        if (!project) {
          console.log('no project item');
        }
        this.todoManagerInst.changeTodoProject(todoItem, project);
        this.updateProjectContainer();
      }
    }
    this.closeModal();
  }

  clickHandlerTodosList(e) {
    const todoLi = e.target.closest('li');
    if (!todoLi) {
      return;
    }
    const { todoId } = todoLi.dataset;
    const todoItem = this.todoManagerInst.findTodo(todoId);
    if (!todoItem) {
      return;
    }

    if (e.target.classList.contains('todo-circle')) {
      const completedState = parseBoolString(todoLi.dataset.completed);
      if (!completedState) {
        this.todoManagerInst.markTodoAsCompleted(todoItem);
      } else {
        this.todoManagerInst.markTodoAsUncompleted(todoItem);
      }
      this.updateProjectContainer();
    } else if (e.target.closest('div').classList.contains('edit-svg-container')) {
      this.openModal(e.target.closest('div'));
    } else if (e.target.closest('div').classList.contains('delete-svg-container')) {
      this.todoManagerInst.removeTodo(todoItem);
      this.updateProjectContainer();
    } else if (e.target.closest('div').classList.contains('details')) {
      const expandedInfo = todoLi.querySelector('.expanded-info');
      const details = todoLi.querySelector('.details');
      if (!expandedInfo.dataset.open) {
        expandedInfo.dataset.open = true;
        details.textContent = 'Hide';
        const description = newElement('p', 'todo-desc', todoItem.desc);
        const project = newElement('p', 'todo-project', this.todoManagerInst.findProject(todoItem.project).name);
        const priority = newElement('p', 'todo-priority', priorityString(todoItem.priority));

        expandedInfo.appendChild(description);
        expandedInfo.appendChild(project);
        expandedInfo.appendChild(priority);
      } else {
        delete expandedInfo.dataset.open;
        details.textContent = 'Details';
        expandedInfo.innerHTML = '';
      }
    }
  }

  clickHandlerModal(e) {
    if (!e.target.closest('.inner-modal') || e.target === this.closeModalBtn) {
      this.closeModal();
    }
  }

  openModal(target) {
    this.modal.classList.remove('hidden');

    const { mode } = target.dataset;
    const { workingOn } = target.dataset;
    const { todoId } = target.dataset;
    const { projectId } = target.dataset;
    this.form.dataset.mode = mode;
    this.form.dataset.workingOn = workingOn;
    if (todoId) {
      this.form.dataset.todoId = todoId;
    }
    this.formTitle.textContent = `${mode === 'adding' ? 'Add' : 'Edit'} ${capitalize(workingOn)}`;

    this.formInputs.innerHTML = '';
    if (workingOn === 'project') {
      this.formInputs.appendChild(getProjectForm());

      if (mode === 'editing') {
        const projectItem = this.todoManagerInst.findProject(projectId);
        if (!projectItem) {
          return;
        }
        this.form.name.value = projectItem.name;
      }
    }
    if (workingOn === 'todo') {
      this.formInputs.appendChild(getTodoForm());
      const projects = this.todoManagerInst.exportProjects();
      const selectMenu = $('select.projects-select');
      projects.forEach((proj) => {
        const option = newElement('option', null, proj.name, { value: proj.id });
        selectMenu.appendChild(option);
      });
      const currentOption = $(`select.projects-select option[value="${this.activeProject || 1}"]`);
      currentOption.setAttribute('selected', 'selected');

      if (mode === 'editing') {
        const todoItem = this.todoManagerInst.findTodo(todoId);
        if (!todoItem) {
          return;
        }
        this.form.name.value = todoItem.title;
        this.form.desc.value = todoItem.desc;
        this.form.priority.value = todoItem.priority;
        this.form.dueDate.value = format(parseJSON(todoItem.dueDate), 'yyyy-MM-dd');
        const currentOption = $(`select.projects-select option[value="${todoItem.project || 1}"]`);
        currentOption.setAttribute('selected', 'selected');
      }
    }
  }

  closeModal() {
    this.form.reset();
    delete this.form.dataset.mode;
    delete this.form.dataset.workingOn;
    delete this.form.dataset.todoId;
    this.modal.classList.add('hidden');
  }
}

export default ScreenController;

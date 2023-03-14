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
    this.activeProjectLi = $('.left-menu-inbox-menu li:first-of-type');
    this.updateScreen();
    this.setEventListeners();
  }

  updateScreen() {
    this.updateProjectsMenu();
    this.updateProjectContainer(0);
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
    if (!projects.length) {
      const emptyMenu = newElement('div', 'empty-project-menu', 'No projects yet, add one now!');
      this.projectsMenu.appendChild(emptyMenu);
    }
  }

  updateProjectContainer(dateFilter) {
    // dateFilter : 0 = all, 1 = today, 2 = upcoming week
    this.projectContainer.dataset.projectId = this.activeProject;
    this.projectContainer.dataset.dateFilter = dateFilter;

    const currentProject = this.todoManagerInst.findProject(this.activeProject);
    if (+dateFilter === 1) {
      this.projectHeading.textContent = 'Today';
    } else if (+dateFilter === 2) {
      this.projectHeading.textContent = 'Upcoming Week';
    } else {
      this.projectHeading.textContent = currentProject.getName();
    }

    this.todosList.innerHTML = '';
    const currentTodos = currentProject.getTodosForScreen(dateFilter);
    currentTodos.forEach((todo) => {
      const todoLi = newTodoLi(todo);
      this.todosList.appendChild(todoLi);
    });

    if (!currentTodos.length) {
      const emptyProject = newElement(
        'p',
        'empty-project-prompt',
        'This project seems to be empty! Add a task to get started.',
      );
      const addTaskButton = newElement(
        'button',
        ['empty-project-add-button', 'add-button'],
        'Add Task',
        null,
        { workingOn: 'todo', mode: 'adding' },
      );
      this.todosList.appendChild(emptyProject);
      this.todosList.appendChild(addTaskButton);
    }
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
    if (e.target.closest('div').classList.contains('edit-svg-container')) {
      this.openModal(e.target.closest('div'));
    } else if (e.target.closest('div').classList.contains('delete-svg-container')) {
      const { projectId } = e.target.closest('li').dataset;
      const projectItem = this.todoManagerInst.findProject(projectId);
      this.todoManagerInst.removeProject(projectItem);
      this.updateProjectsMenu();
      if (this.activeProject === +projectId) {
        this.activeProject = 1;
        this.activeProjectLi = $('.left-menu-inbox-menu li:first-of-type');
        this.activeProjectLi.classList.add('active-project-li');
        this.updateProjectContainer();
      }
    } else if (e.target.classList.contains('project-btn')) {
      this.activeProject = +e.target.dataset.projectId;
      const { dateFilter } = e.target.dataset;

      const projectLi = e.target.closest('li');
      this.activeProjectLi.classList.remove('active-project-li');
      this.activeProjectLi = projectLi;
      this.activeProjectLi.classList.add('active-project-li');

      this.updateProjectContainer(dateFilter);
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
        this.updateProjectContainer(this.projectContainer.dataset.dateFilter);
      }
    }

    if (e.target.form.dataset.mode === 'editing') {
      if (e.target.form.dataset.workingOn === 'project') {
        const { projectId } = e.target.form.dataset;
        const projectItem = this.todoManagerInst.findProject(projectId);
        if (!projectItem) {
          console.log('no project item');
        }
        this.todoManagerInst.setProjectName(projectItem, e.target.form.name.value);
        this.updateProjectsMenu();
        if (this.activeProject === +projectId) {
          this.updateProjectContainer(this.projectContainer.dataset.dateFilter);
        }
      } else if (e.target.form.dataset.workingOn === 'todo') {
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
        this.updateProjectContainer(this.projectContainer.dataset.dateFilter);
      }
    }
    this.closeModal();
  }

  clickHandlerTodosList(e) {
    const addBtn = e.target.closest('button.empty-project-add-button');
    if (addBtn) {
      this.openModal(addBtn);
    }

    const todoLi = e.target.closest('li');
    if (todoLi) {
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
        this.updateProjectContainer(this.projectContainer.dataset.dateFilter);
      } else if (e.target.closest('div').classList.contains('todo-container')) {
        const expandedInfo = todoLi.querySelector('.expanded-info');
        if (!expandedInfo.dataset.open) {
          todoLi.classList.add('open-todo');
          expandedInfo.dataset.open = true;
          const description = newElement('p', 'todo-desc', todoItem.desc);
          const project = newElement('p', 'todo-project', this.todoManagerInst.findProject(todoItem.project).name);
          const priority = newElement('p', 'todo-priority', priorityString(todoItem.priority), null, { priority: todoItem.priority });

          expandedInfo.appendChild(description);
          expandedInfo.appendChild(project);
          expandedInfo.appendChild(priority);
        } else {
          todoLi.classList.remove('open-todo');
          delete expandedInfo.dataset.open;
          expandedInfo.innerHTML = '';
        }
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
    if (projectId) {
      this.form.dataset.projectId = projectId;
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
        const currentOptionEditing = $(`select.projects-select option[value="${todoItem.project || 1}"]`);
        currentOptionEditing.setAttribute('selected', 'selected');
      }
    }
  }

  closeModal() {
    this.form.reset();
    delete this.form.dataset.mode;
    delete this.form.dataset.workingOn;
    delete this.form.dataset.todoId;
    delete this.form.dataset.projectId;
    this.modal.classList.add('hidden');
  }
}

export default ScreenController;

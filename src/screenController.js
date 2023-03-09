import parseISO from 'date-fns/parseISO';
import { newElement, newMenuLi, newTodoLi } from './domHelperFunctions';
import {
  $, $$, capitalize, parseBoolString,
} from './helperFunctions';
import TodoManager from './todoManager';
import { getTodoForm, getProjectForm } from './modal';

class ScreenController {
  constructor() {
    this.todoManagerInst = new TodoManager(true);
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
    this.updateScreen(1);
    this.setEventListeners();
  }

  updateScreen(currentProjectId) {
    this.updateInboxMenu();
    this.updateProjectsMenu();
    this.updateProjectContainer(currentProjectId);
  }

  updateInboxMenu() {
    const inbox = newMenuLi('Inbox', { projectId: 1, dateFilter: 0 });
    const today = newMenuLi('Today', { projectId: 1, dateFilter: 1 });
    const upcoming = newMenuLi('Upcoming', { projectId: 1, dateFilter: 2 });
    this.inboxMenu.appendChild(inbox);
    this.inboxMenu.appendChild(today);
    this.inboxMenu.appendChild(upcoming);
  }

  updateProjectsMenu() {
    this.projectsMenu.innerHTML = '';
    const projects = this.todoManagerInst.exportProjects();
    projects.forEach((project) => {
      const projectLi = newMenuLi(project.name, { projectId: project.id, dateFilter: 0 });
      this.projectsMenu.appendChild(projectLi);
    });
  }

  updateProjectContainer(currentProjectId, dateFilter) {
    this.projectContainer.dataset.projectId = currentProjectId;

    const currentProject = this.todoManagerInst.findProject(currentProjectId);
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
    if (!e.target.dataset.projectId) {
      return;
    }
    const { projectId } = e.target.dataset;
    const { dateFilter } = e.target.dataset;

    this.updateProjectContainer(projectId, dateFilter);
  }

  clickHandlerAddBtn(e) {
    this.modal.classList.remove('hidden');
    const adding = e.target.dataset.addButton;
    this.form.dataset.adding = adding;
    this.formTitle.textContent = `Add ${capitalize(adding)}`;
    this.formInputs.innerHTML = '';
    if (adding === 'project') {
      this.formInputs.appendChild(getProjectForm());
    }
    if (adding === 'todo') {
      this.formInputs.appendChild(getTodoForm());
      const projects = this.todoManagerInst.exportProjects();
      const selectMenu = $('[data-adding="todo"] select');
      projects.forEach((proj) => {
        const option = newElement('option', null, proj.name, { value: proj.id });
        selectMenu.appendChild(option);
      });
    }
  }

  clickHandlerSubmit(e) {
    e.preventDefault();
    if (e.target.form.dataset.adding === 'project') {
      const newProject = TodoManager.createProject({ name: e.target.form.name.value });
      this.todoManagerInst.addProject(newProject);
      this.updateProjectsMenu();
      this.closeModal();
    } else if (e.target.form.dataset.adding === 'todo') {
      const newTodo = TodoManager.createTodo({
        title: e.target.form.name.value,
        desc: e.target.form.desc.value,
        priority: +e.target.form.priority.value,
        dueDate: parseISO(e.target.form.dueDate.value),
        project: +e.target.form.project.value,
      });
      this.todoManagerInst.addTodo(newTodo);
      this.updateProjectContainer(this.projectContainer.dataset.projectId);
      this.closeModal();
    }
  }

  clickHandlerTodosList(e) {
    if (e.target.classList.contains('todo-circle')) {
      const todoLi = e.target.closest('li');
      const { todoId } = todoLi.dataset;
      const todoItem = this.todoManagerInst.findTodo(todoId);
      const completedState = parseBoolString(todoLi.dataset.completed);
      if (!completedState) {
        this.todoManagerInst.markTodoAsCompleted(todoItem);
      } else {
        this.todoManagerInst.markTodoAsUncompleted(todoItem);
      }
      this.updateProjectContainer(this.projectContainer.dataset.projectId);
    }
  }

  clickHandlerModal(e) {
    if (!e.target.closest('.inner-modal')) {
      this.closeModal();
    }
  }

  closeModal() {
    this.form.reset();
    delete this.form.dataset.adding;
    this.modal.classList.add('hidden');
  }
}

export default ScreenController;

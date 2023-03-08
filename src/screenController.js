import { newElement, newMenuLi, newTodoLi } from './domHelperFunctions';
import { $, $$ } from './helperFunctions';
import Todo from './todo';
import Project from './project';
import TodoManager from './todoManager';

class ScreenController {
  constructor() {
    this.todoManagerInst = new TodoManager(true);
    this.leftMenu = $('.left-menu-inner');
    this.inboxMenu = $('.left-menu-inbox-menu');
    this.projectsMenu = $('.left-menu-projects-menu');
    this.projectContainer = $('.project-container');
    this.projectHeading = $('.project-heading');
    this.todosList = $('.todos-list');
    this.updateScreen(1);
    this.setEventListeners();
  }

  updateScreen(currentProjectId) {
    this.updateInboxMenu();
    this.updateProjectsMenu();
    this.updateProjectContainer(currentProjectId);
  }

  updateInboxMenu() {
    const inbox = newMenuLi('Inbox');
    inbox.dataset.projectId = 1;
    const today = newMenuLi('Today');
    today.dataset.projectId = 1;
    const upcoming = newMenuLi('Upcoming');
    upcoming.dataset.projectId = 1;
    this.inboxMenu.appendChild(inbox);
    this.inboxMenu.appendChild(today);
    this.inboxMenu.appendChild(upcoming);
  }

  updateProjectsMenu() {
    const projects = this.todoManagerInst.exportProjects();
    projects.forEach((project) => {
      const projectLi = newMenuLi(project.name);
      projectLi.dataset.projectId = project.id;
      this.projectsMenu.appendChild(projectLi);
    });
  }

  updateProjectContainer(currentProjectId) {
    this.projectContainer.dataset.projectId = currentProjectId;

    const currentProject = this.todoManagerInst.findProject(currentProjectId);
    this.projectHeading.textContent = currentProject.getName();

    this.todosList.innerHTML = '';
    const currentTodos = currentProject.getTodosForScreen();
    currentTodos.forEach((todo) => {
      const todoLi = newTodoLi(todo);
      this.todosList.appendChild(todoLi);
    });
  }

  setEventListeners() {
    this.leftMenu.addEventListener('click', this.clickHandlerProjectsMenu.bind(this));
  }

  clickHandlerProjectsMenu(e) {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'LI') {
      return;
    }

    let projectLi = e.target;

    if (projectLi.tagName === 'BUTTON') {
      projectLi = projectLi.parentNode;
    }
    const projectId = +projectLi.dataset.projectId;

    this.updateProjectContainer(projectId);
  }
}

export default ScreenController;

import { newElement, newMenuLi } from './domHelperFunctions';

function getMain() {
  const main = newElement('div', 'main');

  const leftMenu = newElement('div', 'left-menu');
  const leftMenuInner = newElement('div', 'left-menu-inner');
  const leftMenuTop = newElement('div', 'left-menu-top');
  const topMenu = newElement('ul', 'left-menu-inbox-menu');

  const inbox = newMenuLi('All Tasks', { projectId: 1, dateFilter: 0 });
  inbox.classList.add('active-project-li');
  const today = newMenuLi('Today', { projectId: 1, dateFilter: 1 });
  const upcoming = newMenuLi('Upcoming week', { projectId: 1, dateFilter: 2 });
  topMenu.appendChild(inbox);
  topMenu.appendChild(today);
  topMenu.appendChild(upcoming);

  leftMenuTop.appendChild(topMenu);
  leftMenuInner.appendChild(leftMenuTop);

  const leftMenuProjects = newElement('div', 'left-menu-projects');
  const projectsTitleContainer = newElement('div', 'projects-title-container');
  const projectsTitle = newElement('h3', 'projects-title', 'Projects');
  projectsTitleContainer.appendChild(projectsTitle);

  leftMenuProjects.appendChild(projectsTitleContainer);
  const projectsMenu = newElement('ul', 'left-menu-projects-menu');
  leftMenuProjects.appendChild(projectsMenu);
  leftMenuInner.appendChild(leftMenuProjects);

  const addProjectContainer = newElement('div', 'add-project-container');
  const addProjectBtn = newElement('button', ['add-project-btn', 'add-button'], 'Add Project', null, { workingOn: 'project', mode: 'adding' });
  addProjectContainer.appendChild(addProjectBtn);
  leftMenuInner.appendChild(addProjectContainer);

  leftMenu.appendChild(leftMenuInner);

  const projectContainer = newElement('div', 'project-container');
  const projectHeading = newElement('h2', 'project-heading', 'Project Heading');
  const projectTodos = newElement('div', 'project-todos');
  const projectTodosList = newElement('ul', 'todos-list');
  projectTodos.appendChild(projectTodosList);
  projectContainer.appendChild(projectHeading);
  projectContainer.appendChild(projectTodos);

  main.appendChild(leftMenu);
  main.appendChild(projectContainer);

  return main;
}

export default getMain;

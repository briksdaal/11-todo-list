import { newElement } from './domHelperFunctions';

function getMain() {
  const main = newElement('div', 'main');

  const leftMenu = newElement('div', 'left-menu');
  const leftMenuInner = newElement('div', 'left-menu-inner');
  const leftMenuTop = newElement('div', 'left-menu-top');
  const topMenu = newElement('ul', 'left-menu-inbox-menu', 'Inbox');
  leftMenuTop.appendChild(topMenu);
  leftMenuInner.appendChild(leftMenuTop);
  const leftMenuProjects = newElement('div', 'left-menu-projects');
  const projectsMenu = newElement('ul', 'left-menu-projects-menu', 'Projects');
  leftMenuProjects.appendChild(projectsMenu);
  leftMenuInner.appendChild(leftMenuProjects);
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

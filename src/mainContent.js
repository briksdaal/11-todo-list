import newElement from './element';

function getMain() {
  const main = newElement('div', 'main');
  const leftMenu = newElement('div', 'left-menu', 'Left Menu');
  const projectContainer = newElement('div', 'project-container', 'Project Container');

  main.appendChild(leftMenu);
  main.appendChild(projectContainer);

  return main;
}

export default getMain;

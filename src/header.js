import { newElement } from './domHelperFunctions';

function getHeader() {
  const header = newElement('div', 'header');

  const headerHeading = newElement('h1', 'header-heading', 'Doitdoit in Detroit City');
  const headerAddButton = newElement('button', ['header-add-button', 'add-button'], 'Add task', null, { workingOn: 'todo', mode: 'adding' });
  header.appendChild(headerHeading);
  header.appendChild(headerAddButton);

  return header;
}

export default getHeader;

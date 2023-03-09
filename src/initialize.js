import { newElement } from './domHelperFunctions';
import getHeader from './header';
import getMain from './mainContent';
import getFooter from './footer';
import { getModal } from './modal';

function initalize() {
  const todoApp = newElement('div', 'todoApp');
  document.body.appendChild(todoApp);

  todoApp.appendChild(getHeader());
  todoApp.appendChild(getMain());
  todoApp.appendChild(getFooter());
  todoApp.appendChild(getModal());
}

export default initalize;

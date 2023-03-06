import newElement from './element';
import getHeader from './header';
import getMain from './mainContent';
import getFooter from './footer';

function initalize() {
  const todoApp = newElement('div', 'todoApp');
  document.body.appendChild(todoApp);

  todoApp.appendChild(getHeader());
  todoApp.appendChild(getMain());
  todoApp.appendChild(getFooter());
}

export default initalize;

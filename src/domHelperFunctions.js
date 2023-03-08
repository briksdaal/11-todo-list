import { parseJSON } from 'date-fns';
import format from 'date-fns/format';

function newElement(type, className, value, attrObj, dataObj) {
  const tempElement = document.createElement(type);
  if (className) {
    tempElement.classList.add(className);
  }
  if (value) {
    tempElement.textContent = value;
  }
  if (attrObj) {
    Object.keys(attrObj).forEach((attr) => {
      tempElement.setAttribute(attr, attrObj[attr]);
    });
  }
  if (dataObj) {
    Object.keys(dataObj).forEach((data) => {
      tempElement.dataset[data] = dataObj[data];
    });
  }
  return tempElement;
}

function newMenuLi(name) {
  const li = newElement('li');
  const liButton = newElement('button', null, name);
  li.appendChild(liButton);
  return li;
}

function newTodoLi(todo) {
  const li = newElement('li', null, null, null, { todoId: todo.id, completed: todo.completed });
  const innerContainer = newElement('div', 'todo-container');
  const completeCircle = newElement('div', 'todo-circle', todo.priority);
  const title = newElement('h3', 'todo-title', todo.title);
  const dueDate = newElement('p', 'todo-date', format(parseJSON(todo.dueDate), 'do MMMM, y'));
  innerContainer.appendChild(completeCircle);
  innerContainer.appendChild(title);
  innerContainer.appendChild(dueDate);
  li.appendChild(innerContainer);
  return li;
}

export { newElement, newMenuLi, newTodoLi };

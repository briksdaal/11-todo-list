import { parseJSON } from 'date-fns';
import format from 'date-fns/format';
import { mdiTrashCanOutline, mdiSquareEditOutline } from '@mdi/js';

function newElement(type, classes, value, attrObj, dataObj) {
  const tempElement = document.createElement(type);
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach((elClass) => {
        tempElement.classList.add(elClass);
      });
    } else {
      tempElement.classList.add(classes);
    }
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

function createSvg(pathD) {
  const xmlns = 'http://www.w3.org/2000/svg';

  const svgAttr = {
    xmlns,
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': 'true',
    focusable: 'false',
    width: '1em',
    height: '1em',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 24 24',
    style: 'vertical-align: -0.125em; transform: rotate(360deg);',
  };

  const svg = document.createElementNS(xmlns, 'svg');
  const path = document.createElementNS(xmlns, 'path');

  const keys = Object.keys(svgAttr);

  keys.forEach((key) => {
    svg.setAttribute(key, svgAttr[key]);
  });

  path.setAttribute('d', pathD);
  svg.appendChild(path);

  return svg;
}

function newMenuLi(name, dataObj, project) {
  const li = newElement('li', null, null, null, dataObj);
  const liButton = newElement('button', null, name, null, dataObj);

  li.appendChild(liButton);

  if (project) {
    const deleteSvgContainer = newElement('div', 'delete-svg-container');
    const deleteSvg = createSvg(mdiTrashCanOutline);
    deleteSvgContainer.appendChild(deleteSvg);
    li.appendChild(deleteSvgContainer);
  }

  return li;
}

function newTodoLi(todo) {
  const li = newElement('li', 'todo-li', null, null, { todoId: todo.id, completed: todo.completed });
  const innerContainer = newElement('div', 'todo-container');
  const completeCircle = newElement('div', 'todo-circle', null, null, { priority: todo.priority });
  const title = newElement('h3', 'todo-title', todo.title);
  const dueDate = newElement('p', 'todo-date', format(parseJSON(todo.dueDate), 'MMMM do'));
  const editSvgContainer = newElement('div', 'edit-svg-container', null, null, { workingOn: 'todo', mode: 'editing', todoId: todo.id });
  const editSvg = createSvg(mdiSquareEditOutline);
  editSvgContainer.appendChild(editSvg);
  const deleteSvgContainer = newElement('div', 'delete-svg-container');
  const deleteSvg = createSvg(mdiTrashCanOutline);
  deleteSvgContainer.appendChild(deleteSvg);
  innerContainer.appendChild(completeCircle);
  innerContainer.appendChild(title);
  innerContainer.appendChild(dueDate);
  innerContainer.appendChild(editSvgContainer);
  innerContainer.appendChild(deleteSvgContainer);
  li.appendChild(innerContainer);
  return li;
}

export {
  newElement, newMenuLi, newTodoLi, createSvg,
};

import { parseJSON } from 'date-fns';
import format from 'date-fns/format';
import {
  mdiTrashCanOutline,
  mdiSquareEditOutline,
  mdiInboxOutline,
  mdiCalendarTodayOutline,
  mdiCalendarMonthOutline,
  mdiChevronRight,
} from '@mdi/js';

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

function newMenuLi(name, dataObj) {
  const li = newElement('li', null, null, null, dataObj);
  const liButton = newElement('button', 'project-btn', name, null, dataObj);

  li.appendChild(liButton);

  if (dataObj.projectId === 1) {
    let icon = null;
    const { firstChild } = liButton;
    if (dataObj.dateFilter === 0) {
      icon = createSvg(mdiInboxOutline);
    } else if (dataObj.dateFilter === 1) {
      icon = createSvg(mdiCalendarTodayOutline);
    } else if (dataObj.dateFilter === 2) {
      icon = createSvg(mdiCalendarMonthOutline);
    }
    liButton.insertBefore(icon, firstChild);
  } else {
    const editSvgContainer = newElement('div', 'edit-svg-container', null, null, { workingOn: 'project', mode: 'editing', projectId: dataObj.projectId });
    const editSvg = createSvg(mdiSquareEditOutline);
    editSvgContainer.appendChild(editSvg);
    const deleteSvgContainer = newElement('div', 'delete-svg-container');
    const deleteSvg = createSvg(mdiTrashCanOutline);
    deleteSvgContainer.appendChild(deleteSvg);
    li.appendChild(editSvgContainer);
    li.appendChild(deleteSvgContainer);
  }

  return li;
}

function priorityString(priorityNum) {
  if (priorityNum === 1) return 'High';
  if (priorityNum === 2) return 'Medium';
  if (priorityNum === 3) return 'Low';
  return 'No Rush';
}

function newTodoLi(todo) {
  const li = newElement('li', 'todo-li', null, null, { todoId: todo.id, completed: todo.completed });
  const mainContainer = newElement('div', 'todo-container');
  const completeCircle = newElement('div', 'todo-circle', null, null, { priority: todo.priority });
  const title = newElement('h3', 'todo-title');
  const span = newElement('span', null, todo.title);
  const chevron = createSvg(mdiChevronRight);
  title.appendChild(span);
  title.appendChild(chevron);
  const dueDate = newElement('p', 'todo-date', format(parseJSON(todo.dueDate), 'MMMM do'));
  const editSvgContainer = newElement('div', 'edit-svg-container', null, null, { workingOn: 'todo', mode: 'editing', todoId: todo.id });
  const editSvg = createSvg(mdiSquareEditOutline);
  editSvgContainer.appendChild(editSvg);
  const deleteSvgContainer = newElement('div', 'delete-svg-container');
  const deleteSvg = createSvg(mdiTrashCanOutline);
  deleteSvgContainer.appendChild(deleteSvg);
  mainContainer.appendChild(completeCircle);
  mainContainer.appendChild(title);
  mainContainer.appendChild(dueDate);
  mainContainer.appendChild(editSvgContainer);
  mainContainer.appendChild(deleteSvgContainer);

  const expandedInfoContainer = newElement('div', 'expanded-info');

  li.appendChild(mainContainer);
  li.appendChild(expandedInfoContainer);
  return li;
}

export {
  newElement, newMenuLi, newTodoLi, createSvg, priorityString,
};

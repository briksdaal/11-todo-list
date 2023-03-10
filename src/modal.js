import { newElement } from './domHelperFunctions';

function getModal() {
  const modal = newElement('div', ['modal', 'hidden']);
  const innerModal = newElement('div', 'inner-modal');
  const exButton = newElement('div', 'close-modal', '×');
  const form = newElement('form', 'modal-form');
  const modalTitle = newElement('h3', 'modal-title');
  const inputs = newElement('div', 'inputs');
  const submitBtn = newElement('button', 'submit-btn', 'Submit', { type: 'submit' });

  form.appendChild(modalTitle);
  form.appendChild(inputs);
  form.appendChild(submitBtn);

  innerModal.appendChild(exButton);
  innerModal.appendChild(form);
  modal.appendChild(innerModal);
  return modal;
}

function getTodoForm() {
  const div = newElement('div');

  const nameLabel = newElement('label', null, 'Name:', { for: 'name' });
  const nameInput = newElement('input', null, null, { id: 'name', name: 'name', type: 'text' });
  const descLabel = newElement('label', null, 'Description:', { for: 'desc' });
  const descInput = newElement('textarea', null, null, { id: 'desc', name: 'desc', type: 'text' });
  const priorityLabel = newElement('label', null, 'Priority:', { for: 'priority' });
  const priorityInput = newElement('input', null, null, {
    id: 'priority', name: 'priority', type: 'number', min: 0, max: 3,
  });
  const dueDateLabel = newElement('label', null, 'Due Date:', { for: 'dueDate' });
  const dueDateInput = newElement('input', null, null, { id: 'dueDate', name: 'dueDate', type: 'date' });
  const projectLabel = newElement('label', null, 'Project:', { for: 'project' });
  const projectInput = newElement('select', 'projects-select', null, { id: 'project', name: 'project' });
  const option = newElement('option', null, 'Inbox', { value: 1 });
  projectInput.appendChild(option);

  div.appendChild(nameLabel);
  div.appendChild(nameInput);
  div.appendChild(descLabel);
  div.appendChild(descInput);
  div.appendChild(priorityLabel);
  div.appendChild(priorityInput);
  div.appendChild(dueDateLabel);
  div.appendChild(dueDateInput);
  div.appendChild(projectLabel);
  div.appendChild(projectInput);

  return div;
}
function getProjectForm() {
  const div = newElement('div');
  const label = newElement('label', null, 'Name:', { for: 'name' });
  const input = newElement('input', null, null, { id: 'name', type: 'text', value: 'Project name' });
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

export { getModal, getTodoForm, getProjectForm };

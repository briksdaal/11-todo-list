import { newElement } from './domHelperFunctions';

function getModal() {
  const modal = newElement('div', ['modal', 'hidden']);
  const innerModal = newElement('div', 'inner-modal');
  const form = newElement('form', 'modal-form');
  const modalTitle = newElement('h3', 'modal-title');
  const inputs = newElement('div', 'inputs');
  const submitBtn = newElement('button', 'submit-btn', 'Submit', { type: 'submit' });
  form.appendChild(modalTitle);
  form.appendChild(inputs);
  form.appendChild(submitBtn);

  innerModal.appendChild(form);
  modal.appendChild(innerModal);
  return modal;
}

function getTodoForm() {
  const div = newElement('div');

  return div;
}
function getProjectForm() {
  const div = newElement('div');
  const label = newElement('label', null, 'Name:', { for: 'name' });
  const input = newElement('input', null, null, { id: 'name', type: 'text' });
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

export { getModal, getTodoForm, getProjectForm };

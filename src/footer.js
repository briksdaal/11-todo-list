import { newElement } from './domHelperFunctions';

function getFooter() {
  const footer = newElement('div', 'footer', 'footy footer');
  return footer;
}

export default getFooter;

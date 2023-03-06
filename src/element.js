function newElement(type, className, value, attrObj, dataObj) {
  const tempElement = document.createElement('div');
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

export default newElement;

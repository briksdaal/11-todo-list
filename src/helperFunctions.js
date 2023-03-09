function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { $, $$, capitalize };

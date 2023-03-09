function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function parseBoolString(string) {
  if (string === 'true') { return true; }
  return false;
}

export {
  $, $$, capitalize, parseBoolString,
};

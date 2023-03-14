function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}

function parseBoolString(string) {
  if (string === 'true') { return true; }
  return false;
}

export {
  $, $$, parseBoolString,
};

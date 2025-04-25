
function fetchJSON (path) {
  return fetch(path)
    .then(response => response.json())
}

modules.export = {
  fetchJSON,
}
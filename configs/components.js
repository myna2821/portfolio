import components from '../data/components.json' with { type: "json" }

Promise.all(components.map(async file => {
  await fetch(`./components/${file.name}.html`)
    .then(res => res.text())
    .then(html => {
      const template = document.createElement('div')
      template.innerHTML = html
      const content = template.querySelector('template').content
      document.getElementById(file.id).appendChild(content.cloneNode(true))
    })
    .catch(err => console.error(`Error loading component ${file.name}:`, err))
})).then(() => {
  // Dispatch event when all components are loaded
  window.dispatchEvent(new Event('componentsLoaded'))
})
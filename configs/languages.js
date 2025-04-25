import languages from '../data/languages.json' with { type: "json" }

const app = document.getElementById("app")

function setLanguage (lang) {
  const elements = app.querySelectorAll("[data-lang]")
  elements.forEach(el => {
    const key = el.getAttribute("data-lang")
    el.textContent = languages[lang][key] || key
  })
  localStorage.setItem("lang", lang)
}

// Create a function to initialize language selector
function initializeLanguageSelector() {
  const languageSelect = app.querySelector("#language-select")
  if (languageSelect) {
    // console.log("Language selector found")
    const savedLang = localStorage.getItem("lang") || Object.keys(languages)[0]
    languageSelect.value = savedLang
    setLanguage(savedLang)
    
    languageSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value)
    })
  }
  else {
    // console.log("Language selector not found, retrying in 100ms")
    setTimeout(initializeLanguageSelector, 100)
  }
}

// Start initialization after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  initializeLanguageSelector()
})
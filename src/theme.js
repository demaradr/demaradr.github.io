const STORAGE_KEY = 'theme'

export function getStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}

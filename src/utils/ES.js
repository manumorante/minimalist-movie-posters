const userLang = navigator.language || navigator.userLanguage
export const ES = userLang.includes('es')
export const locale = ES ? 'es' : 'en'

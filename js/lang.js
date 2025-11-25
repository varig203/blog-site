export const supportedLangs = ['en', 'de'];

export function getUserLang() {
  const stored = localStorage.getItem('userLang');
  if (stored && supportedLangs.includes(stored)) return stored;

  const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0,2);
  const lang = supportedLangs.includes(browserLang) ? browserLang : 'en';
  localStorage.setItem('userLang', lang);
  return lang;
}

export function setUserLang(lang) {
  if (supportedLangs.includes(lang)) {
    localStorage.setItem('userLang', lang);
    return lang;
  }
  return getUserLang();
}

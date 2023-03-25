const a = "en-EN", e = () => typeof navigator > "u" ? a : navigator.language ? navigator.language : navigator.userLanguage ? navigator.userLanguage : a;
export {
  e as getDefaultLocale
};

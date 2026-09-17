/* ==========================================================================
   Rah — shared i18n engine
   Each page defines its own STRINGS = {en:{...}, prs:{...}, pus:{...}} object
   for the text unique to that page, tags elements with data-i18n="key" (or
   data-i18n-placeholder="key" for input placeholders), and calls:
     RahI18n.init(STRINGS, onChange)
   onChange(lang) is optional — used by pages that need to re-render
   dynamic content (scholarship cards, dashboard lists) in the new language.
   ========================================================================== */

const RahI18n = (() => {
  const KEY = 'rah-lang';

  function getLang(){
    const saved = localStorage.getItem(KEY);
    return (saved === 'prs' || saved === 'pus') ? saved : 'en';
  }

  function setLang(lang){
    localStorage.setItem(KEY, lang);
  }

  function applyDocAttrs(lang){
    document.documentElement.lang = lang === 'prs' ? 'fa' : (lang === 'pus' ? 'ps' : 'en');
    document.body.classList.toggle('rtl', lang !== 'en');
  }

  function applyStrings(STRINGS, lang){
    const dict = STRINGS[lang] || STRINGS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
  }

  function markActiveButton(lang){
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  function init(STRINGS, onChange){
    const lang = getLang();
    markActiveButton(lang);
    applyDocAttrs(lang);
    applyStrings(STRINGS, lang);
    if(onChange) onChange(lang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        setLang(newLang);
        markActiveButton(newLang);
        applyDocAttrs(newLang);
        applyStrings(STRINGS, newLang);
        if(onChange) onChange(newLang);
      });
    });
  }

  return { init, getLang, setLang };
})();

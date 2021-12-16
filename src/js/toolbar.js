const toolBar = document.querySelector('.toolbar');




//  Разметка переключателя темы

toolBar.innerHTML = `<div class="theme-switch">
    <svg class="theme-switch__icon" role="img" aria-label="Иконка солнца">
        <use href="/./images/svg/sun-moon.svg#sun"></use>
    </svg>

    <div class="theme-switch__control">
        <input class="theme-switch__toggle" type="checkbox" name="theme" id="theme-switch-toggle"
            aria-label="Переключить между тёмной и светлой темой" />
        <label aria-hidden="true" class="theme-switch__track" for="theme-switch-toggle"> </label>
        <div aria-hidden="true" class="theme-switch__marker"></div>
    </div>

    <svg class="theme-switch__icon" aria-label="Иконка луны">
        <use href="/src/images/svg/sun-moon.svg#moon"></use>
    </svg>
</div>`;

const btn = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
// console.log(localStorage);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
};
const { LIGHT, DARK } = Theme;
// console.log(btn.checked);

let theme = localStorage.getItem('theme');
// console.log(theme);

btn.addEventListener('change', (e) => {
  // console.log(e.target.checked);
  if (!e.target.checked) {
    document.querySelector('body').classList.add(LIGHT);
    document.querySelector('body').classList.remove(DARK);
    localStorage.setItem('theme', LIGHT);
  
  } else {
    document.querySelector('body').classList.remove(LIGHT);
    localStorage.removeItem('theme', LIGHT);
    document.querySelector('body').classList.add(DARK);
    localStorage.setItem('theme', DARK);
    
  }
});

if (theme === DARK) {
  btn.checked = true;
  document.querySelector('body').classList.remove(LIGHT);
  document.querySelector('body').classList.add(DARK);
  
} else {
  btn.checked = false;
  document.querySelector('body').classList.add(LIGHT);
  
}

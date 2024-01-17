const langSec = document.querySelector('.languageSelection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textNav = document.querySelector('.nav-links')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    langSec.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const attr = button.getAttribute('language');

    textNav.textContent = data[attr].nav-links;
  });
});

const data = {
  "english":
  {
    "nav-links": "Hello World2"
  }
}


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

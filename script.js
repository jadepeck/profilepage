const langSec = document.querySelector('.languageSelection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textNav1 = document.getElementById("nav1")
const textNav2 = document.getElementById("nav2")
const textNav3 = document.getElementById("nav3")
const textNav4 = document.getElementById("nav4")


buttons.forEach(button => {
  button.addEventListener('click', () => {
    langSec.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const attr = button.getAttribute('language');

    textNav1.textContent = data[attr].nav1;
    textNav2.textContent = data[attr].nav2;
    textNav3.textContent = data[attr].nav3;
    textNav4.textContent = data[attr].nav4;

  });
});

const data = {
  "english":
  {
    "nav1": "111",
    "nav2": "Experience1",
    "nav3": "Projects1",
    "nav4": "Contact1"
  }
}


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

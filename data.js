const langSec = document.querySelector('.languageSelection');
const buttons = document.querySelector('a');
const textNavlinks = document.querySelector('.nav-links');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    langSec.querySelector('.active').classList.remove('active');
    button.classList.add('active');
  });
});

const data = {
  "english":
  {
    "nav-links": {
      "about": "asdf",
    }
  }
}

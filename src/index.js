import './style.css';

function displayMenu() {
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
  });
}

document.onload = displayMenu();
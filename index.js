const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu'); // Toggle the class to show/hide the menu
});

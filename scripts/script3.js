const iconE = document.querySelector('.icon');
const menu = document.querySelector('.menuButton');

iconE.addEventListener('click', function(button){

  button.currentTarget.classList.toggle('icon-expanded');
  menu.classList.toggle('menuButton-expanded');
});

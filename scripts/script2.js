const menuBut = document.querySelector('.icon');
const menuButton = document.querySelector('.menuButton');
menuBut.addEventListener('click', function(eventObj){
console.log('hiii!!!');

eventObj.currentTarget.classList.toggle('icon-expanded');

menuButton.classList.toggle('menuButton-expanded');

// if(eventObj.currentTarget.classList.contains('icon-expanded')){
//   eventObj.currentTarget.classList.remove('icon-expanded');
//   }
//
//   else{
//     eventObj.currentTarget.classList.add('icon-expanded');
//   }
//
//   if(menuButton.classList.contains('menuButton-expanded')){
//     menuButton.classList.remove('menuButton-expanded');
//   }
//
//   else{
//     menuButton.classList.add('menuButton-expanded');
//   }
});

// variable declare id er sahajje
const menuicon =document.getElementById("menu-icon");
const menu =document.getElementById("menu");

const  navbar = () =>  {
  if(menu.className === 'hidden'){
      menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');
  }
}

// use eventlistener (click listener)..click korle nav bar show krbe
menuicon.addEventListener("click", navbar );


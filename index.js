const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let formBtn = document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('open');
};

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
  
});
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
  
});





const swiper = new Swiper('.swiper', {
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
loop: true,

pagination: {
el: '.swiper-pagination', clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});



let valueDisplay = document.querySelectorAll(".num1");
let interval = 4000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
      }
    }, duration);
});






const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
})

function showPopup(){
      const timeLimit = 10  // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})

document.addEventListener("DOMContentLoaded", function () {


var navBtn = document.querySelector("nav");
var spanAll = document.querySelectorAll("span");

navBtn.addEventListener("click", function(event){
  navBtn.classList.toggle("nav-btn-active");
  spanAll[0].classList.toggle("active-bar-first");
  spanAll[1].classList.toggle("active-bar-second");
  spanAll[2].classList.toggle("active-bar-third");
});





});

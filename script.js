/*script js for fitness page */

const menuBtn = document.getElementById("menuBtn");
const dropMenu = document.querySelector(".dropMenu");
const closeBtn = document.getElementById("closeBtn");
const dropMenuItems = document.querySelectorAll(".dropMenuItem");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);

for (var i = 0; i < dropMenuItems.length; i++) {
  var dropMenuItem = dropMenuItems[i].addEventListener("click", closeMenu);
}

function toggleMenu() {
  dropMenu.classList.toggle("hide");
  dropMenu.classList.toggle("show");
}

function closeMenu() {
  dropMenu.classList.toggle("hide");
  dropMenu.classList.toggle("show");
}

/*
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
*/

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

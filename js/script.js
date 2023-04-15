// HEADER FIXED

let header = document.querySelector('header')

window.onscroll = () => {
   if(document.documentElement.scrollTop > 20) {
      header.classList.add('active')
   }else {
      header.classList.remove('active')
   }
}



// HEADER BURGER

let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')

burger.addEventListener('click', ()=> {
   menu.classList.toggle('active')
})

burger.addEventListener('click', () => {
   burger.classList.toggle('active')
})



// HERO SWIPER

let swiper = new Swiper(".mySwiper", {
   spaceBetween: 10,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
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
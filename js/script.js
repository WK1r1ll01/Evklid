// HEADER FIXED

const header = document.querySelector('header')

window.onscroll = () => {
   if(document.documentElement.scrollTop > 20) {
      header.classList.add('active')
   }else {
      header.classList.remove('active')
   }
}



// HEADER BURGER

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuItem = document.querySelectorAll('.menu__item')

burger.addEventListener('click', () => {
   menu.classList.toggle('active')
   burger.classList.toggle('active')
})

menuItem.forEach((item) => {
   item.addEventListener('click', () => {
      menu.classList.remove('active')
      burger.classList.remove('active')
   })
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



// TABS

const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItem = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(onTabClick)

function onTabClick(item) {
   item.addEventListener('click', () => {
      let currentBtn = item
      let tabId = currentBtn.getAttribute('data-tab')
      let currentTab = document.querySelector(tabId)

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach((item) => {
            item.classList.remove('active')
         })

         tabsItem.forEach((item) => {
            item.classList.remove('active')
         })

         currentBtn.classList.add('active')
         currentTab.classList.add('active')
      }
   })
}

document.querySelector('.tabs__nav-btn').click()



// ACCORDION FAQ

const accBtn = document.querySelectorAll('.accordion-btn')
const accPanel = document.querySelectorAll('.accordion-panel')

accBtn.forEach((el) => {
   el.addEventListener('click', () => {
      let panel = el.nextElementSibling

      if (panel.style.maxHeight) {
         accPanel.forEach((el) => el.style.maxHeight = null)
      } else {
         accPanel.forEach((el) => el.style.maxHeight = null)
         panel.style.maxHeight = panel.scrollHeight + 'px'
      }

      if (panel.style.padding) {
         accPanel.forEach((el) => el.style.padding = null)
      } else {
         accPanel.forEach((el) => el.style.padding = null)
         panel.style.padding = '0 0 30px 0'
      }

      el.classList.add('active')
   })
})



// REVEAL ANIMATION

window.addEventListener('scroll', reveal)

function reveal () {
   let reveals = document.querySelectorAll('.reveal')

   for (let i; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let revealTop = reveals[i].getBoundingClientRect().top
      let revealPoints = 50

      if (revealTop < windowHeight - revealPoints) {
         reveals[i].classList.add('active')
      }
   }
}



// SCROLL ANIMATION 

const scrollItems = document.querySelectorAll('.scroll-item')

const scrollAnimation = () => {
   let windowCenter = (window.innerHeight / 2) + (window.scrollY + (window.innerHeight / 3));

   scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      if (windowCenter >= scrollOffset) {
         el.classList.add('animation-class')
      }else {
         el.classList.remove('animation-class')
      }
   });
};

scrollAnimation();

window.addEventListener('scroll', () => {
   scrollAnimation();
});
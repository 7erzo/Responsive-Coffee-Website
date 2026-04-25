const menuCloseButton = document.querySelector("#menu-close-button");
 const menuOpenButton = document.querySelector("#menu-open-button");
menuOpenButton.addEventListener("click", ()=> {
    document.body.classList.toggle("show-mobile-menu")
})
menuCloseButton.addEventListener("click", ()=>{
    document.body.classList.remove("show-mobile-menu");
})


const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
spaceBetween:25,
grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    0: {
        slidesPerView:1
    },768: {
        slidesPerView:2

    },1024: {
        slidesPerView:3
    }
  }
});
$('.nav_toggle').click(function(){
    $('.nav_list').slideToggle(200);
});



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 20,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        480: {
            slidesPerView: 1
        },

        575: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 3
        },

        992: {
            slidesPerView: 4
        }
    }
});

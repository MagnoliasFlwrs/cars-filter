const modelSliders = document.querySelectorAll('.model-swiper');

if(modelSliders) {
    modelSliders.forEach(el=> {
        const swiper = new Swiper(el, {
            slidesPerView:1,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
    })
}
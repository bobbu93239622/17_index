$('.slideshow').each(function(){
    
  let slideImgs = $(this).find('img'),
      slideImgsCount = slideImgs.length,
      currentIndex = 0;
  
  slideImgs.eq(currentIndex).fadeIn();
  
  setInterval(showNextSlide, 5000);
  
  function showNextSlide(){
      let nextIndex = (currentIndex + 1) % slideImgsCount;
      // console.log(nextIndex)
      slideImgs.eq(currentIndex).fadeOut();
      slideImgs.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
  }
}) 




// <!-- Initialize Swiper -->
 
     var swiper = new Swiper('.swiper', {
       slidesPerView: 3,
       direction: getDirection(),
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       on: {
         resize: function () {
           swiper.changeDirection(getDirection());
         },
       },
     });
 
     function getDirection() {
       var windowWidth = window.innerWidth;
       var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
 
       return direction;
     }
  







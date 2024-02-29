// CODE FOR COUNTER IN KEYFIGURE IN HOME PAGE
// $('.count').each(function () {
//     $(this).prop('keyfigure',0).animate({
//         Counter: $(this).text()
//     }, {
      
//       //chnage count up speed here
//         duration: 7000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
document.querySelectorAll('.count').forEach(function (element) {
    element.setAttribute('keyfigure', 0);
    var startCount = 0;
    var endCount = parseInt(element.textContent, 10);
    var duration = 7000; // Change count up speed here
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var currentCount = Math.ceil((endCount - startCount) * percentage + startCount);
        element.textContent = currentCount;
        if (percentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
});

// FOR BACK TO TOP BUTTON IN FOOTER
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    var body = document.body;
    window.addEventListener("scroll", function() {
        if (window.scrollY > body.scrollHeight / 2) { // Adjust the value as needed
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // backToTopBtn.addEventListener("click", function() {
    //     window.scrollTo({
    //         top: 100,
    //         behavior: "smooth"
    //     });
    // });
});

// SLICK SLIDER IN SUCCESS STORIES SECTION IN HOME PAGE
// $('.slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//     arrows: true,
//     prevArrow: $('.slick-prev'),
//     nextArrow: $('.slick-next')
// });

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 1,
    rewind : true,
    // focus  : 'center',
    breakpoints: {
        640: {
            perPage: 1,
        },
    },
    classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
classes: {
    pagination: 'splide__pagination your-class-pagination',
    page      : 'splide__pagination__page your-class-page',
},
  } );
  
  splide.mount();
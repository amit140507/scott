// CODE FOR COUNTER IN HOME PAGE STEPS SECTION
var elements = document.querySelectorAll('.count');
elements.forEach(function (element) {
    var startCount = 0;
    var endCount = parseInt(element.innerText, 10);
    var duration = 20000; // Change count up speed here
    var countDifference = endCount - startCount;
    var startTime = null;

    function step(timestamp) {
        var progress = timestamp;
        var percentage = Math.min(progress / duration, 1);
        var currentCount = Math.ceil(countDifference * percentage + startCount);
        element.innerText = currentCount;
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
});

var navtoggler = document.getElementById("navbar-toggler");
if (navtoggler) {
    navtoggler.addEventListener("click", function () {
        var navbarcollapse = document.getElementById("navbar-collapse");
        var navbartogglericon = document.getElementById("navbar-toggler-icon");
        navbarcollapse.classList.toggle("show");
        navbartogglericon.classList.toggle("show");
    });
}

// /* glide slider code */

new Glide('.glide',{
type: 'carousel',
  startAt: 0,
  perView: 3,
  breakpoints: {
    1024: {
        perView: 2
      },
      600: {
        perView: 1
      }
},
}).mount();


// /* glide slider code */

// Splide code //



// Splide code //
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
});

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

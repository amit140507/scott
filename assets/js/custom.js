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
        var body = document.querySelector("body");
        var navbar = document.querySelector(".navbar");
        navbarcollapse.classList.toggle("show");
        navbartogglericon.classList.toggle("show");
        body.classList.toggle("show");
        navbar.classList.toggle("show");
    });
}


// accordion code
var acc = document.getElementsByClassName("single-accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.querySelector('.accordion-collapse');
    // var panel = this.nextElementSibling;
    var accordionbutton = this.querySelector('.single-accordion-button'); 
    if (panel.style.display === "block") {
    accordionbutton.classList.add('collapsed');
      panel.style.display = "none";
    } else {
        accordionbutton.classList.remove('collapsed');
      panel.style.display = "block";
    }
  });
}
// accordion code

// faq page accordion

document.querySelectorAll(".accordion-trigger").forEach((el, i) => {
  const accordionTrigger = el;
  console.log("accordionTrigger", accordionTrigger)
  accordionTrigger.addEventListener("click", (e) => {
    const accordioncontent = e.target.parentElement.parentElement.querySelector(".accordion-content");
    const accordionPanelIsOpened = accordionTrigger.getAttribute("aria-expanded");
    if (accordionPanelIsOpened === "true") {
      accordionTrigger.setAttribute("aria-expanded", false);
      accordioncontent.setAttribute("aria-hidden", true);
    } else {
      accordionTrigger.setAttribute("aria-expanded", true);
      accordioncontent.setAttribute("aria-hidden", false);
    }
  });
});


// faq page accordion

// /* glide slider code */
var bulletCount = document.querySelectorAll('.glide__slide').length;
var bulletWrapper = document.getElementById('glide__bullets');
for (let index = 0; index < bulletCount; index++) {
    const button = document.createElement('button');
    button.className = 'glide__bullet slider__bullet';
    button.setAttribute("data-glide-dir", '='+index);
    bulletWrapper.appendChild(button)
}

new Glide('.glide',{
type: 'carousel',
  startAt: 0,
  perView: 3,
  breakpoints: {
    1024: {
        perView: 2,

      },
      600: {
        perView: 1,
        peek: {
            before: 20,
            after: 20
          }
      }
},
}).mount();



// /* glide slider code */


// accordion
const accordion = document.getElementsByClassName('accContainer');
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
      })
    }

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

let plusSlides = n => { showSlides(slideIndex += n)}
let currentSlide = n => { showSlides(slideIndex = n)}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
}
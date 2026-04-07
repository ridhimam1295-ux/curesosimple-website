// GALLERY AUTO CHANGE
let images = ["img1.jpg","img2.jpg","img3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("gallery-img").src = images[index];
}, 3000);

// TESTIMONIAL SLIDER
let tIndex = 0;

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// AUTO SLIDE
setInterval(() => {
  nextTestimonial();
}, 4000);

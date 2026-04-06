// GALLERY AUTO CHANGE
let images = ["img1.jpg","img2.jpg","img3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("gallery-img").src = images[index];
}, 3000);

// TESTIMONIAL SLIDER
let tIndex = 0;

function nextTestimonial() {
  alert("Next testimonial");
}

function prevTestimonial() {
  alert("Previous testimonial");
}

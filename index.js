// dropdown buat mobile
const menuBtn = document.querySelector(".mobile-btn");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

// scroling buat section explore
let slideIndex = 0;
showSlides();
//fungsi nampilin slide baru
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("scrollKanan");
  let dots = document.getElementsByClassName("bulat");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); //? berubah setiap 2 detik
}

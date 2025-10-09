const slide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

nextBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.carousel-card');
  if (counter < cards.length - 1) {
    counter++;
    updateSlide();
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    updateSlide();
  }
});

function updateSlide() {
  slide.style.transform = `translateX(-${counter * 320}px)`;
}

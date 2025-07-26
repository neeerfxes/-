const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-dots");

let index = 0;

// dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

// swipe
let startX = 0;
track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) {
    index = (index + 1) % slides.length;
    updateSlider();
  } else if (endX > startX + 50) {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  }
});

//auto swipe
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 5000);
//для плавного скрола
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// бургер меню навигация
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // предотвращаем всплытие клика
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
  });

  // Закрытие по клику вне меню
  document.addEventListener('click', (e) => {
    const clickedOutsideMenu = !navMenu.contains(e.target);
    const clickedOutsideToggle = !navToggle.contains(e.target);

    if (navMenu.classList.contains('show') && clickedOutsideMenu && clickedOutsideToggle) {
      navMenu.classList.remove('show');
      navToggle.classList.remove('active');
    }
  });
  
//появление окна и отпрвление данных на почту



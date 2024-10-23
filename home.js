const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".dot");
const heading = document.getElementById("carousel-heading");
const description = document.getElementById("carousel-description");

const captions = [
  {
    heading: "- 30 % sur la routine Détox !",
    description: "5 gestes essentiels dans un joli coffret...",
  },
  {
    heading: "- 20 % sur la gamme Visage !",
    description: "Découvrez nos soins pour une peau éclatante...",
  },
  {
    heading: "- 15 % sur la collection Bain-Douche !",
    description: "Offrez-vous un moment de détente avec nos gels douche...",
  },
  {
    heading: "- 15 % sur la collection Bain-Douche !",
    description: "Offrez-vous un moment de détente avec nos gels douche...",
  },
  {
    heading: "- 15 % sur la collection Bain-Douche !",
    description: "Offrez-vous un moment de détente avec nos gels douche...",
  },
];

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  heading.textContent = captions[index].heading;
  description.textContent = captions[index].description;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

const slidesPizza = document.querySelectorAll(".slide-pizza");
const dotsFries = document.querySelectorAll(".dot-fries");
let currentPizzaIndex = 0;

function showPizzaSlide(index) {
  slidesPizza.forEach((slide, i) => {
    slide.classList.toggle("active-slide", i === index);
  });
  dotsFries.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === index);
  });
}

function nextPizzaSlide() {
  currentPizzaIndex = (currentPizzaIndex + 1) % slidesPizza.length;
  showPizzaSlide(currentPizzaIndex);
}

setInterval(nextPizzaSlide, 5000);

dotsFries.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentPizzaIndex = index;
    showPizzaSlide(currentPizzaIndex);
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
  closeIcon.classList.toggle("open");
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
  closeIcon.classList.toggle("open");
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
  closeIcon.classList.toggle("open");
}

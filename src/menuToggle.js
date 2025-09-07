// menuToggle.js
export default function setupMenuToggle() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".button-container");

  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

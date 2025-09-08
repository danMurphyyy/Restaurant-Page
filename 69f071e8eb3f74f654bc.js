import PageLoader from "./pageLoad";
import MenuLoader from "./menuLoad";
import setupMenuToggle from "./menuToggle";
import "./styles.css";

const content = document.getElementById("content");

// load home by default
const home = new PageLoader("content");
home.render();

// Buttons
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

// Home button click
homeBtn.addEventListener("click", () => {
  content.innerHTML = ""; // clear old content
  const home = new PageLoader("content");
  home.render();
});

// Menu button click
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  const menu = new MenuLoader("content");
  menu.render();
});

setupMenuToggle();
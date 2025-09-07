import PageLoader from "./pageLoad";
import setupMenuToggle from "./menuToggle";
import "./styles.css";

// Create an instance, targetting #content
const loader = new PageLoader("content");
loader.render();

setupMenuToggle();
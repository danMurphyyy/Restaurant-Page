import streetView from "./assets/streetView.webp";
import "./styles.css"; // make sure this is imported

class PageLoader {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render() {
    // Clear out any old content
    this.container.innerHTML = "";

    // Create wrapper with background image
    const wrapper = document.createElement("div");
    wrapper.classList.add("page-wrapper");
    wrapper.style.backgroundImage = `url(${streetView})`;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Welcome to The Royal Oak!";

    // Paragraph
    const para = document.createElement("p");
    para.textContent =
      "We are a community focused pub in Kings Bromley, aiming to provide good pints at good prices.";

    // Assemble
    overlay.appendChild(heading);
    overlay.appendChild(para);
    wrapper.appendChild(overlay);
    this.container.appendChild(wrapper);
  }
}

export default PageLoader;

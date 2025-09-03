class PageLoader {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render() {
    const heading = document.createElement("h2");
    heading.textContent = "Welcome to The Royal Oak!"

    const para = document.createElement("p");
    para.textContent = "We are a community focused pub in Kings Bromley, aiming to provide good pints at good prices";

    this.container.appendChild(heading);
    this.container.appendChild(para);
  }
}

export default PageLoader;
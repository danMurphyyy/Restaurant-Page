import streetView from "./assets/streetView.webp";
import "./styles.css";

class PageLoader {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentSlide = 0;
    this.slides = [];
    this.intervalId = null;
    this.startX = 0;
    this.endX = 0;
  }

  render() {
    this.container.innerHTML = "";

    // ---------------- HERO ----------------
    const hero = document.createElement("div");
    hero.classList.add("page-wrapper");
    hero.style.backgroundImage = `url(${streetView})`;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const heading = document.createElement("h2");
    heading.textContent = "Welcome to The Royal Oak!";

    const para = document.createElement("p");
    para.textContent = "A community-focused pub in Kings Bromley, providing good pints at good prices.";

    overlay.appendChild(heading);
    overlay.appendChild(para);
    hero.appendChild(overlay);
    this.container.appendChild(hero);

    // ---------------- ABOUT ----------------
    const about = document.createElement("section");
    about.classList.add("about-section");

    const aboutHeading = document.createElement("h3");
    aboutHeading.textContent = "About Us";

    const aboutText = document.createElement("p");
    aboutText.textContent = "The Royal Oak has been serving locals and visitors since 1890. Relax, enjoy a pint, and soak in the warm atmosphere.";

    about.appendChild(aboutHeading);
    about.appendChild(aboutText);
    this.container.appendChild(about);

    // ---------------- CAROUSEL ----------------
    const carouselSection = document.createElement("section");
    carouselSection.classList.add("carousel-section");

    const carouselHeading = document.createElement("h3");
    carouselHeading.textContent = "Our Specials";
    carouselSection.appendChild(carouselHeading);

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    for (let i = 1; i <= 11; i++) {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");

      const img = document.createElement("img");
      img.src = `./assets/pic${i}.webp`;
      img.alt = `Dish ${i}`;

      const title = document.createElement("h4");
      title.textContent = `Dish ${i}`;

      const desc = document.createElement("p");
      desc.textContent = `A tasty dish to enjoy. Description for dish ${i}.`;

      slide.appendChild(img);
      slide.appendChild(title);
      slide.appendChild(desc);
      carousel.appendChild(slide);
      this.slides.push(slide);
    }

    carouselSection.appendChild(carousel);

    // Buttons
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "<";
    prevBtn.classList.add("carousel-btn", "prev");

    const nextBtn = document.createElement("button");
    nextBtn.textContent = ">";
    nextBtn.classList.add("carousel-btn", "next");

    carouselSection.appendChild(prevBtn);
    carouselSection.appendChild(nextBtn);
    this.container.appendChild(carouselSection);

    // Initial display
    this.slides.forEach((slide, index) => {
      slide.style.opacity = index === 0 ? "1" : "0";
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.left = "0";
      slide.style.width = "100%";
      slide.style.transition = "opacity 0.8s ease-in-out";
    });

    prevBtn.addEventListener("click", () => this.showSlide(this.currentSlide - 1));
    nextBtn.addEventListener("click", () => this.showSlide(this.currentSlide + 1));

    // Swipe events
    carousel.addEventListener("touchstart", (e) => this.onTouchStart(e), false);
    carousel.addEventListener("touchend", (e) => this.onTouchEnd(e), false);

    this.startAutoSlide();
  }

  showSlide(index) {
    this.slides[this.currentSlide].style.opacity = "0";
    this.currentSlide = (index + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].style.opacity = "1";
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.showSlide(this.currentSlide + 1);
    }, 4000);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  onTouchStart(event) {
    this.startX = event.touches[0].clientX;
    this.stopAutoSlide();
  }

  onTouchEnd(event) {
    this.endX = event.changedTouches[0].clientX;
    const diff = this.startX - this.endX;

    if (Math.abs(diff) > 50) { // swipe threshold
      if (diff > 0) this.showSlide(this.currentSlide + 1); // swipe left
      else this.showSlide(this.currentSlide - 1); // swipe right
    }

    this.startAutoSlide();
  }
}

export default PageLoader;

import "./styles.css"; // if you have menu-specific styles

class MenuLoader {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render() {
    const heading = document.createElement("h2");
    heading.textContent = "Our Menu";

    const menuList = document.createElement("ul");

    const items = [
      { name: "Fish & Chips", desc: "Classic pub dish", price: "£12" },
      { name: "Burger", desc: "Beef patty with fries", price: "£10" },
      { name: "Steak", desc: "Cooked to perfection", price: "£20" },
    ];

    items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.name}</strong> - ${item.desc} (${item.price})`;
      menuList.appendChild(li);
    });

    this.container.appendChild(heading);
    this.container.appendChild(menuList);
  }
}

export default MenuLoader;

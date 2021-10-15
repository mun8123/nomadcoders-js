import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

console.dir(h2);

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The Mouse is here!";
    h2.style.color = colors[0];
  },

  handleMouseLeave: function () {
    h2.innerText = "The Mouse is gone!";
    h2.style.color = colors[1];
  },

  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },

  handleContextmenu: function () {
    h2.innerText = "The was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);

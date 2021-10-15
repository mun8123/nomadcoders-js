import "./styles.css";

const Body = document.querySelector("body");

console.dir(Body);
console.dir(window);

function changeBgColor() {
  const Width = window.innerWidth;
  let bgColor = Body.style.background;

  if (Width <= 800) {
    bgColor = "#2D8ED6"; //blue
  } else if (Width > 800 && Width < 1200) {
    Body.style.background = "#904EAD"; //purple
  } else if (Width >= 1200) {
    Body.style.background = "#EEBC12"; //yellow
  }
}

window.addEventListener("resize", changeBgColor);

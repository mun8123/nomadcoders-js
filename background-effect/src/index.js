const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const body = document.querySelector("body");
  const btn = document.querySelector("button");
  
  function selecRandomColor() {
    const choosenColor = [];
    choosenColor[0] = colors[Math.floor(Math.random() * colors.length)];
    choosenColor[1] = colors[Math.floor(Math.random() * colors.length)];
  
    while (1) {
      if (choosenColor[0] === choosenColor[1]) {
        choosenColor[1] = colors[Math.floor(Math.random() * colors.length)];
      } else if (choosenColor[0] !== choosenColor[1]) {
        break;
      }
    }
  
    return choosenColor;
  }
  
  function changeBgColor() {
    body.style.background = `linear-gradient(90deg, ${selecRandomColor()})`;
  }
  
  changeBgColor();
  btn.addEventListener("click", changeBgColor);
  
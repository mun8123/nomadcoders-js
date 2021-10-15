const clockTitle = document.querySelector(".js-clock");

function calClock() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const xmas = new Date(`${thisYear}/12/25/00:00:00`);
  const gap = xmas - today;

  const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.ceil((gap % (1000 * 60)) / 1000);

  const leftDate = `${day}d ${hour}h ${min}m ${sec}s`;
  return leftDate;
}

function printClock() {
  const leftdate = calClock();
  clockTitle.innerText = leftdate;
}

printClock();
setInterval(printClock, "1000");

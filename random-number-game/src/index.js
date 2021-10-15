const inputForm = document.querySelector("#gameForm");
const rangeNumInput = inputForm.querySelector("#rangeNumInput");
const playBtn = inputForm.querySelector("#playBtn");
const guessNumInput = inputForm.querySelector("#guessNumInput");

function main(event) {
  event.preventDefault();
  const rangeMax = rangeNumInput.value;
  const randnum = Math.floor(Math.random() * rangeMax);
  localStorage.setItem("randnum", randnum);

  const selectednum = parseInt(guessNumInput.value);
  localStorage.setItem("selectednum", selectednum);

  PrintResult(selectednum, randnum, rangeMax);
}

const gameSummary = document.querySelector("#gameResult p:first-child");
const gameResult = document.querySelector("#gameResult p:last-child");

function GameResult(selectednum, randnum, rangeMax) {
  if (selectednum === randnum) {
    gameResult.innerText = "You won!";
  } else if (selectednum >= rangeMax) {
    alert("Too big number!");
  } else {
    gameResult.innerText = "You lost!";
  }
}

function PrintResult(selectednum, randnum, rangeMax) {
  gameSummary.innerText = `You chose: ${selectednum}, the machine chose: ${randnum}`;
  GameResult(selectednum, randnum, rangeMax);
}

playBtn.addEventListener("click", main);

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//write your code here
let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "times";

window.onload = render;

function render() {
  document.querySelector(".board").innerHTML = board
    .map(elm => drawGrid(elm))
    .join("");

  document.querySelectorAll(".grid").forEach((node, index) =>
    node.addEventListener("click", function() {
      play(index);
    })
  );
}

function play(index) {
  board[index] = currentPlayer;
  if (currentPlayer === "times") {
    currentPlayer = "circle";
  } else {
    currentPlayer = "times";
  }
  render();
}

function drawGrid(symbol = "times") {
  return `<div class="grid">
  <i class="fas fa-${symbol}"></i>
</div>`;
}

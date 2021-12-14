/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let board = [null, null, null, null, null, null, null, null, null];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".board").innerHTML = board

    .map(elm => drawGrid(elm))
    .join("");
};

function drawGrid(symbol = "times") {
  return `<div class="grid">
  <i class="${symbol}"></i>
</div>`;
}

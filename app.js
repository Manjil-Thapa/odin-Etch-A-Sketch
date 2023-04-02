document.addEventListener("DOMContentLoaded", function () {
  createBoard(32);
});

function createBoard(size) {
  let board = document.querySelector("#board");
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let pixels = size * size;

  for (let i = 0; i < pixels; i++) {
    let divs = document.createElement("div");
    divs.classList.add("pixel");
    board.insertAdjacentElement("beforeend", divs);
  }
}

// Global default color
let color = "black";

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  // Variable for a button
  let gridSizeBtn = document.querySelector("#grid-size");
  gridSizeBtn.addEventListener("click", function () {
    let size = gridSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let board = document.querySelector("#board");
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let pixels = size * size;

  for (let i = 0; i < pixels; i++) {
    let divs = document.createElement("div");
    divs.classList.add("pixel");
    // Draw
    divs.addEventListener("mouseover", pixelColor);
    board.insertAdjacentElement("beforeend", divs);
  }
}

// Promt for canvas dimensions
const gridSize = () => {
  let input = prompt("Insert a number between 1 to 100 for your canvas size");
  if (!input || input < 0 || input > 100) {
    document.querySelector("#prompt-msg").textContent =
      "Please provide a number from 1 to 100";
  }
  if (input <= 0 || input > 100) {
    document.querySelector("#prompt-msg").textContent =
      "You can only insert a number in the range of 1 to 100";
  } else {
    document.querySelector("#prompt-msg").textContent = "Enjoy!";
    return input;
  }
};

// Pixel colors
function pixelColor() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

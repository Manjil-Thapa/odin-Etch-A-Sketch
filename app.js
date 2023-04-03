// Global selectors
let color = "black";
let handleColor = false;

document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      handleColor = !handleColor;
      let sketch = document.querySelector("#sketch");
      if (handleColor) {
        sketch.textContent = "Mode: Drawing";
      } else {
        sketch.textContent = "Mode: Not drawing";
      }
    }
  });

  // Variable for a button
  let gridSizeBtn = document.querySelector("#grid-size");
  gridSizeBtn.addEventListener("click", function () {
    reset();
    let size = gridSize();
    createGrid(size);
    clearBoard();
  });
});

function createGrid(size) {
  let board = document.querySelector("#board");
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let pixels = size * size;

  for (let i = 0; i < pixels; i++) {
    let divs = document.createElement("div");
    divs.classList.add("pixel");
    divs.style.backgroundColor = "white";
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

// Pen color
function pixelColor() {
  if (handleColor) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "black") {
      this.style.backgroundColor = "black";
    } else {
      this.style.backgroundColor = "white";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

// Clear board
function clearBoard() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

// Reset pixels and board
function reset() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

// Toggle grid lines
const toggleGrid = document.querySelector("#toggle-grid");
toggleGrid.addEventListener("click", function () {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.classList.toggle("toggle-grid");
  });
});

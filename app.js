// Global selectors
let color = "black";
let handleColor = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      handleColor = !handleColor;
      let sketch = document.querySelector("#sketch");
      if (handleColor) {
        sketch.textContent = "Pen on";
      } else {
        sketch.textContent = "Pen off";
      }
    }
  });

  // Variable for a button
  let gridSizeBtn = document.querySelector("#grid-size");
  gridSizeBtn.addEventListener("click", function () {
    reset();
    let size = gridSize();
    createBoard(size);
    clearBoard();
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

// Pixel colors
function pixelColor() {
  if (handleColor) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      // } else if (color == "getColor") {
      //   let newColor = document.querySelector("#get-color");
      //   newColor.addEventListener("click", function (e) {
      //     return e.target.value;
      //   });
    } else {
      this.style.backgroundColor = "black";
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

let newColor = document.querySelector("#get-color");
newColor.addEventListener("click", function (e) {
  console.log(e.target.value);
});

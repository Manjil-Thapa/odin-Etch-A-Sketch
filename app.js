const mainDiv = document.querySelector("#main-div");
// document.createElement("div");
// const input = prompt("How many pixel would you like?");

function userInput(input) {
  for (let i = 0; i < input; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("square");
    mainDiv.append(pixel);
  }
}

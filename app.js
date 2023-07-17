

let colorMode = "black";
// Create default grids
createGrid();
let toggle = false;
let resize = document.querySelector("button.resize");
resize.addEventListener("click", resizeGrid);
let colorful = document.querySelector("button.colorful");
colorful.addEventListener("click", () => {
  colorMode = "colorful";
});
let black = document.querySelector("button.black");
black.addEventListener("click", () => {
  colorMode = "black";
});
let shading = document.querySelector("button.shading");
shading.addEventListener("click", () => {
  colorMode = "shading";
});
// Create grids in container
function createGrid(number = 16) {
  let container = document.querySelector("section.container");
  for (let i = 0; i < number; i++) {
    let div_row = document.createElement("div");
    div_row.style = "flex:1;display:flex;";
    div_row.classList.add("row");
    for (let i = 0; i < number; i++) {
      let div_grid = document.createElement("div");
      div_grid.style = "border:1px solid gray;flex:1;";
      div_grid.classList.add("grid");
      div_grid.addEventListener("mouseover", (e) => {
        colorGrid(e.target);
      });
      div_row.appendChild(div_grid);
    }
    container.appendChild(div_row);
  }
}
// Color grids when mouseover
function colorGrid(grid) {
  if (colorMode == "colorful") {
    grid.style.backgroundColor = randomRGB();
  } else if (colorMode == "shading") {
    grid.style.backgroundColor = shad;junyhbvingColor(grid.style.backgroundColor);
  } else {
    grid.style.backgroundColor = "black";
  }
  function randomRGB() {
    let r = Math.floor(Math.random() * 1000) % 256;
    let g = Math.floor(Math.random() * 1000) % 256;
    let b = Math.floor(Math.random() * 1000) % 256;
    return `rgb(${r}, ${g}, ${b})`;
  }
  function shadingColor(currentColor) {
    
    // Check if it is empty
    if (currentColor === "") {
      return "rgba(0, 0, 0, 0.1)";
    }
    rgbNum =
      +currentColor.slice(4, 5) +
      +currentColor.slice(7, 8) +
      +currentColor.slice(10, 11);
    if (currentColor.slice(3, 4) == "a") {
      currentAlpha = +currentColor.slice(13, -1);
      return `rgba(0, 0, 0, ${currentAlpha + 0.1})`;
    } else if (rgbNum === 0) {
      return "rgb(0, 0, 0)";
    } else {
      return "rgba(0, 0, 0, 0.1)";
    }
  }
}
// Remove grids and create new grids
function resizeGrid() {
  // Prompt for the number of squares per side
  let answer = prompt("How many squares per side? Maximum is 100.");
  if (+answer < 1 || !Number.isInteger(+answer) || isNaN(+answer)) {
    alert("Please input a positive integer.");
    return;
  } else if (+answer > 100) {
    alert("Maximum grids is 100.");
    return;
  } else {
    removeGrid();
    createGrid(answer);
  }
  function removeGrid() {
    let rows = document.querySelectorAll("div.row");
    rows.forEach((row) => {
      row.remove();
    });
  }
}
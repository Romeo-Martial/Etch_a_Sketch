function main() {
  // Add a popup asking the number of square per side
  const newGridBtn = document.getElementById("newGridBtn");
  newGridBtn.addEventListener("click", () => {
    const squaresPerSide = prompt(
      "Enter number of squares per side (mawimum 100): "
    );
    // create the grid if the user enters a number between 1 and 100
    if (
      squaresPerSide !== null &&
      squaresPerSide > 0 &&
      squaresPerSide <= 100
    ) {
      console.log(`User wants ${squaresPerSide} squares per side`);
      makeGrid(squaresPerSide);
    }
  });
}

// Implement a function to make the grid
function makeGrid(size) {
  const container = document.getElementById("container_2");
  container.innerHTML = ""; // clear old grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.width = `${100 / size}vw`;
    square.style.height = `${100 / size}vw`;
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
  }
}

main();

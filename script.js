// Create a 16x16 grid of square divs.
// create 256 div elements inside div with id "container"
const container = document.getElementById("container");
for (let i = 0; i < 256; i++) {
  const divItem = document.createElement("div");
  container.appendChild(divItem);
}

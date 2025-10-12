# Etch-a-Sketch

A digital recreation of the classic Etch-a-Sketch toy built with vanilla HTML, CSS, and JavaScript. Draw by hovering your mouse over the grid squares!

## Features

- **Dynamic Grid Creation**: Create grids from 1x1 up to 100x100 squares
- **Mouse Drawing**: Draw by simply hovering your mouse over the grid squares
- **Responsive Design**: Grid adapts to viewport size for consistent drawing experience
- **Clean Interface**: Simple, intuitive controls with a retro-inspired design

## How to Use

1. Open `index.html` in your web browser
2. Click the **"New Grid"** button to start
3. Enter your desired grid size (1-100 squares per side) when prompted
4. Start drawing by moving your mouse over the grid squares
5. Create a new grid anytime by clicking the "New Grid" button again

## Demo

The application creates a square grid where each cell changes to black when you hover over it with your mouse, simulating the drawing experience of a traditional Etch-a-Sketch.

## Project Structure

```
Etch_a_Sketch/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality
├── package.json    # Project metadata
└── README.md       # This file
```

## Technical Details

- **Grid Generation**: Dynamically creates grid squares using JavaScript DOM manipulation
- **Responsive Sizing**: Uses viewport width (vw) units to ensure grid always fits the screen
- **Event Handling**: Utilizes `mouseenter` events for drawing interaction
- **Flexbox Layout**: CSS flexbox for responsive grid arrangement

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start drawing!

No build process or dependencies required - it's pure vanilla JavaScript!

## Browser Compatibility

This project works in all modern browsers that support:

- ES6 JavaScript features
- CSS Flexbox
- DOM manipulation APIs

## Future Enhancements

Potential features that could be added:

- [ ] Color picker for different drawing colors
- [ ] Eraser mode
- [ ] Save/export drawings
- [ ] Progressive darkening with multiple passes
- [ ] Rainbow mode with random colors
- [ ] Clear button (without creating new grid)

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the [ISC License](LICENSE).

---

**Enjoy your digital Etch-a-Sketch experience!** 🎨

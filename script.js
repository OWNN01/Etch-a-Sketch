// Set environment variables

let height = 16;
let width = 16;
let hoverColor = "red";

// Set up the grid container

const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexDirection = "column";

// Initialize the starting grid

createGrid(width, height);

//function to build the grid and set listeners accordingly

function createGrid(width, height) {
    let divs = container.querySelectorAll(".gridRow");
    divs.forEach((e) => container.removeChild(e));
    if (width > 100 || height > 100) {
        return;
    }
    for (let i = 0; i < height; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridRow.style.display = "flex";
        gridRow.style.justifyContent = "center";
        container.appendChild(gridRow);
        for (let i = 0; i < width; i++) {
            const content = document.createElement("div");
            content.classList.add("grid");
            content.style.width = "10px";
            content.style.height = "10px";
            content.style.margin = "1px";
            content.style.backgroundColor = "black";
            gridRow.appendChild(content);
        }
    }
    let gridPoints = document.querySelectorAll(".grid");

    gridPoints.forEach((e) => {
        e.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = hoverColor;
        });
    });
    const resetButton = document.querySelector(".resetButton");

    resetButton.addEventListener("click", () => {
        gridPoints.forEach((e) => e.style.backgroundColor = "black");
    });
};

// Build the title text on the page.

const title = document.querySelector(".title");
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.margin = "20px";


// Build out the reset button on the page.

const reset = document.querySelector(".reset");
reset.style.display = "flex";
reset.style.justifyContent = "center";
reset.style.margin = "20px";

// Set up the reset button to function.

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", () => {
    gridPoints.forEach((e) => e.style.backgroundColor = "black");
});

// Set up the sizing button on the page.

const sizer = document.querySelector(".sizer");
sizer.style.display = "flex";
sizer.style.justifyContent = "center";
sizer.style.margin = "20px";

// Set up the sizing button to work.

const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", () => {
    do {
        height = prompt("Enter a height 1-100.");
        width = prompt("Enter a width 1-100.");
    } while (!((height < 100 && width < 100) && (height > 0 && width > 0)));
    createGrid(height, width);
});

// Set up the color selection button.

const color = document.querySelector(".color");
color.style.display = "flex";
color.style.justifyContent = "center";
color.style.margin = "20px";


// Set up the color selection button to work.

const colorButton = document.querySelector(".colorChooser");

colorButton.addEventListener("click", () => {
    hoverColor = prompt("Enter a color for your etch-a-sketch.");
    createGrid(height, width);
});

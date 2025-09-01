let height = 16;
let width = 16;

const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexDirection = "column";

createGrid(width, height);

function createGrid(width, height) {
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
            content.style.margin = "0px";
            content.style.backgroundColor = "black";
            gridRow.appendChild(content);
        }
    }
    let gridPoints = document.querySelectorAll(".grid");

    gridPoints.forEach((e) => {
        e.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "red";
        });
    });
    const resetButton = document.querySelector(".resetButton");

    resetButton.addEventListener("click", () => {
        gridPoints.forEach((e) => e.style.backgroundColor = "black");
    });
};

const title = document.querySelector(".title");
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.margin = "20px";


const reset = document.querySelector(".reset");
reset.style.display = "flex";
reset.style.justifyContent = "center";
reset.style.margin = "20px";

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", () => {
    gridPoints.forEach((e) => e.style.backgroundColor = "black");
})

const sizer = document.querySelector(".sizer");
sizer.style.display = "flex";
sizer.style.justifyContent = "center";
sizer.style.margin = "20px";

const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", () => {
    height = prompt("Enter a height 1-100.");
    width = prompt("Enter a width 1-100.");
    let divs = container.querySelectorAll(".gridRow");
    divs.forEach((e) => container.removeChild(e));
    createGrid(height, width);
});




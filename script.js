const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexDirection = "column";


for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.style.display = "flex";
    gridRow.style.justifyContent = "center";
    container.appendChild(gridRow);
    for (let i = 0; i < 16; i++) {
        const content = document.createElement("div");
        content.classList.add("grid");
        content.style.width = "10px";
        content.style.height = "10px";
        content.style.margin = "4px";
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

const title = document.querySelector(".title");
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.margin = "20px";


const reset = document.querySelector(".reset");
reset.style.display = "flex";
reset.style.justifyContent = "center";
reset.style.margin = "20px";

reset.addEventListener("click", () => {
    gridPoints.forEach((e) => e.style.backgroundColor = "black");
})


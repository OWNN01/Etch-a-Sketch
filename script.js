const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
container1.style.display = "flex";
container2.style.display = "flex";
container3.style.display = "flex";
container4.style.display = "flex";

for (let i = 0; i < 16; i++) {
    const content = document.createElement("div");
    content.classList.add("grid");
    content.style.width = "100px";
    content.style.height = "100px";
    content.style.margin = "16px";
    content.style.backgroundColor = "black";
    if (i < 4) {
        container1.appendChild(content);
    } else if (i < 8) {
        container2.appendChild(content);
    } else if (i < 12) {
        container3.appendChild(content);
    } else {
        container4.appendChild(content);
    }
}

let gridPoints = document.querySelectorAll(".grid");


gridPoints.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "red";
    });
});



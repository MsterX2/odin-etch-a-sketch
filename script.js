const main = document.querySelector("#main")

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256)
}

main.addEventListener("mouseover", (event) => {
    if (!event.target.classList.contains("cell")) return;
    event.target.style.backgroundColor = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
    let opacityValue = event.target.style.opacity;
    if (opacityValue === "") event.target.style.opacity = 0.1;
    else if (opacityValue == 1) return;
    else event.target.style.opacity = +opacityValue + 0.1
})

function createGrid (numberOfCells) {
    const porcentaje = 100 / numberOfCells;
    for (let i = 0; i<numberOfCells**2;i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.height = porcentaje + "%" 
        cell.style.width = porcentaje + "%";
        main.appendChild(cell)
    }
}

window.onload = () => {
    const chooseSketchSize = document.createElement("button");
    chooseSketchSize.textContent = "change sketch pad size"
    chooseSketchSize.addEventListener("click", () => {
        const newSize = prompt("choose your sketch pad size")
        main.innerHTML = "";
        createGrid(newSize)
    })
    document.querySelector("body").insertBefore(chooseSketchSize, main)
    createGrid(4)
}
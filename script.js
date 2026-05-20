const main = document.querySelector("#main")

function createGrid (numberOfCells) {
    const porcentaje = 100 / numberOfCells;
    for (let i = 0; i<numberOfCells**2;i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.height = porcentaje + "%" 
        cell.style.width = porcentaje + "%";
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "aqua";
        })
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
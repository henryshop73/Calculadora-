import {
    actionButtons,
    buttonClose,
    buttonMin,
    buttonMax
} from "./constants.js"

actionButtons.addEventListener("mouseout", disableActionButtons)
actionButtons.addEventListener("mouseover", enableActionButons)
buttonClose.addEventListener("click", clicOnButtonClose)
buttonMin.addEventListener("click", clicOnButtonMin)
buttonMax.addEventListener("click", clicOnButtonMax)

function enableActionButons() {
    buttonClose.classList.add("text-color-black")
    buttonMin.classList.add("text-color-black")
    buttonMax.classList.add("text-color-black")
}

function disableActionButtons() {
    buttonClose.classList.remove("text-color-black")
    buttonMin.classList.remove("text-color-black")
    buttonMax.classList.remove("text-color-black")
}

function clicOnButtonClose() {
    alert("Close Button")
}
function clicOnButtonMin() {
    alert("Button Min")
}
function clicOnButtonMax() {
    alert("Button Max")
}
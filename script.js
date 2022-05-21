
let actionButtons = document.getElementById("actionsButtons")
actionButtons.addEventListener("mouseout", disableActionButtons)
actionButtons.addEventListener("mouseover", enableActionButons)
let buttonClose = document.getElementById("buttonClose")
let buttonMin = document.getElementById("buttonMin")
let buttonMax = document.getElementById("buttonMax")



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
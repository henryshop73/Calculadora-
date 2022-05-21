
let actionButtons = document.getElementById("actionsButtons")
actionButtons.addEventListener("mouseover", activeButtons )
actionButtons.addEventListener("mouseout", disableActionButtons)
actionButtons.addEventListener("mouseover", activeButtonsMin)
actionButtons.addEventListener("mouseout", disableActionButtonsMin)
actionButtons.addEventListener("mouseover", activeButtonMax)
actionButtons.addEventListener("mouseout", disableButtonMax)


function activeButtons() {
    let buttonClose = document.getElementById("buttonClose")
    buttonClose.classList.add("text-color-black")
}
function disableActionButtons() {
    let buttonClose = document.getElementById("buttonClose")
    buttonClose.classList.remove("text-color-black")
}

function activeButtonsMin() {
    let buttonMin = document.getElementById("buttonMin")
    buttonMin.classList.add("text-color-black")
}
function disableActionButtonsMin() {
    let buttonMin = document.getElementById("buttonMin")
    buttonMin.classList.remove("text-color-black")
}

function activeButtonMax() {
    let buttonMax = document.getElementById("buttonMax")
    buttonMax.classList.add("text-color-black")
}
function disableButtonMax() {
    let buttonMax = document.getElementById("buttonMax")
    buttonMax.classList.remove("text-color-black")
}
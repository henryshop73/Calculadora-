
let actionButtons = document.getElementById("actionsButtons")
actionButtons.addEventListener("mouseover", activeButtons )
actionButtons.addEventListener("mouseout", disableActionButtons)


function activeButtons() {
    let buttonClose = document.getElementById("buttonClose")
    buttonClose.classList.add("text-color-black")
}
function disableActionButtons() {
    let buttonClose = document.getElementById("buttonClose")
    buttonClose.classList.remove("text-color-black")
}
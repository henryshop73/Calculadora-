
let actionButtons = document.getElementById("actionsButtons")
actionButtons.addEventListener("mouseout", disableActionButtons)
actionButtons.addEventListener("mouseover", enableActionButons)
let buttonClose = document.getElementById("buttonClose")
let buttonMin = document.getElementById("buttonMin")
let buttonMax = document.getElementById("buttonMax")
buttonClose.addEventListener("click", clicOnButtonClose)
buttonMin.addEventListener("click", clicOnButtonMin)
buttonMax.addEventListener("click", clicOnButtonMax)
let buttonSeven = document.getElementById("buttonSeven")
buttonSeven.addEventListener("click", clickOnButtonSeven)
let buttonAc = document.getElementById("buttonAc")
buttonAc.addEventListener("click", clickOnButtonAc)
    
let screen = document.getElementById("screen")

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

function clickOnButtonSeven() {
    screen.textContent += "7"
}

function clickOnButtonAc() {
    screen.textContent = ""
}

document.addEventListener("keydown", function(key) {
    console.log(key)
    switch (key.code) {
        case "Digit7": 
            clickOnButtonSeven()
            break;
    
        default:
            break;
    }
})

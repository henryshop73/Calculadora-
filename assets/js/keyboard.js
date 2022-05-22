import {
    buttonSeven,
    buttonAc,
    buttonEight,
    buttonNine,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonZero,
    buttonComma,
    screen
} from "./constants.js"

buttonSeven.addEventListener("click", clickOnButtonSeven)

buttonAc.addEventListener("click", clickOnButtonAc)

buttonEight.addEventListener("click", clickOnButtonEight)

buttonNine.addEventListener("click", clickOnButtonNine)

buttonFour.addEventListener("click", clickOnButtonFour)

buttonFive.addEventListener("click", clickOnButtonFive)

buttonSix.addEventListener("click", clickOnButtonSix)

buttonOne.addEventListener("click", clickOnButtonOne)

buttonTwo.addEventListener("click", clickOnButtonTwo)

buttonThree.addEventListener("click", clickOnButtonThree)

buttonZero.addEventListener("click", clickOnButtonZero)

buttonComma.addEventListener("click", clickOnButtonComma)
    
function clickOnButtonSeven() {
    screen.textContent += "7"
}

function clickOnButtonAc() {
    screen.textContent = ""
}

function clickOnButtonEight() {
    screen.textContent += "8"
}

function clickOnButtonNine() {
    screen.textContent += "9"
}

function clickOnButtonFour() {
    screen.textContent += "4"
}

function clickOnButtonFive() {
    screen.textContent += "5"
}

function clickOnButtonSix() {
    screen.textContent += "6"
}

function clickOnButtonOne() {
    screen.textContent += "1"
}

function clickOnButtonTwo() {
    screen.textContent += "2"
}

function clickOnButtonThree() {
    screen.textContent += "3"
}

function clickOnButtonZero() {
    screen.textContent += "0"
}

function clickOnButtonComma() {
    screen.textContent += ","
}

document.addEventListener("keydown", function(key) {
    console.log(key)
    switch (key.code) {
        case "Digit7": 
            clickOnButtonSeven()
            break;
        case "Digit8":
            clickOnButtonEight()
            break;
        case "Digit9":
            clickOnButtonNine()
            break;
        case "Digit4":
            clickOnButtonFour()
            break;
        case "Digit5":
            clickOnButtonFive()
            break;
        case "Digit6":
            clickOnButtonSix()
            break;
        case "Digit1":
            clickOnButtonOne()
            break;
        case "Digit2":
            clickOnButtonTwo()
            break;
        case "Digit3":
            clickOnButtonThree()
            break;
        case "Digit0":
            clickOnButtonZero()
            break;
        case "Comma":
            clickOnButtonComma()
            break;
    
        default:
            break;
    }
})

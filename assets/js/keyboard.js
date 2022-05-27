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
    screen,
    buttonAdd,
    buttonEqual,
    buttonSubtract,
    buttonMultiply,
    buttonSplit,
    buttonPercentage
} from "./constants.js"

let firstNumber;
let secondNumber;
let result;
let operation;

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

buttonAdd.addEventListener("click", clickOnButtonAdd)

buttonEqual.addEventListener("click", clickOnButtonEqual)

buttonSubtract.addEventListener("click", clickOnButtonSubtract)

buttonMultiply.addEventListener("click", clickOnButtonMultiply)

buttonSplit.addEventListener("click", clickOnButtonSplit)

buttonPercentage.addEventListener("click", clickOnButtonPercentage)
    
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

function clickOnButtonAdd() {
    firstNumber = screen.textContent
    screen.textContent = ""
    operation ="add"
    
}

function clickOnButtonSubtract() {
    firstNumber = screen.textContent
    screen.textContent = ""
    operation = "subtract"
}

function clickOnButtonMultiply() {
    firstNumber = screen.textContent
    screen.textContent = ""
    operation = "multiply"
}

function clickOnButtonSplit() {
    firstNumber = screen.textContent
    screen.textContent = ""
    operation = "split"
}

function clickOnButtonPercentage() {
    firstNumber = screen.textContent
    screen.textContent = ""
    operation = "percentage"
}

function clickOnButtonEqual() {
    secondNumber = screen.textContent
    
    switch (operation) {
        case "add":
            screen.textContent = parseFloat(firstNumber) + parseFloat(secondNumber)
            break;
        case "subtract":
            screen.textContent = parseFloat(firstNumber) - parseFloat(secondNumber)
            break
        case "multiply":
            screen.textContent = parseFloat(firstNumber) * parseFloat(secondNumber)
            break;
        case "split":
            screen.textContent = parseFloat(firstNumber) / parseFloat(secondNumber)
            break;
        case "percentage":
            screen.textContent = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100
            break
        default:
            break;
    }
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

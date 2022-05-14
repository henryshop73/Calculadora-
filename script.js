function suma() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let suma =parseInt(num1) + parseInt(num2)
    alert("El resultado es: " + suma)
}

function resta() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let resta =parseInt(num1) - parseInt(num2)
    alert("El resultado es: " + resta)
}

function multiplicacion() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let multiplicar = parseInt(num1) * parseInt(num2)
    alert("El resultado es: " + multiplicar)
}

function dividir() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let division = parseInt(num1) / parseInt(num2)
    alert("El resultado es:" + division)
}
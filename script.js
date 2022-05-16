function calcular(operacion) {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let resultado

    switch (operacion) {
        case "suma":
            resultado =  parseInt(num1) + parseInt(num2)
            break;
        case "resta":
            resultado = parseInt(num1) - parseInt(num2)
            break
        case "multiplicacion":
            resultado = parseInt(num1) * parseInt(num2)
            break
        case "dividir":
            resultado = parseInt(num1) / parseInt(num2)
            break
    
        default:
            break;
    }
    alert("El resultado es: " + resultado)
}
/* Desarrollador una calculadora que tenga:
● 2 campos inputs para los operadnos
● 4 botones de operadores básicos (suma, resta, multiplicación, división)
Al realizar la cuenta se deberá actualizar el campo resultado */

let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
let resultado1 = document.getElementById("resultado");

document.getElementById("suma").addEventListener("click", () => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const resultadoFinal = num1 + num2;
    resultado1.value = resultadoFinal;
});

document.getElementById("resta").addEventListener("click", () => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const resultadoFinal = num1 - num2;
    resultado1.value = resultadoFinal;
});

document.getElementById("multiplicacion").addEventListener("click", () => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const resultadoFinal = num1 * num2;
    resultado1.value = resultadoFinal;
});

document.getElementById("division").addEventListener("click", () => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    if (num2 === 0) {
        resultado1.value = "No se pueded dividir por cero";
    } else {
        const resultadoFinal = num1 / num2;
        resultado1.value = resultadoFinal;
    }
});


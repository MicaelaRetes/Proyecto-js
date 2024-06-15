// Algoritmo con un condicional
function verificarNumero() {
    let num = parseFloat(prompt("Introduce un número:"));
    let resultado = {
        valor: num,
        mensaje: ""
    };

    if (num > 0) {
        resultado.mensaje = "El número es positivo.";
    } else if (num < 0) {
        resultado.mensaje = "El número es negativo.";
    } else {
        resultado.mensaje = "El número es cero.";
    }

    console.log(resultado);
}

// Algoritmo utilizando un ciclo
function imprimirNumerosYSumar() {
    let numeros = [];
    let suma = 0;

    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
        suma += i;
    }

    console.log("Números del 1 al 10:", numeros);
    console.log("Suma de los números del 1 al 10:", suma);
}

// Simulador interactivo
function jugar() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = [];
    let adivinanza;
    let exito = false;

    while (!exito) {
        adivinanza = parseInt(prompt("Adivina un número entre 1 y 10:"));
        intentos.push(adivinanza);

        if (adivinanza === numeroSecreto) {
            exito = true;
            alert(`¡Felicidades! Adivinaste el número en ${intentos.length} intentos.`);
        } else if (adivinanza > numeroSecreto) {
            alert("El número secreto es menor. Intenta nuevamente.");
        } else {
            alert("El número secreto es mayor. Intenta nuevamente.");
        }
    }

    console.log("Historial de intentos:", intentos);

    // Búsqueda y filtrado de intentos
    let intentosMayores = intentos.filter(num => num > numeroSecreto);
    let intentosMenores = intentos.filter(num => num < numeroSecreto);

    console.log("Intentos mayores al número secreto:", intentosMayores);
    console.log("Intentos menores al número secreto:", intentosMenores);
}

// Ejemplos de uso
console.log("Algoritmo con un condicional:");
verificarNumero();

console.log("Algoritmo utilizando un ciclo:");
imprimirNumerosYSumar();

// Ejecutar el simulador
jugar();
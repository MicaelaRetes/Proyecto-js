// Algoritmo con un condicional

function verificarNumero(num) {
    if (num > 0) {
        console.log("El número es positivo.");
    } else if (num < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

// Ejemplo de uso
verificarNumero(5);  // El número es positivo.
verificarNumero(-3); // El número es negativo.
verificarNumero(0);  // El número es cero.

// Algoritmo utilizando un ciclo

function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Ejemplo de uso
imprimirNumeros();

// Simulador interactivo

function jugar() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento = 0;
    let adivinanza;

    while (adivinanza != numeroSecreto) {
        adivinanza = parseInt(prompt("Adivina un número entre 1 y 10:"));
        intento++;

        if (adivinanza === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número en ${intento} intentos.`);
        } else if (adivinanza > numeroSecreto) {
            alert("El número secreto es menor. Intenta nuevamente.");
        } else {
            alert("El número secreto es mayor. Intenta nuevamente.");
        }
    }
}

// Ejecutar el simulador
jugar();

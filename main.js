let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = JSON.parse(localStorage.getItem('intentos')) || [];

function verificarAdivinanza() {
    let adivinanza = parseInt(document.getElementById("inputAdivinanza").value);
    intentos.push(adivinanza);

    if (adivinanza === numeroSecreto) {
        document.getElementById("resultadoJuego").innerText = `¡Felicidades! Adivinaste el número en ${intentos.length} intentos.`;
        numeroSecreto = Math.floor(Math.random() * 10) + 1; // Reiniciar número secreto
        intentos = []; // Reiniciar intentos
    } else if (adivinanza > numeroSecreto) {
        document.getElementById("resultadoJuego").innerText = "El número secreto es menor. Intenta nuevamente.";
    } else {
        document.getElementById("resultadoJuego").innerText = "El número secreto es mayor. Intenta nuevamente.";
    }

    localStorage.setItem('intentos', JSON.stringify(intentos));
    mostrarHistorial();
}

function mostrarHistorial() {
    let historial = JSON.parse(localStorage.getItem('intentos')) || [];
    document.getElementById("historialIntentos").innerText = `Historial de intentos: ${historial.join(', ')}`;
}

document.getElementById("btnJugar").addEventListener("click", verificarAdivinanza);
document.getElementById("inputAdivinanza").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        verificarAdivinanza();
    }
});

// Mostrar historial al cargar la página
mostrarHistorial();

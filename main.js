// Variables globales
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = JSON.parse(localStorage.getItem('intentos')) || [];

// Función para verificar la adivinanza utilizando fetch
function verificarAdivinanza() {
    let adivinanza = parseInt(document.getElementById("inputAdivinanza").value);
    intentos.push(adivinanza);

    if (adivinanza === numeroSecreto) {
        document.getElementById("resultadoJuego").innerText = `¡Felicidades! Adivinaste el número en ${intentos.length} intentos.`;
        reiniciarJuego();
    } else if (adivinanza > numeroSecreto) {
        document.getElementById("resultadoJuego").innerText = "El número secreto es menor. Intenta nuevamente.";
    } else {
        document.getElementById("resultadoJuego").innerText = "El número secreto es mayor. Intenta nuevamente.";
    }

    localStorage.setItem('intentos', JSON.stringify(intentos));
    mostrarHistorial();
    obtenerFraseMotivacional(); // Obtener una nueva frase motivacional después de cada intento
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1; // Reiniciar número secreto
    intentos = []; // Reiniciar intentos
}

// Función para mostrar el historial de intentos
function mostrarHistorial() {
    let historial = JSON.parse(localStorage.getItem('intentos')) || [];
    document.getElementById("historialIntentos").innerText = `Historial de intentos: ${historial.join(', ')}`;
}

// Función para obtener una frase motivacional utilizando fetch
async function obtenerFraseMotivacional() {
    try {
        console.log('Intentando obtener una frase motivacional...');
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('No se pudo obtener la frase motivacional');
        }
        const data = await response.json();
        document.getElementById("fraseMotivacional").innerText = `"${data.value}"`;
    } catch (error) {
        console.error('Error al obtener la frase motivacional:', error);
        document.getElementById("fraseMotivacional").innerText = "Error al obtener la frase motivacional. Por favor, intenta nuevamente.";
    }
}

// Asignar eventos
document.getElementById("btnJugar").addEventListener("click", verificarAdivinanza);
document.getElementById("inputAdivinanza").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        verificarAdivinanza();
    }
});

// Mostrar historial y obtener una frase al cargar la página
mostrarHistorial();
obtenerFraseMotivacional();

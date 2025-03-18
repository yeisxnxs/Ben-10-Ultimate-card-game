document.addEventListener("DOMContentLoaded", function () {
    let personaje = JSON.parse(localStorage.getItem("personajeSeleccionado"));
    if (!personaje) return;

    // Mostrar la información del personaje en la interfaz
    document.getElementById("nombrePersonaje").innerText = personaje.nombre;
    document.getElementById("vidaPersonaje").innerText = "Vida: " + personaje.vida;
    document.getElementById("habilidadPersonaje").innerText = personaje.habilidad;

    let turnos = 0;

    function ejecutarHabilidad() {
        turnos++;

        if (personaje.nombre === "Ben 10" && turnos % personaje.turnosParaTransformarse === 0) {
            transformarBen();
        } else if (personaje.nombre === "Gwen" && turnos % personaje.hechizoTurnos === 0) {
            lanzarHechizo();
        }
    }

    function transformarBen() {
        let alienes = ["Fuego Pantanoso", "XLR8", "Cuatro Brazos"];
        let alienAleatorio = alienes[Math.floor(Math.random() * alienes.length)];

        let efecto = document.getElementById("efectoTransformacion");
        efecto.style.display = "block";
        efecto.innerText = "¡Ben se transforma en " + alienAleatorio + "!";

        // Reproducir sonido
        let sonido = document.getElementById("sonidoTransformacion");
        sonido.play();

        setTimeout(() => {
            efecto.style.display = "none";
        }, 2000);
    }

    function lanzarHechizo() {
        let efecto = document.getElementById("efectoHechizo");
        efecto.style.display = "block";
        efecto.innerText = "¡Gwen lanza un hechizo de 1500 de daño!";

        // Reproducir sonido
        let sonido = document.getElementById("sonidoHechizo");
        sonido.play();

        setTimeout(() => {
            efecto.style.display = "none";
        }, 2000);
    }

    // Simulación de turnos en el juego
    setInterval(ejecutarHabilidad, 3000); // Cada 3 segundos avanza un turno
});
document.addEventListener("DOMContentLoaded", function () {
    let turnos = 0;
    
    function cambiarIluminacion() {
        turnos++;
        let iluminacion = document.getElementById("iluminacion");
        
        if (turnos % 3 === 0) {
            iluminacion.style.background = "rgba(255, 255, 200, 0.05)";
        } else {
            iluminacion.style.background = "rgba(255, 255, 200, 0.1)";
        }
    }

    // Simulación de turnos (cada 5 segundos cambia la iluminación)
    setInterval(cambiarIluminacion, 5000);
});

<script src="campo_batalla.js"></script>
function actualizarCountdown() {
    // Fecha del campamento: 11 de diciembre de 2026 a las 00:00:00
    const fechaEvento = new Date("2026-12-11T00:00:00").getTime();
    const ahora = new Date().getTime();
    const tiempoFaltante = fechaEvento - ahora;

    if (tiempoFaltante <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const diasFaltantes = Math.floor(tiempoFaltante / (1000 * 60 * 60 * 24));
    const horasFaltantes = Math.floor((tiempoFaltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosFaltantes = Math.floor((tiempoFaltante % (1000 * 60 * 60)) / (1000 * 60));
    const segundosFaltantes = Math.floor((tiempoFaltante % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = String(diasFaltantes).padStart(2, "0");
    document.getElementById("horas").textContent = String(horasFaltantes).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutosFaltantes).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundosFaltantes).padStart(2, "0");
}

// Mensajes de bienvenida dinámicos
const mensajesBienvenida = [
    "🔥 ¡Prepárate para vivir una experiencia que marcará tu vida!",
    "⛺ ¡El destino de tu identidad se define este diciembre!",
    "✨ ¡Ven y descubre lo que Dios tiene preparado para ti en el Campid!",
    "🚀 ¡No te quedes fuera del campamento más esperado del año!"
];

function cambiarMensajeDinamico() {
    const el = document.getElementById("welcome-message");
    if(el) {
        const randomIndex = Math.floor(Math.random() * mensajesBienvenida.length);
        el.textContent = mensajesBienvenida[randomIndex];
    }
}

// Función para crear las luciérnagas mágicas
function crearLuciernagas() {
    const container = document.getElementById("fireflies");
    if (!container) return;

    const cantidad = 15;
    for (let i = 0; i < cantidad; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.animationDuration = (Math.random() * 8 + 6) + "s";
        firefly.style.animationDelay = (Math.random() * 5) + "s";
        
        container.appendChild(firefly);
    }
}

// Lógica para el Zoom de las imágenes (Modal)
function configurarZoomImagenes() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgExpanded");
    const closeBtn = document.querySelector(".modal-close");
    const imagenesZoom = document.querySelectorAll(".zoomable");

    imagenesZoom.forEach(img => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Ejecutamos todo al cargar
actualizarCountdown();
setInterval(actualizarCountdown, 1000);
setInterval(cambiarMensajeDinamico, 6000);
crearLuciernagas();
configurarZoomImagenes();
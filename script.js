function actualizarCountdown() {
    // Fecha del campamento: 3 de diciembre de 2026 a las 00:00
    const fechaEvento = Temporal.PlainDateTime.from("2026-12-03T00:00:00");
    const ahora = Temporal.Now.plainDateTimeISO();

    const tiempoFaltante = ahora.until(fechaEvento);

    const diasFaltantes = Math.max(0, tiempoFaltante.days);
    const horasFaltantes = Math.max(0, tiempoFaltante.hours);
    const minutosFaltantes = Math.max(0, tiempoFaltante.minutes);
    const segundosFaltantes = Math.max(0, tiempoFaltante.seconds);

    document.getElementById("dias").textContent = String(diasFaltantes).padStart(2, "0");
    document.getElementById("horas").textContent = String(horasFaltantes).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutosFaltantes).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundosFaltantes).padStart(2, "0");
}

// Mensaje dinámico interactivo al entrar
const mensajesBienvenida = [
    "🔥 ¡Prepárate para vivir una experiencia que marcará tu vida! 🔥",
    "⛺ ¡El destino de tu identidad se define este diciembre! ⛺",
    "✨ ¡Ven y descubre lo que Dios tiene preparado para ti en el Campid! ✨",
    "🚀 ¡No te quedes fuera del campamento más esperado del año! 🚀"
];

function cambiarMensajeDinamico() {
    const el = document.getElementById("welcome-message");
    if(el) {
        const randomIndex = Math.floor(Math.random() * mensajesBienvenida.length);
        el.textContent = mensajesBienvenida[randomIndex];
    }
}

// Ejecutamos cuenta regresiva y rotación de mensajes
actualizarCountdown();
setInterval(actualizarCountdown, 1000);
setInterval(cambiarMensajeDinamico, 6000);
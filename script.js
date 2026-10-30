function actualizarCountdown() {
    const fechaEvento = Temporal.PlainDateTime.from("2026-12-04").toPlainDateTime();

    const ahora = Temporal.Now.plainDateTimeISO();

    const diaActual = ahora.day;
    const mesActual = ahora.month;
    const minutosActuales = ahora.minute;
    const segundosActuales = ahora.second;

    const tiempoFaltante = ahora.until(fechaEvento );

    const diasFaltantes = tiempoFaltante.days;
    const horasFaltantes = tiempoFaltante.hours;
    const minutosFaltantes = tiempoFaltante.minutes;
    const segundosFaltantes = tiempoFaltante.seconds;

    document.getElementById("dias").textContent = String(diasFaltantes).padstar(2, "0");
    document.getElementById("horas").textContent = String(horasFaltantes).padstar(2, "0");
    document.getElementById("minutos").textContent = String(minutosFaltantes).padstar(2, "0");
    document.getElementById("segundos").textContent = String(segundosFaltantes).padstart(2, "0");
}

actualizarCountdown();
setInterval(actualizarCountdown, 1000);
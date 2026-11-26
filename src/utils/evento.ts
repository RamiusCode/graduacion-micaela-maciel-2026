// src/utils/evento.ts
// Los datos del evento, en un solo lugar. Encabezado, Fecha, Contador,
// Confirmación, Despedida y el título de la pestaña leen de acá: si cambia
// la fecha o el nombre, se cambia una vez y no queda una sección diciendo
// otra cosa.
//
// ── DATOS EDITABLES ───────────────────────────────────────────────
export const graduada = {
    nombres: "Micaela Maciel",
    apellidos: "Bohorquez Rojas",
};
export const carrera = "Ingeniería Financiera";
export const titulo = "Licenciatura en"; // va encima de la carrera
export const universidad = "Univalle";
export const promocion = 2026;

// El acto de graduación: la fecha del contador y de la sección Fecha
export const fecha = {
    anio: 2026,
    mes: 12, // número normal: 12 = diciembre
    dia: 11,
    hora: "18:00", // 24 h
};
// ────────────────────────────────────────────────────────────────

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MESES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const dos = (n: number) => String(n).padStart(2, "0");

// En UTC para que el día de la semana no cambie según la zona del servidor
const diaSemana = DIAS[new Date(Date.UTC(fecha.anio, fecha.mes - 1, fecha.dia)).getUTCDay()];

export const partesFecha = {
    diaSemana, // "sábado"
    dia: dos(fecha.dia), // "12"
    mes: MESES[fecha.mes - 1], // "diciembre"
    anio: String(fecha.anio),
    hora: fecha.hora,
};

/* Sin zona horaria: el contador la toma en la hora del celular del invitado */
export const fechaIso = `${fecha.anio}-${dos(fecha.mes)}-${dos(fecha.dia)}T${fecha.hora}:00`;

/* "sábado 12 de diciembre de 2026" */
export const fechaLarga = `${diaSemana} ${fecha.dia} de ${partesFecha.mes} de ${fecha.anio}`;

export const nombreCompleto = `${graduada.nombres} ${graduada.apellidos}`;

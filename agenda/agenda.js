/* =========================================================
   PROGRAMA DEL EVENTO
   Editá solo este bloque para cambiar días y actividades.

   Por día:
   - isoDate / start / end: fecha (AAAA-MM-DD) y horario de la jornada;
               se usan para mostrar el horario y para Google Calendar
   - access:  "abierto" o "invitacion"
   - registration: { url, text } link de inscripción (opcional)
   - mapsQuery: texto que se busca en Google Maps
   - note:    aclaración opcional que se muestra debajo de las actividades
   - en cada actividad: speakers ({ name, role, talk }), moderator y
               moderatorLabel ("Coordina", "Modera", "Presenta"), items,
               highlight: true para destacarla
   - sessions: lista de actividades. Si está vacía se muestra
               "Programa detallado en preparación".

   Por actividad:
   - start / end, title (obligatorios)
   - tag:      etiqueta chica gris (opcional)
   - subtitle: línea de color debajo del título (opcional)
   - description, speakers (opcionales)
   - type: "break" para pausas (café, almuerzo)

   Ejemplo:
   { start: "09:00", end: "09:30", title: "Acreditación",
     tag: "Hall central", description: "Retiro de credenciales." },
   ========================================================= */
const EVENT_START = "2026-10-15T09:00:00-03:00";
const EVENT_NAME = "Día Mundial Metropolitano 2026";
const TIMEZONE = "America/Argentina/Jujuy";
// Dirección pública de la página (se usa en el link de Google Calendar).
// Si queda vacía, se usa la dirección desde donde se abre la página.
const PUBLIC_URL = "https://wmd2026-elgranjujuy.github.io/agenda/";

const AGENDA = [
  {
    label: "Día 1",
    weekday: "Jueves",
    date: "15 de octubre de 2026",
    isoDate: "2026-10-15", start: "09:00", end: "16:00",
    access: "abierto",
    registration: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdBss3qmevrMeVZG1W_q7sB63UCyphenmeNxu7KLI9Dagywvw/viewform",
      text: "Cupos limitados de forma presencial. La inscripción es obligatoria."
    },
    venue: "Centro Cultural Éxodo Jujeño",
    address: "Bahía Blanca esq. Pte. Perón",
    city: "San Salvador de Jujuy",
    mapsQuery: "Centro Cultural Éxodo Jujeño, San Salvador de Jujuy",
    summary: "Jornada abierta a toda la comunidad: funcionarios, especialistas y organizaciones de la región y de todo el país.",
    sessions: [
      {
        start: "09:00", end: "09:30",
        title: "Acreditación y bienvenida",
        tag: "Recepción"
      },
      {
        start: "09:30", end: "09:45",
        title: "Palabras de apertura",
        tag: "Apertura",
        description: "Bienvenida a cargo del Intendente de San Salvador de Jujuy, Raúl Jorge, e Intendentes de El Gran Jujuy."
      },
      {
        start: "09:45", end: "10:15",
        title: "Charla de apertura del encuentro",
        tag: "Conferencia",
        highlight: true,
        speakers: [
          { name: "Laura Valdés Cano", role: "Metropolis" }
        ],
        moderatorLabel: "Presenta",
        moderator: "Gustavo Muro, Secretario de Desarrollo Humano de San Salvador de Jujuy"
      },
      {
        start: "10:15", end: "11:10",
        title: "Panel: Avances institucionales en tres experiencias metropolitanas (2016-2026)",
        tag: "Panel",
        speakers: [
          { name: "Gabriela Solano", role: "Coordinadora del ECAM de Santa Fe" },
          { name: "Matías Dalla Torre", role: "UNICIPIO, Mendoza" },
          { name: "Bruno Jerez", role: "Coordinador General de Articulación de El Gran Jujuy" }
        ],
        moderator: "Ciudadanía Metropolitana"
      },
      {
        start: "11:10", end: "12:00",
        title: "Panel: La importancia de la coordinación legislativa en la gestión metropolitana",
        tag: "Panel",
        speakers: [
          { name: "Gastón Millon", role: "Presidente del Concejo Deliberante de San Salvador de Jujuy" },
          { name: "Sergio Basile", role: "Presidente del Concejo Municipal de Santa Fe" },
          { name: "Gastón Chiesa", role: "Fundación Río Cuarto 2030", talk: "Experiencia del Parlamento del Gran Río Cuarto" }
        ],
        moderator: "Roxana García, Presidenta del Parlamento del Gran Jujuy"
      },
      {
        start: "12:00", end: "12:20",
        title: "Conversatorio: la cooperación internacional como incentivo para el desarrollo de la gobernanza metropolitana",
        tag: "Conversatorio",
        subtitle: "Ponencia de cierre de las actividades de la mañana",
        speakers: [
          { name: "María Peix", role: "AMB – Àrea Metropolitana de Barcelona" }
        ],
        moderatorLabel: "Modera",
        moderator: "Claudio Augugliaro"
      },
      {
        start: "12:20", end: "13:00",
        title: "Almuerzo buffet y networking",
        type: "break"
      },
      {
        start: "13:00", end: "14:00",
        title: "Panel: Marcos normativos hacia una institucionalidad metropolitana",
        tag: "Panel",
        speakers: [
          { name: "Rafael Forero", role: "ONU-Hábitat", talk: "Lineamiento para una legislación metropolitana" },
          { name: "Carolina Basualdo", role: "Presidenta de la Comisión de Asuntos Municipales de la Cámara de Diputados de la Nación", talk: "Consideraciones sobre el Proyecto de Ley Federal de Áreas Metropolitanas" },
          { name: "Agustín Romani Norri", role: "Legislador de la Provincia de Tucumán", talk: "Los proyectos de regulación en las provincias argentinas" },
          { name: "Hernán Reyes", role: "Director General del Consejo del Plan Estratégico de Buenos Aires", talk: "El impacto de la ley de Enfoque Metropolitano de las Políticas Públicas en la relación interjurisdiccional" }
        ],
        moderator: "Facundo Cabral, IBATIN – Fundación Metropolitana"
      },
      {
        start: "14:00", end: "15:00",
        title: "Panel: Desafíos de la coordinación multinivel en áreas metropolitanas para el desarrollo de políticas públicas",
        tag: "Panel",
        speakers: [
          { name: "Héctor Floriani", role: "Director General del ECOM Rosario", talk: "Transporte metropolitano en el AM Rosario" },
          { name: "Paula Andrea Pacios Zalazar", role: "Directora del Área Metropolitana del Valle de Aburrá", talk: "El Valle de Aburrá, un modelo de gobernanza metropolitana para el desarrollo sostenible" },
          { name: "Adriana Díaz", role: "Secretaria de Planificación y Ambiente de la Municipalidad de San Salvador de Jujuy" },
          { name: "Mariana Zoricich", role: "Coordinadora General de Planificación Territorial, Municipalidad de Salta" }
        ],
        moderator: "Carolina Osores, Universidad Nacional de Jujuy"
      },
      {
        start: "15:00", end: "16:00",
        title: "Panel: La cooperación internacional y el impulso a la gestión de las metrópolis",
        tag: "Panel",
        speakers: [
          { name: "Natalia Blejman", role: "Coordinadora General de Presidencia del Ente Metropolitano de Córdoba", talk: "Internacionalización de la experiencia Córdoba" },
          { name: "Gastón Gutiérrez", role: "Presidente del Instituto del Valle Inferior de Río Negro", talk: "La experiencia del Consorcio GIRSU Patagónico (Viedma–Carmen de Patagones)" },
          { name: "Belén Pastrana", role: "Secretaría de Relaciones Internacionales de la Provincia de Jujuy" },
          { name: "Jorge Alonzo Guirapoigua Cortez", role: "Asesor del Gobierno Municipal de Porongo", talk: "Los avances en coordinación metropolitana en Santa Cruz de la Sierra, Bolivia" }
        ],
        moderator: "Bautista Pino, RIL"
      },
      {
        start: "16:00",
        title: "Cierre de la jornada: Compromiso Metropolitano al 2036",
        tag: "Cierre",
        highlight: true,
        description: "Los intendentes de El Gran Jujuy ratifican un nuevo Compromiso Metropolitano al 2036.",
        items: ["Lectura y firma de la Declaración de Jujuy sobre Gobernanza Metropolitana, con instituciones de nivel local, nacional e internacional."]
      }
    ]
  },
  {
    label: "Día 2",
    weekday: "Viernes",
    date: "16 de octubre de 2026",
    isoDate: "2026-10-16", start: "08:00", end: "12:00",
    access: "invitacion",
    venue: "Hotel Casino de Palpalá",
    address: "Av. Congreso esq. Inti",
    city: "Palpalá, Jujuy",
    mapsQuery: "Hotel Casino Palpalá, Jujuy",
    summary: "Jornada de trabajo con invitación para funcionarios y líderes de la comunidad.",
    note: "El orden y los horarios de cada actividad se confirmarán próximamente.",
    sessions: [
      {
        start: "08:00", end: "12:00",
        title: "Relanzamiento del Parlamento Metropolitano de El Gran Jujuy",
        tag: "Parlamento Metropolitano",
        subtitle: "Taller sobre Gobernanza Metropolitana",
        description: "Relanzamiento del Parlamento Metropolitano y taller de trabajo sobre gobernanza metropolitana para funcionarios y líderes de la comunidad."
      }
    ]
  }
];

/* =========================================================
   RENDER (no hace falta tocar nada debajo de esta línea)
   ========================================================= */
const $ = id => document.getElementById(id);

const ICONS = {
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  open: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 0 0-6V6H3z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5"/></svg>',
  form: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function mapsUrl(day) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(day.mapsQuery);
}

function hours(day) {
  return `${day.start} a ${day.end} hs`;
}

// Link "Agregar a Google Calendar" con fecha, horario, sede y descripción del día
function googleCalendarUrl(day, index) {
  const stamp = time => day.isoDate.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
  const access = day.access === "invitacion" ? "Evento con invitación." : "Evento abierto.";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${EVENT_NAME} · Día ${index + 1}`,
    dates: `${stamp(day.start)}/${stamp(day.end)}`,
    ctz: TIMEZONE,
    location: `${day.venue}, ${day.address}, ${day.city}`,
    details: `10 años construyendo Gobernanza Metropolitana.

${day.summary || ""}

${access}
Agenda completa: ${PUBLIC_URL || location.href.split("#")[0]}#dia-${index + 1}`
  });
  return "https://calendar.google.com/calendar/render?" + params.toString();
}

function calendarLink(day, index, cls) {
  return `<a class="${cls}" href="${googleCalendarUrl(day, index)}" target="_blank" rel="noopener">
    ${ICONS.calendar} Agregar a Google Calendar</a>`;
}

function accessBadge(day) {
  return day.access === "invitacion"
    ? `<span class="chip chip-invite">${ICONS.lock} Evento con invitación</span>`
    : `<span class="chip chip-open">${ICONS.open} Evento abierto</span>`;
}

function renderTabs(activeIndex) {
  $("dayTabs").innerHTML = AGENDA.map((day, i) => `
    <button role="tab" id="tab-${i}"
      aria-selected="${i === activeIndex}"
      tabindex="${i === activeIndex ? 0 : -1}"
      class="${i === activeIndex ? "active" : ""}"
      data-index="${i}">
      <span class="tab-label">${escapeHtml(day.label)}</span>
      <span class="tab-date">${escapeHtml(day.weekday)} ${escapeHtml(day.date.split(" de ")[0])}</span>
    </button>
  `).join("");
}

function renderSpeaker(sp) {
  if (typeof sp === "string") return `<li class="speaker"><span class="speaker-name">${escapeHtml(sp)}</span></li>`;
  return `
    <li class="speaker">
      <span class="speaker-name">${escapeHtml(sp.name)}</span>
      ${sp.role ? `<span class="speaker-role">${escapeHtml(sp.role)}</span>` : ""}
      ${sp.talk ? `<span class="speaker-talk">“${escapeHtml(sp.talk)}”</span>` : ""}
    </li>`;
}

function renderSession(s) {
  const time = `${escapeHtml(s.start)}${s.end ? " – " + escapeHtml(s.end) : ""}`;

  if (s.type === "break") {
    return `
      <li class="session is-break">
        <time class="session-time">${time}</time>
        <div class="session-body"><h3>${escapeHtml(s.title)}</h3></div>
      </li>`;
  }

  return `
    <li class="session${s.highlight ? " is-highlight" : ""}">
      <time class="session-time">${time}</time>
      <div class="session-body">
        <h3>
          ${escapeHtml(s.title)}
          ${s.tag ? `<span class="tag">${escapeHtml(s.tag)}</span>` : ""}
        </h3>
        ${s.subtitle ? `<p class="subtitle">${escapeHtml(s.subtitle)}</p>` : ""}
        ${s.description ? `<p class="description">${escapeHtml(s.description)}</p>` : ""}
        ${s.items && s.items.length ? `
          <ul class="items">
            ${s.items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}
          </ul>` : ""}
        ${s.speakers && s.speakers.length ? `
          <ul class="speakers">
            ${s.speakers.map(renderSpeaker).join("")}
          </ul>` : ""}
        ${s.moderator ? `
          <p class="moderator"><span>${escapeHtml(s.moderatorLabel || "Coordina")}:</span> ${escapeHtml(s.moderator)}</p>` : ""}
      </div>
    </li>`;
}

function renderEmpty(day) {
  return `
    <li class="empty-state">
      <p class="eyebrow">Próximamente</p>
      <h3>Programa detallado en preparación</h3>
      <p>La jornada se desarrolla de <strong>${escapeHtml(hours(day))}</strong>.
         Muy pronto vas a encontrar acá los paneles, oradores y horarios de cada actividad.</p>
    </li>`;
}

function showDay(index) {
  const day = AGENDA[index];
  renderTabs(index);
  $("dayNumber").textContent = String(index + 1).padStart(2, "0");
  $("dayDate").textContent = `${day.weekday} ${day.date}`;

  $("daySummary").innerHTML = `
    <div class="quick-links">
      ${accessBadge(day)}
      <span class="chip chip-dark">${ICONS.clock} ${escapeHtml(hours(day))}</span>
      <a class="chip chip-light" href="${mapsUrl(day)}" target="_blank" rel="noopener">
        ${ICONS.pin} ${escapeHtml(day.venue)}
      </a>
      ${calendarLink(day, index, "chip chip-calendar")}
    </div>
    ${day.summary ? `<p class="day-text">${escapeHtml(day.summary)}</p>` : ""}
    ${day.registration ? `
      <div class="register-box">
        <div>
          <p class="register-title">Inscripción obligatoria</p>
          <p class="register-text">${escapeHtml(day.registration.text)}</p>
        </div>
        <a class="btn-register" href="${escapeHtml(day.registration.url)}" target="_blank" rel="noopener">
          ${ICONS.form} Inscribirme
        </a>
      </div>` : ""}
  `;

  const tl = $("timeline");
  tl.setAttribute("aria-labelledby", `tab-${index}`);
  tl.innerHTML = day.sessions.length
    ? day.sessions.map(renderSession).join("")
    : renderEmpty(day);
  if (day.note && day.sessions.length) {
    tl.insertAdjacentHTML("beforeend", `<li class="day-note">${escapeHtml(day.note)}</li>`);
  }

  try { history.replaceState(null, "", `#dia-${index + 1}`); } catch (e) { /* sin historial */ }
}

function renderVenues() {
  $("venueGrid").innerHTML = AGENDA.map((day, i) => `
    <article class="venue-card">
      <div class="venue-top">
        <span class="venue-day">Día ${i + 1}</span>
        ${accessBadge(day)}
      </div>
      <p class="venue-date">${escapeHtml(day.weekday)} ${escapeHtml(day.date.replace(" de 2026", ""))} · ${escapeHtml(hours(day))}</p>
      <h3>${escapeHtml(day.venue)}</h3>
      <p class="venue-address">${escapeHtml(day.address)}<br>${escapeHtml(day.city)}</p>
      <div class="venue-links">
        ${day.registration ? `<a href="${escapeHtml(day.registration.url)}" target="_blank" rel="noopener" class="link-arrow link-register">${ICONS.form} Inscribirme</a>` : ""}
        <a href="${mapsUrl(day)}" target="_blank" rel="noopener" class="link-arrow">Ver en el mapa →</a>
        ${calendarLink(day, i, "link-arrow")}
      </div>
    </article>
  `).join("");
}

function renderCountdown() {
  const el = $("countdown");
  const days = Math.ceil((new Date(EVENT_START) - new Date()) / 86400000);
  if (days > 1) el.textContent = `Faltan ${days} días`;
  else if (days === 1) el.textContent = "¡Es mañana!";
  else return;
  el.hidden = false;
}

$("dayTabs").addEventListener("click", e => {
  const btn = e.target.closest("button[data-index]");
  if (btn) showDay(Number(btn.dataset.index));
});

// Navegación con flechas entre pestañas
$("dayTabs").addEventListener("keydown", e => {
  if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
  const current = Number(document.activeElement.dataset.index);
  const next = (current + (e.key === "ArrowRight" ? 1 : -1) + AGENDA.length) % AGENDA.length;
  showDay(next);
  $("dayTabs").querySelector(`[data-index="${next}"]`).focus();
});

// Menú mobile
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".main-nav a").forEach(a =>
  a.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Abrir el día indicado en la URL (#dia-2) o el primero
const match = location.hash.match(/^#dia-(\d+)$/);
const initial = match ? Math.min(Math.max(Number(match[1]) - 1, 0), AGENDA.length - 1) : 0;
renderVenues();
renderCountdown();
showDay(initial);

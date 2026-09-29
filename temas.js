// ─────────────────────────────────────────────────────────────
// CONTENIDO DEL SITIO. Para añadir un tema, añade un bloque a TEMAS.
// ─────────────────────────────────────────────────────────────

const MATERIAS = [
  { id: "en", nombre: "English",            periodos: ["1st Term"] },
  { id: "va", nombre: "Llengua Valenciana", periodos: ["1a Avaluació"] },
  { id: "es", nombre: "Lengua",             periodos: ["1.er Trimestre"] },
];

const SECCIONES = [
  { id: "vocab", nombre: "Vocabulario", ico: "📖" },
  { id: "gram",  nombre: "Gramática",   ico: "🧩" },
];

// tipo "conj": tiempo + pronombre → forma del verbo
// tipo "vocab": palabra → respuesta (items: [pregunta, respuesta])
const TEMAS = [
  {
    id: "va-estar",
    materia: "va", periodo: "1a Avaluació", seccion: "gram",
    titulo: "El verb estar",
    tipo: "conj",
    acentos: "àèéíòóú",
    pronombres: [["jo"], ["tu"], ["ell", "ella"], ["nosaltres"], ["vosaltres"], ["ells", "elles"]],
    tiempos: [
      { id: "pres", cuando: "ara",  nombre: "Present", formas: ["estic", "estàs", "està", "estem", "esteu", "estan"] },
      { id: "pass", cuando: "ahir", nombre: "Passat",  formas: ["vaig estar", "vas estar", "va estar", "vam estar", "vau estar", "van estar"] },
      { id: "fut",  cuando: "demà", nombre: "Futur",   formas: ["estaré", "estaràs", "estarà", "estarem", "estareu", "estaran"] },
    ],
  },
];

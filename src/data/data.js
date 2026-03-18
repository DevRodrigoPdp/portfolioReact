import androidStudioIcon from "../images/icon-android-studio.svg";
import kotlinIcon from "../images/icon-kotlin.svg";
import iconFirebase from "../images/icon-firebase.svg";

import reactIcon from "../images/icon-react.png";
import jsIcon from "../images/icon-js.png";

// ── Synapses — portada + galería ──────────────────────────────
import synapses1 from "../images/projects/synapses/synapses1.png";
import synapses2 from "../images/projects/synapses/synapses2.png";
import synapses3 from "../images/projects/synapses/synapses3.png";
import synapses4 from "../images/projects/synapses/synapses4.png";
import synapses5 from "../images/projects/synapses/synapses5.png";
import synapses6 from "../images/projects/synapses/synapses6.png";
import synapses7 from "../images/projects/synapses/synapses7.png";

// ── CourtVision — portada ─────────────────────────────────────
// import courtvisionImg from "../images/courtvision.png";
const courtvisionImg = null;

export const projects = [
  {
    slug: "synapses",
    title: "Synapses Lab",
    subtitle: "Tienda ecommerce en desarrollo",
    description:
      "Tienda ecommerce desarrollada completamente con React. El proyecto sigue en proceso, ya que estoy implementando varias mejoras relacionadas con la base de datos y su integración/uso dentro de la aplicación.",
    year: "2025",
    status: "En desarrollo",
    image: synapses1,
    sections: [
      {
        title: "Contexto y Propuesta de Valor",
        body: "Synapses Lab es un e-commerce de equipamiento deportivo de alto rendimiento orientado a ciclistas de nicho —Enduro, Gravel, E-Bike y Montaña— con un perfil técnico elevado. El reto no era construir una tienda genérica, sino una plataforma donde la densidad de información del producto (geometría, componentes, certificaciones) coexistiera con una experiencia de compra fluida y sin fricción. La propuesta de valor se apoya en tres pilares: catálogo especializado, gestión de stock en tiempo real y un sistema visual que transmite credibilidad desde el primer impacto.",
        images: [
          { src: synapses1, caption: "Landing — hero editorial con CTA directo al catálogo." },
        ],
      },
      {
        title: "El Reto UX — Fricción y Catálogo",
        body: "El catálogo agrupa productos con tickets medios de entre 450€ y 6.000€, donde el error de compra tiene un coste real. El usuario llega con criterios técnicos formados y necesita validar disponibilidad, disciplina y precio en segundos. La fricción principal residía en la coexistencia de subcategorías muy distintas sin una jerarquía clara. La solución fue un sistema de filtrado por disciplina como primera capa de orientación, combinado con un sistema de badges —Nuevo, Exclusivo, Poco Stock, Agotado— que comunica el estado del producto sin interrumpir el flujo de navegación.",
        images: [
          { src: synapses2, caption: "Catálogo — grid con filtros por disciplina y badges de estado de stock." },
        ],
      },
      {
        title: "Solución UI y Sistema de Diseño",
        body: "La identidad visual se construyó sobre un sistema de alto contraste: negro como base, blanco para la información crítica y rojo para acciones y alertas. La tipografía en mayúsculas y peso máximo no es decorativa; define la jerarquía de lectura y refuerza el posicionamiento de marca en un segmento donde la confianza es decisiva. Las fichas de producto separan lo visual de lo técnico mediante un grid estricto, y los modales de detalle presentan descuentos y especificaciones con la misma legibilidad que una ficha de catálogo impresa.",
        images: [
          { src: synapses3, caption: "Ficha de producto — imagen, especificaciones, precio y CTA en una sola pantalla." },
          { src: synapses6, caption: "Modal de detalle — precio original, descuento aplicado y descripción técnica." },
        ],
      },
      {
        title: "Flujos y Arquitectura Front-end",
        body: "El user journey principal se reduce a tres pasos: hero con CTA → catálogo filtrado por disciplina → ficha de producto con compra directa. La ficha concentra toda la información relevante sin requerir scroll, eliminando el abandono por indecisión. El flujo de autenticación, completamente separado del catálogo, sigue un diseño split-screen que minimiza la carga cognitiva. El acceso mediante Google reduce el abandono en el paso previo al checkout, donde la fricción de registro es máxima.",
        images: [
          { src: synapses4, caption: "Autenticación — split-screen con login por email y acceso rápido con Google." },
        ],
      },
      {
        title: "Gestión y Back-office",
        body: "El panel de inventario replica el mismo sistema de componentes del front: tipografía, colores de estado y estructura de datos consistentes. Cada fila del inventario expone referencia, categoría, precio, estado de stock y acciones (ver, editar, eliminar) en una sola línea, sin necesidad de abrir cada artículo para obtener una visión global. El formulario de edición mantiene los mismos campos que definen la ficha pública, garantizando que lo que el administrador introduce es exactamente lo que el usuario ve.",
        images: [
          { src: synapses5, caption: "Panel de inventario — gestión de stock, precios y estados en tiempo real." },
          { src: synapses7, caption: "Editor de producto — formulario alineado con la ficha pública del catálogo." },
        ],
      },
      {
        title: "Ficha Técnica",
        body: "",
        images: [],
        ficha: [
          { label: "Rol",      value: "Diseño UI/UX · Desarrollo Front-end" },
          { label: "Año",      value: "2025" },
          { label: "Estado",   value: "En desarrollo" },
          { label: "Stack",    value: "React · JavaScript" },
          { label: "Sector",   value: "E-commerce deportivo — Bicicletas" },
        ],
      },
    ],
    link: "https://github.com/DevRodrigoPdp/Synapses/tree/main/Synapses",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: jsIcon },
    ],
  },
  {
    slug: "courtvision",
    title: "CourtVision",
    subtitle: "Mi trabajo de fin de grado",
    description:
      "Aplicación enfocada a entrenadores de baloncesto, donde pueden gestionar sus equipos y entrenamientos.",
    fullDescription: `Escribe aquí la descripción completa de CourtVision.`,
    year: "2024",
    status: "Completado",
    image: courtvisionImg,
    gallery: [],
    link: "https://github.com/DevRodrigoPdp/courtvision-degree",
    technologies: [
      { name: "Android Studio", icon: androidStudioIcon },
      { name: "Kotlin", icon: kotlinIcon },
      { name: "Firebase", icon: iconFirebase },
    ],
  },
];

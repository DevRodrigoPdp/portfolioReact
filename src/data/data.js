import courtvisionImg from "../images/courtvision.png";
import androidStudioIcon from "../images/icon-android-studio.svg";
import kotlinIcon from "../images/icon-kotlin.svg";
import iconFirebase from "../images/icon-firebase.svg";

import portfolioImg from "../images/portfolio-preview.png";
import synapsesImg from "../images/synapsesImg.png"
import reactIcon from "../images/icon-react.png";
import jsIcon from "../images/icon-js.png";
import tailwindIcon from "../images/icon-tailwind.png";

export const projects = [
  {
    title: "Synapses Lab",
    subtitle: "Tienda ecommerce en desarrollo",
    description:
      "Tienda ecommerce desarrollada completamente con React. El proyecto sigue en proceso, ya que estoy implementando varias mejoras relacionadas con la base de datos y su integración/uso dentro de la aplicación.",
    image: synapsesImg,
    link: "https://github.com/DevRodrigoPdp/Synapses/tree/main/Synapses",
    technologies: [
      {
        name: "React",
        icon: reactIcon,
      },
      {
        name: "JavaScript",
        icon: jsIcon,
      },
    ],
  },
  {
    title: "CourtVision",
    subtitle: "Mi trabajo de fin de grado",
    description: "Aplicación enfocada a entrenadores de baloncesto, donde pueden gestionar sus equipos y entrenamientos.",
    image: courtvisionImg,
    link: "https://github.com/DevRodrigoPdp/courtvision-degree",
    technologies: [
      {
        name: "Android Studio",
        icon: androidStudioIcon,
      },
      {
        name: "Kotlin",
        icon: kotlinIcon
      },
      {
        name: "Firebase",
        icon: iconFirebase,
      }
    ],
  }
];

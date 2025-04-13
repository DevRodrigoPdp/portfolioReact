import courtvisionImg from "../images/courtvision.png";
import androidStudioIcon from "../images/icon-android-studio.svg";
import kotlinIcon from "../images/icon-kotlin.svg";
import iconFirebase from "../images/icon-firebase.svg";

import portfolioImg from "../images/portfolio-preview.png";
import reactIcon from "../images/icon-react.png";
import jsIcon from "../images/icon-js.png";
import tailwindIcon from "../images/icon-tailwind.png";

export const projects = [
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
  },
  {
    title: "Portfolio Web",
    subtitle: "Sitio web personal",
    description: "Este portfolio ha sido diseñado y desarrollado por mí para mostrar mi trabajo, experiencia y habilidades en desarrollo frontend.",
    image: portfolioImg,
    link: "https://github.com/DevRodrigoPdp/portfolio",
    technologies: [
      {
        name: "React",
        icon: reactIcon,
      },
      {
        name: "JavaScript",
        icon: jsIcon,
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
      }
    ],
  }
];

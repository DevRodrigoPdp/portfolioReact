import courtvisionImg from "../images/courtvision.png";
import androidStudioIcon from "../images/icon-android-studio.svg";
import kotlinIcon from "../images/icon-kotlin.svg";
import iconFirebase from "../images/icon-firebase.svg";

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
  }
];
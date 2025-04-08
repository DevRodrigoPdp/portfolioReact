import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-400 py-6">
      <p>© {new Date().getFullYear()} Rodrigo Puerta - Todos los derechos reservados</p>

      <div className="mt-2 flex justify-center items-center gap-4">
        <div className="relative group">
          <FaReact className="text-cyan-400 w-6 h-6 hover:scale-110 transition-transform duration-200" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            React
          </span>
        </div>

        <div className="relative group">
          <SiTailwindcss className="text-sky-400 w-6 h-6 hover:scale-110 transition-transform duration-200" />
          <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

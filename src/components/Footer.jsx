import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">© {currentYear} Rodrigo Puerta Del Pozo. Todos los derechos reservados</div>

        <div className="text-sm text-muted-foreground">Diseñado con mucho cariño</div>
      </div>
    </footer>
  )
};

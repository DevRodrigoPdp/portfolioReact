export const Footer = () => (
  <footer
    aria-label="Pie de página"
    className="px-10 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-stone-200"
  >
    <span className="text-[9px] tracking-[0.25em] uppercase text-stone-400">
      © {new Date().getFullYear()} Rodrigo Puerta del Pozo
    </span>
    <span className="text-[9px] tracking-[0.25em] uppercase text-stone-400">
      React · Tailwind · Framer Motion
    </span>
  </footer>
);

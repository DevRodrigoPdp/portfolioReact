export const Footer = () => (
  <footer className="px-10 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
    <span className="text-[9px] tracking-[0.25em] uppercase text-black/25">
      © {new Date().getFullYear()} Rodrigo Puerta del Pozo
    </span>
    <span className="text-[9px] tracking-[0.25em] uppercase text-black/25">
      React · Tailwind · Framer Motion
    </span>
  </footer>
);

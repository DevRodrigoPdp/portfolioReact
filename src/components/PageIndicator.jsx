export const PageIndicator = ({ sections, activeSection, onNavigate }) => (
  <div className="page-indicator">
    {sections.map((section) => (
      <button
        key={section}
        onClick={() => onNavigate(section)}
        className={`indicator-dot ${activeSection === section ? 'active' : ''}`}
        aria-label={`Go to ${section}`}
      />
    ))}
  </div>
);

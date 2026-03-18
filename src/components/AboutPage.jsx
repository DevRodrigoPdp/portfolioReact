import { LiquidBlob } from './LiquidBlob';
import { useLanguage } from '../context/LanguageContext';
import {
  SiReact, SiJavascript, SiTailwindcss, SiNextdotjs,
  SiAstro, SiKotlin, SiFirebase, SiAndroid, SiAngular,
} from 'react-icons/si';

const STACK = [
  { icon: SiReact,        name: 'React',      color: '#61DAFB' },
  { icon: SiJavascript,   name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss,  name: 'Tailwind',   color: '#38BDF8' },
  { icon: SiNextdotjs,    name: 'Next.js',    color: '#ffffff' },
  { icon: SiAngular,      name: 'Angular',    color: '#DD0031' },
  { icon: SiAstro,        name: 'Astro',      color: '#FF5D01' },
  { icon: SiKotlin,       name: 'Kotlin',     color: '#7F52FF' },
  { icon: SiAndroid,      name: 'Android',    color: '#3DDC84' },
  { icon: SiFirebase,     name: 'Firebase',   color: '#FFCA28' },
];

function StackItem({ icon: Icon, name, color }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '0.5rem', padding: '1rem 0.5rem',
      border: '1px solid rgba(255,255,240,0.07)',
      transition: 'border-color 0.3s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,240,0.2)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,240,0.07)'}
    >
      <Icon size={22} color={color} style={{ opacity: 0.85 }} />
      <span className="text-mono" style={{ fontSize: '0.55rem', color: 'rgba(255,255,240,0.4)', letterSpacing: '0.1em' }}>
        {name}
      </span>
    </div>
  );
}

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <section id="about" className="fullscreen-section" style={{ background: '#0a0a0a' }}>
      <LiquidBlob />

      <div className="about-content">
        {/* Left — bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <span className="text-mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,240,0.2)', letterSpacing: '0.15em' }}>
              SOBRE MÍ
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,240,0.08)' }} />
            <span className="text-mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,240,0.2)', letterSpacing: '0.1em' }}>
              26 AÑOS
            </span>
          </div>

          <p className="text-editorial" style={{ color: 'rgba(255,255,240,0.85)', lineHeight: 1.7 }}>
            {t('aboutText')}
          </p>

          {/* Stack visual */}
          <div>
            <span className="text-mono" style={{ fontSize: '0.6rem', color: 'rgba(255,255,240,0.2)', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
              STACK
            </span>
            <div className="about-stack-grid">
              {STACK.map((item) => (
                <StackItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Right — info */}
        <div className="info-grid">
          {/* Experience */}
          <div className="info-section">
            <h3>{t('experiencia')}</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-title">{t('aegon')}</span>
                <span className="info-detail">{t('aegonRole')}</span>
              </li>
              <li className="info-item">
                <span className="info-title">{t('fractalia')}</span>
                <span className="info-detail">{t('fractaliaRole')}</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="info-section">
            <h3>{t('formacion')}</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-title">{t('daw')} — Desarrollo de Aplicaciones Web</span>
                <span className="info-detail">{t('dawSchool')}</span>
              </li>
              <li className="info-item">
                <span className="info-title">{t('dam')} — Desarrollo de Aplicaciones Multiplataforma</span>
                <span className="info-detail">{t('damSchool')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

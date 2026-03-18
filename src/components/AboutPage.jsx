import { LiquidBlob } from './LiquidBlob';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <section id="about" className="fullscreen-section" style={{ background: '#0a0a0a' }}>
      <LiquidBlob />
      
      <div className="about-content">
        {/* Left Column - Editorial Text */}
        <div>
          <p className="text-editorial text-white/90 leading-relaxed">
            {t('aboutText')}
          </p>
        </div>

        {/* Right Column - Info Grid */}
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
                <span className="info-title">{t('daw')}</span>
                <span className="info-detail">{t('dawSchool')}</span>
              </li>
              <li className="info-item">
                <span className="info-title">{t('dam')}</span>
                <span className="info-detail">{t('damSchool')}</span>
              </li>
            </ul>
          </div>

          {/* Stack */}
          <div className="info-section">
            <h3>{t('stack')}</h3>
            <div className="stack-list">
              <span className="stack-tag">React</span>
              <span className="stack-tag">Next.js</span>
              <span className="stack-tag">Tailwind</span>
              <span className="stack-tag">Astro</span>
              <span className="stack-tag">Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import './HeroSection.css';

const HeroSection = () => {
  const handleGetStarted = () => {
    // TODO: Navigate to tournament creation page
    console.log('Navigate to tournament creation');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Manage Archery Tournaments with Confidence
          </h1>
          <p className="hero__subtitle">
            Complete tournament management platform for archery organizations — from setup to results
          </p>
          <div className="hero__actions">
            <button className="hero__cta hero__cta--primary" onClick={handleGetStarted}>
              Create Tournament
            </button>
            <button className="hero__cta hero__cta--secondary" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
          <p className="hero__trust">
            Trusted by Nobody yet, Be the First!
          </p>
        </div>
        <div className="hero__visual">
          <div className="hero__visual-placeholder">
            <svg className="hero__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2"/>
              <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <p className="hero__visual-text">Archery Target</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

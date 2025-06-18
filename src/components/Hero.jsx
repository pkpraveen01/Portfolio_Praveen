import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Praveen Kumar</span>
      </h1>
      <p className="hero-subtitle">MERN Stack Developer | Fresher</p>
      <a
        href="https://drive.google.com/file/d/1fMiYrfmMClwWu1siemYki8l_P0wjkZa1/view"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-button"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;

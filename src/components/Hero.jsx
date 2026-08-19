function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">Hello, I'm</p>

        <h1>Aditi Vyas</h1>

        <h2>
          Software Engineer
          <span> building scalable applications and intelligent systems.</span>
        </h2>

        <p className="hero-description">
          I work with Java, Python, React, Spring Boot, AWS, SQL and AI-based
          technologies to build practical software solutions.
        </p>

        <div className="hero-buttons">
          <a
             href="/ADITI Resume 4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            📄 Resume
          </a>

          <a
            href="#projects"
            className="secondary-button"
          >
            🚀 View Projects
          </a>

          <a
            href="https://github.com/vyas10102"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aditi-vyas-8aa2b7212/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>

        </div>
      </div>

      <div className="hero-decoration">&lt;/&gt;</div>
    </section>
  );
}

export default Hero;

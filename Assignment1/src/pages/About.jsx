function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="card">
        <p>
          I am a Software Engineering Technology student at Centennial College
          with a strong interest in building systems that connect technology
          with real-world impact.
        </p>

        <p>
          My background in Public Health & Safety gives me a unique perspective
          on user needs, especially in healthcare-related systems, accessibility,
          and data-driven decision making.
        </p>

        <p>
          I enjoy solving problems through structured thinking, clean code, and
          scalable design — especially in full-stack web applications.
        </p>
      </div>

      <div className="card">
        <h3>Education</h3>
        <p>🎓 Software Engineering Technology — Centennial College</p>
        <p>🎓 Public Health & Safety — Toronto Metropolitan University</p>
      </div>

      <div className="card">
        <h3>What Drives Me</h3>
        <p>
          I’m motivated by building meaningful systems in healthcare, wellness,
          and everyday digital experiences that improve how people interact with
          technology.
        </p>
      </div>

      <div className="card">
        <h3>Resume</h3>
        <p>
          Download my full resume to view my complete experience, technical skills,
          education, and project history.
        </p>

        <a href="/FatimaDabbous(Resume).pdf" target="_blank">
          <button>Download My Resume</button>
        </a>
      </div>
    </div>
  );
}

export default About;
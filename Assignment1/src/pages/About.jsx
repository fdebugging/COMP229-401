function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="card">
        <p>
          I am currently studying Software Engineering Technology at Centennial College,
          where I focus on full-stack development, database systems, and software design.
        </p>

        <p>
          I previously completed a Bachelor of Public Health & Safety, which gives me a strong
          understanding of healthcare systems, human behavior, and real-world service delivery.
        </p>

        <p>
          My passion lies in building technology that supports health, wellness, and efficiency —
          especially systems that help people make better decisions and access better services.
        </p>
      </div>

      <div className="card">
        <h3>Education</h3>
        <ul>
          <li>Software Engineering Technology — Centennial College</li>
          <li>Public Health & Safety — Toronto Metropolitan University</li>
        </ul>
      </div>

      <div className="card">
        <h3>Interests</h3>
        <ul>
          <li>Healthcare technology systems</li>
          <li>Fitness and performance training</li>
          <li>Database design and analytics</li>
          <li>Full-stack web development</li>
        </ul>
      </div>

      <div className="card">
        <h3>Resume</h3>

        {/* THIS IS WHERE YOUR PDF GOES */}
        <a
          href="/FatimaDabbous(Resume).pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download My Resume</button>
        </a>
      </div>
    </div>
  );
}

export default About;
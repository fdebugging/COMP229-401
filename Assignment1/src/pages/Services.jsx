function Services() {
  return (
    <div className="container">
      <h1>Services</h1>

      <div className="grid">

        <div className="card">
          <h3>Web Development</h3>
          <p>
            Building responsive and modern web applications using React,
            JavaScript, HTML, and CSS.
          </p>
        </div>

        <div className="card">
          <h3>Backend Development</h3>
          <p>
            Creating server-side applications using Node.js, Express,
            and RESTful APIs.
          </p>
        </div>

        <div className="card">
          <h3>Database Design</h3>
          <p>
            Designing relational and NoSQL databases using SQL, MySQL,
            and Oracle systems.
          </p>
        </div>

        <div className="card">
          <h3>UI / UX Thinking</h3>
          <p>
            Focused on clean, intuitive layouts that improve user experience
            and accessibility.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;
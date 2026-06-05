function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="card">
        <h3>Car Catalog Website</h3>
        <p>
          A responsive web application that allows users to browse and filter cars.
          Built with a focus on usability, clean UI design, and mobile responsiveness.
        </p>
        <p><b>Tech:</b> HTML, CSS, JavaScript</p>
      </div>

      <div className="card">
        <h3>Retail Database System</h3>
        <p>
          Designed a relational database system for inventory management using SQL.
          Implemented CRUD operations for product tracking and data integrity.
        </p>
        <p><b>Tech:</b> MySQL, SQL, Database Design</p>
      </div>

      <div className="card">
        <h3>JetLag Travel SRS Project</h3>
        <p>
          Developed a full Software Requirements Specification (SRS) document in an Agile team.
          Included UML diagrams, system requirements, and structured planning.
        </p>
        <p><b>Focus:</b> Agile Development, Requirements Analysis</p>
      </div>
    </div>
  );
}

export default Projects;
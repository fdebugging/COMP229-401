function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="grid">

        <div className="card">
          <img src="/car.png" className="project-img" />
          <h3>Car Catalog Website</h3>
          <p>Responsive website with filtering and interactive UI.</p>
        </div>

        <div className="card">
          <img src="/retail.png" className="project-img" />
          <h3>Retail Database System</h3>
          <p>SQL-based inventory system with full CRUD operations.</p>
        </div>

        <div className="card">
          <img src="/jetlag.png" className="project-img" />
          <h3>JetLag SRS Project</h3>
          <p>Agile-based system design with UML diagrams and documentation.</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
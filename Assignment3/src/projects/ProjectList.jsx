import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await api.delete(`/projects/${id}`);
      loadProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Projects</h1>

      <Link className="card" to="/projects/add">
        Add Project
      </Link>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completion</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>
                {project.completion
                  ? new Date(project.completion).toLocaleDateString()
                  : ""}
              </td>
              <td>{project.description}</td>
              <td>{project.image}</td>
              <td>
                <Link to={`/projects/edit/${project.id}`}>Edit</Link>
                {" | "}
                <button onClick={() => deleteProject(project.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
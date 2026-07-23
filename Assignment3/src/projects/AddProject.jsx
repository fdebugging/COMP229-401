import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AddProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    completion: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/projects", project);
      navigate("/projects");
    } catch (error) {
      console.error(error);
      alert("Failed to add project.");
    }
  };

  return (
    <div className="container">
      <h1>Add Project</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
        />

        <label>Completion Date</label>
        <input
          type="date"
          name="completion"
          value={project.completion}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />

        <label>Image</label>
        <input
          type="text"
          name="image"
          value={project.image}
          onChange={handleChange}
          placeholder="Image URL or filename"
        />

        <br />
        <br />

        <button type="submit">Save Project</button>
      </form>
    </div>
  );
}

export default AddProject;
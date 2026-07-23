import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    completion: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    try {
      const response = await api.get(`/projects/${id}`);

      setProject({
        title: response.data.data.title,
        completion: response.data.data.completion
          ? response.data.data.completion.substring(0, 10)
          : "",
        description: response.data.data.description,
        image: response.data.data.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/projects/${id}`, project);
      navigate("/projects");
    } catch (error) {
      console.error(error);
      alert("Failed to update project.");
    }
  };

  return (
    <div className="container">
      <h1>Edit Project</h1>

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
        />

        <br />
        <br />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;
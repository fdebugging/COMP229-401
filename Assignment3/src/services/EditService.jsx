import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadService();
  }, []);

  async function loadService() {
    try {
      const response = await api.get(`/services/${id}`);

      setService({
        title: response.data.data.title,
        description: response.data.data.description,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/services/${id}`, service);
      navigate("/services");
    } catch (error) {
      console.error(error);
      alert("Failed to update service.");
    }
  };

  return (
    <div className="container">
      <h1>Edit Service</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={service.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={service.description}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Update Service</button>
      </form>
    </div>
  );
}

export default EditService;
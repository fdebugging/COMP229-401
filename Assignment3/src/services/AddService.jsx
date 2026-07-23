import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AddService() {
  const navigate = useNavigate();

  const [service, setService] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/services", service);
      navigate("/services");
    } catch (error) {
      console.error(error);
      alert("Failed to add service.");
    }
  };

  return (
    <div className="container">
      <h1>Add Service</h1>

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

        <button type="submit">Save Service</button>
      </form>
    </div>
  );
}

export default AddService;
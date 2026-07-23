import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AddReference() {
  const navigate = useNavigate();

  const [reference, setReference] = useState({
    name: "",
    testimonial: "",
    position: "",
    company: "",
  });

  const handleChange = (e) => {
    setReference({
      ...reference,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/references", reference);
      navigate("/references");
    } catch (error) {
      console.error(error);
      alert("Failed to add reference.");
    }
  };

  return (
    <div className="container">
      <h1>Add Reference</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={reference.name}
          onChange={handleChange}
          required
        />

        <label>Testimonial</label>
        <textarea
          name="testimonial"
          value={reference.testimonial}
          onChange={handleChange}
          required
        />

        <label>Position</label>
        <input
          type="text"
          name="position"
          value={reference.position}
          onChange={handleChange}
          required
        />

        <label>Company</label>
        <input
          type="text"
          name="company"
          value={reference.company}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Save Reference</button>
      </form>
    </div>
  );
}

export default AddReference;
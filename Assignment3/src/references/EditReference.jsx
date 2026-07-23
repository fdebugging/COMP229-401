import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function EditReference() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reference, setReference] = useState({
    name: "",
    testimonial: "",
    position: "",
    company: "",
  });

  useEffect(() => {
    loadReference();
  }, []);

  async function loadReference() {
    try {
      const response = await api.get(`/references/${id}`);

      setReference({
        name: response.data.data.name,
        testimonial: response.data.data.testimonial,
        position: response.data.data.position,
        company: response.data.data.company,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setReference({
      ...reference,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/references/${id}`, reference);
      navigate("/references");
    } catch (error) {
      console.error(error);
      alert("Failed to update reference.");
    }
  };

  return (
    <div className="container">
      <h1>Edit Reference</h1>

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

        <button type="submit">Update Reference</button>
      </form>
    </div>
  );
}

export default EditReference;
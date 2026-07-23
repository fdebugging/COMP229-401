import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function ReferenceList() {
  const [references, setReferences] = useState([]);

  const loadReferences = async () => {
    try {
      const response = await api.get("/references");
      setReferences(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadReferences();
  }, []);

  const deleteReference = async (id) => {
    if (!window.confirm("Delete this reference?")) return;

    try {
      await api.delete(`/references/${id}`);
      loadReferences();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>References</h1>

        <Link className="add-btn" to="/references/add">
          Add Reference
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Testimonial</th>
            <th>Position</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {references.map((reference) => (
            <tr key={reference.id}>
              <td>{reference.name}</td>
              <td>{reference.testimonial}</td>
              <td>{reference.position}</td>
              <td>{reference.company}</td>

              <td>
                <Link
                  className="edit-btn"
                  to={`/references/edit/${reference.id}`}
                >
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => deleteReference(reference.id)}
                >
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

export default ReferenceList;
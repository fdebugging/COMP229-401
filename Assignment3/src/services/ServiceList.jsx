import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function ServiceList() {
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await api.delete(`/services/${id}`);
      loadServices();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Services</h1>

        <Link className="add-btn" to="/services/add">
          Add Service
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.title}</td>

              <td>{service.description}</td>

              <td>
                <Link
                  className="edit-btn"
                  to={`/services/edit/${service.id}`}
                >
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => deleteService(service.id)}
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

export default ServiceList;
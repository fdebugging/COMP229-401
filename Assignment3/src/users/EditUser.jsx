import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const response = await api.get(`/users/${id}`);

      setUser({
        firstname: response.data.data.firstname,
        lastname: response.data.data.lastname,
        email: response.data.data.email,
        password: response.data.data.password,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/users/${id}`, user);
      navigate("/users");
    } catch (error) {
      console.error(error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="container">
      <h1>Edit User</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
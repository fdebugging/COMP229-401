import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function UserList() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await api.delete(`/users/${id}`);
      loadUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Users</h1>

        <Link className="add-btn" to="/users/add">
          Add User
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>

              <td>
                <Link
                  className="edit-btn"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
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

export default UserList;
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container">

      <h1>Admin Dashboard</h1>

      <p>Select a section to manage.</p>

      <div className="dashboard">

        <Link className="card" to="/projects">
          Manage Projects
        </Link>

        <Link className="card" to="/services">
          Manage Services
        </Link>

        <Link className="card" to="/references">
          Manage References
        </Link>

        <Link className="card" to="/users">
          Manage Users
        </Link>

      </div>

    </div>
  );
}

export default AdminDashboard;
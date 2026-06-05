import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
      <h2>FD</h2>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/references">References</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
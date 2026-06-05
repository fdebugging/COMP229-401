import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">fdebugging</div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/references">References</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        AV.
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/#skills">
          Skills
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/#experience">
          Experience
        </Link>

        <Link to="/#education">
          Education
        </Link> 

        <Link to="/#publications">
          Publications
        </Link>

        <Link to="/certifications">
          Certifications
        </Link>

        <Link to="/#leadership">
          Leadership
        </Link>

        <Link to="/#contact">
          Contact
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
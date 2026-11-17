import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="nav-logo" href="#top" aria-label="Adish, back to top">adish<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

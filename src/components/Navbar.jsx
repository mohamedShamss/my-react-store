import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark ">
  <div className="container ">
    <Link className="navbar-brand" to="/"> FakeStore </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
<NavLink className="nav-link" to="/">Home</NavLink>
<NavLink className="nav-link" to="/products">Products</NavLink>
<NavLink className="nav-link" to="/contact">Contact</NavLink>
<NavLink className="nav-link" to="/about">About</NavLink>
      </div>
    </div>
  </div>
</nav>
  );
}

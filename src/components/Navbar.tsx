
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return <nav style={{
    backgroundColor: 'var(--midnight-blue)',
    padding: '0.5rem 0',
    marginTop: 0, // Remove white space on top
    position: 'sticky',
    top: 0
  }} className="navbar navbar-expand-lg navbar-dark bg-zinc-950">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Dhawan Ispat Udyog
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav lg:ms-5 text-center"> {/* Changed from ms-0 to ms-5 to add space between logo and menu items */}
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/') ? 'text-copper font-bold' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/about') ? 'text-copper font-bold' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/products') ? 'text-copper font-bold' : ''}`} to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/services') ? 'text-copper font-bold' : ''}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/gallery') ? 'text-copper font-bold' : ''}`} to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 ${isActive('/contact') ? 'text-copper font-bold' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
};

export default Navbar;

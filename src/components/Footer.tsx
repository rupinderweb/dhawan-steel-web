
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold">Dhawan Ispat Udyog</h5>
            <p className="mt-3 text-light">
              Delivering quality steel solutions across India since 2008. A trusted name in iron, steel, and non-ferrous materials.
            </p>
            <div className="d-flex mt-4">
              <a href="#" className="me-3 text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-white fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-light text-decoration-none">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" className="text-light text-decoration-none">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-white fw-bold mb-3">Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products" className="text-light text-decoration-none">MS Ingots & Billets</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-light text-decoration-none">MS Scrap</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-light text-decoration-none">Stainless Steel Scrap</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-light text-decoration-none">Low Alloy Steel</Link>
              </li>
              <li>
                <Link to="/products" className="text-light text-decoration-none">Aluminium Scrap</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="text-white fw-bold mb-3">Contact Us</h5>
            <p className="text-light mb-2">
              <i className="bi bi-geo-alt me-2"></i> Dhawan Ispat Udyog, Punjab, India
            </p>
            <p className="text-light mb-2">
              <i className="bi bi-telephone me-2"></i> +91 XXXXXXXXXX
            </p>
            <p className="text-light">
              <i className="bi bi-envelope me-2"></i> info@dhawanispat.com
            </p>
          </div>
        </div>
        <hr className="mt-4 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light">
              &copy; {new Date().getFullYear()} Dhawan Ispat Udyog. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-light">
              <Link to="/privacy-policy" className="text-light me-3 text-decoration-none">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-light text-decoration-none">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

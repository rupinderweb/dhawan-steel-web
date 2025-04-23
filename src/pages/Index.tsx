
import { Link } from 'react-router-dom';
import { Building, Factory, Package, Search, Wrench, ArrowRight, Recycle, Users, Globe, List, Settings, Wind, Square, Box } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* HERO BANNER */}
      <section style={{ position: "relative", minHeight: 480, width: "100%", height: "60vh", backgroundColor: "#1E293B", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1548795471-796b0ba49cb2?auto=format&fit=crop&w=1500&q=80"
          alt="Steel background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            filter: "brightness(0.55)"
          }}
        />
        <div className="container hero-overlay-content" style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}>
          <h1 className="display-4 fw-bolder mb-4" style={{ color: "#fff", textShadow: "0 3px 16px rgba(30,41,59,0.45)" }}>
            Delivering Quality Steel Solutions Across India
          </h1>
          <p className="lead mb-5" style={{ color: "#c7c9d1", fontWeight: 500 }}>
            Since 2008, Dhawan Ispat Udyog has been a trusted name in iron, steel, and non-ferrous materials—serving industries with precision and reliability.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link
              to="/products"
              className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow-rich"
              style={{ background: "#B87333", border: "none", color: "#fff" }}>
              Explore Our Products
            </Link>
            <Link
              to="/services"
              className="btn btn-light btn-lg px-4 py-3 fw-semibold"
              style={{
                borderWidth: 2,
                borderColor: "#B87333",
                color: "#B87333",
                background: "#fff"
              }}>
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Dhawan Ispat Udyog */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4">About Dhawan Ispat Udyog</h2>
              <p className="lead mb-4">
                Dhawan Ispat Udyog began with a single yard and a clear mission—to provide high-quality steel and metal solutions. Today, with two fully equipped yards and state-of-the-art processing facilities, we cater to industries across India, sourcing both domestically and internationally. Our commitment to quality control, chemical analysis, and customized processing makes us a reliable partner in your supply chain.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon me-3">
                      <Building size={28} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">Established in 2008</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon me-3">
                      <Factory size={28} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">Two advanced yards</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon me-3">
                      <Package size={28} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">Diverse material range</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon me-3">
                      <Globe size={28} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">Global procurement</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon me-3">
                      <Users size={28} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-0">Nationwide service</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Steel Processing Facility" 
                className="img-fluid rounded shadow" 
                style={{ height: '450px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Materials */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Materials</h2>
              <p className="lead">High-quality ferrous and non-ferrous materials sourced from trusted suppliers globally.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 rounded-4 p-4">
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-4">Ferrous Materials</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> MS Ingots
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> Billets
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> MS Scrap
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> Ship Breaking Materials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 rounded-4 p-4">
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-4">Non-Ferrous Materials</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> Stainless Steel Scrap
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> Low Alloy Steel Scrap
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span> Aluminium Scrap
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary btn-lg">
              View All Products <ArrowRight size={18} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Services</h2>
              <p className="lead">We offer comprehensive steel processing and supply chain solutions.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Search size={28} />
                  </div>
                  <h4 className="card-title fw-bold mb-3">Chemical Analysis</h4>
                  <p className="card-text">Comprehensive composition analysis for quality assurance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <List size={28} />
                  </div>
                  <h4 className="card-title fw-bold mb-3">Material Grading</h4>
                  <p className="card-text">Expert segregation and grading of various metals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Wrench size={28} />
                  </div>
                  <h4 className="card-title fw-bold mb-3">Torch Cutting</h4>
                  <p className="card-text">Precision cutting for customized size requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Settings size={28} />
                  </div>
                  <h4 className="card-title fw-bold mb-3">Rolling & Forging</h4>
                  <p className="card-text">Advanced processes for material transformation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary btn-lg">
              Discover Our Capabilities <ArrowRight size={18} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Industries We Serve</h2>
              <p className="lead">Our quality materials support a wide range of industrial applications.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 mb-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto">
                  <Wrench size={28} />
                </div>
                <h4 className="mt-4">Hardware</h4>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto">
                  <Wind size={28} />
                </div>
                <h4 className="mt-4">Air Coolers</h4>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto">
                  <Square size={28} />
                </div>
                <h4 className="mt-4">Frames</h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto">
                  <Box size={28} />
                </div>
                <h4 className="mt-4">Trunks</h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="text-center p-4">
                <div className="feature-icon mx-auto">
                  <Wrench size={28} />
                </div>
                <h4 className="mt-4">Tooling</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="section-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
              <div className="bg-light p-5 rounded-4 text-center">
                <div className="feature-icon mx-auto mb-4">
                  <Recycle size={28} />
                </div>
                <h3 className="fw-bold mb-3">Sustainability Commitment</h3>
                <p className="lead mb-0">
                  We are committed to recycling and repurposing steel and metals, contributing to the circular economy and reducing industrial waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partap Iron & Steel */}
      <section className="section-sm" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="p-4 text-center">
                <h4 className="fw-bold mb-3" style={{ color: '#6c757d' }}>Partap Iron & Steel Rolling Mills</h4>
                <p className="mb-0" style={{ color: '#6c757d', fontWeight: '300' }}>
                  Partap Iron & Steel Rolling Mills, part of our group since 1997, manufactures MS Bars & Angles at Khanna, Punjab. 
                  Known for thin-section steel production, Partap supports industries across India with precision-crafted steel products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Quick Links */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-5">Get In Touch With Us</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/about" className="btn btn-light btn-lg px-4">
                  About Us
                </Link>
                <Link to="/products" className="btn btn-light btn-lg px-4">
                  View Products
                </Link>
                <Link to="/contact" className="btn btn-light btn-lg px-4">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

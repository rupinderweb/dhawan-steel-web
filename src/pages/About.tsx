
import { Link } from 'react-router-dom';
import { Calendar, Users, Search, Building, Factory, Download, Recycle, Globe, Settings, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-accent text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-3">About Us</h1>
              <p className="lead mb-0">Learn about our journey, mission, and commitment to quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-light py-2">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Journey */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-accent">Our Journey</h2>
              <p className="lead">From a single yard to becoming a trusted name in steel solutions across India</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Dhawan Ispat Udyog Facility" 
                  className="img-fluid rounded-4 shadow"
                  style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 bg-accent text-white p-4 rounded-circle m-3">
                  <div className="text-center">
                    <h3 className="fw-bold mb-0">15+</h3>
                    <p className="small mb-0">Years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Calendar size={28} />
                    </div>
                    <h4 className="fw-bold mb-0 text-accent">Established in 2008</h4>
                  </div>
                  <p>
                    Dhawan Ispat Udyog began with a single yard and a clear mission—to provide high-quality steel and metal solutions to industries across India. Our foundation was built on expertise, quality, and customer satisfaction.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Building size={28} />
                    </div>
                    <h4 className="fw-bold mb-0 text-accent">Expanded to Two Yards</h4>
                  </div>
                  <p>
                    Over the years, we've grown significantly, expanding our operations to include two fully equipped yards with state-of-the-art processing facilities to better serve our customers across various industries.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Factory size={28} />
                    </div>
                    <h4 className="fw-bold mb-0 text-accent">Integration of Partap Iron & Steel</h4>
                  </div>
                  <p>
                    Since 1997, Partap Iron & Steel Rolling Mills has been part of our group, manufacturing MS Bars & Angles in Khanna, Punjab. This integration has strengthened our position in the market as a comprehensive steel solution provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-4 text-accent">Our Mission</h2>
              <div className="card border-0 shadow rounded-4 p-5">
                <div className="card-body">
                  <h3 className="text-accent fw-bold mb-4">
                    "Delivering quality materials with precision processing and environmental responsibility."
                  </h3>
                  <p className="lead mb-0">
                    Our mission guides everything we do at Dhawan Ispat Udyog. We strive to be the trusted partner that industries can rely on for their steel and metal requirements, providing solutions that meet the highest standards of quality and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Highlights */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-accent">Operational Highlights</h2>
              <p className="lead">Our commitment to excellence is reflected in our operations</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Users size={28} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3 text-accent">Quality Control Teams</h4>
                  <p className="card-text">
                    Dedicated teams at both yards ensuring consistent quality in all our materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Search size={28} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3 text-accent">Chemical Analysis</h4>
                  <p className="card-text">
                    Advanced composition testing for precise material verification and grading.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Globe size={28} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3 text-accent">Global Procurement</h4>
                  <p className="card-text">
                    Extensive network of domestic and international suppliers for diverse materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto">
                    <Settings size={28} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3 text-accent">Processing Capabilities</h4>
                  <p className="card-text">
                    Specialized equipment for rolling, forging, and customized material processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partap Iron & Steel Rolling Mills */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-accent">Partap Iron & Steel Rolling Mills</h2>
              <p className="lead">Excellence in steel manufacturing since 1997</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                  alt="Partap Iron & Steel Facility" 
                  className="img-fluid rounded-4 shadow"
                  style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-4">
                <h4 className="fw-bold mb-4 text-accent">Specialized Steel Manufacturing</h4>
                <p>
                  Partap Iron & Steel Rolling Mills has been an integral part of our group since 1997, specializing in the manufacture of MS Bars & Angles at our facility in Khanna, Punjab.
                </p>
                <p className="mb-4">
                  Known for producing the thinnest angles in India, Partap has established itself as a trusted name in precision steel manufacturing, catering to a wide range of industries with specific requirements.
                </p>
                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-accent">✓</span>
                      <p className="mb-0">Mild Steel Bars</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-accent">✓</span>
                      <p className="mb-0">MS Angles</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-accent">✓</span>
                      <p className="mb-0">Thin Sections</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-accent">✓</span>
                      <p className="mb-0">Custom Profiles</p>
                    </div>
                  </div>
                </div>
                <Link to="/products" className="btn btn-accent mt-4 text-white">
                  View Products <ArrowRight size={18} className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="fw-bold mb-4 text-accent">Learn More About Us</h3>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="btn btn-outline-accent">
                  <Download size={18} className="me-2" /> Company Profile
                </a>
                <a href="#" className="btn btn-outline-accent">
                  <Download size={18} className="me-2" /> Certifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Work With Us CTA removed as per request */}

    </>
  );
};

export default About;

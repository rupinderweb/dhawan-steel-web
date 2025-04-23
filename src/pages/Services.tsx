
import { Link } from 'react-router-dom';
import { Search, List, Wrench, Settings, Truck, Recycle, ArrowRight, Package, Leaf, Shield } from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-3">Our Services</h1>
              <p className="lead mb-0">Comprehensive steel processing and supply chain solutions</p>
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
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Material Processing */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Material Processing Services</h2>
              <p className="lead">Advanced material analysis, segregation, and customization services</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Material Processing" 
                className="img-fluid rounded-4 shadow"
                style={{ height: '100%', width: '100%', objectFit: 'cover', maxHeight: '450px' }}
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Search size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Chemical Composition Analysis</h4>
                  </div>
                  <p>
                    Our state-of-the-art testing equipment allows us to perform detailed chemical composition analysis of various materials. This ensures that you receive exactly what you need for your specific applications, with verified material properties and quality.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <List size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Segregation & Grading</h4>
                  </div>
                  <p>
                    Our experienced team meticulously segregates and grades materials based on their composition and properties. This process ensures consistency in quality and helps our customers select the perfect materials for their specific requirements.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Wrench size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Torch Cutting</h4>
                  </div>
                  <p>
                    We offer precision torch cutting services to customize materials to your exact size requirements. Our skilled operators ensure accurate cuts with minimal material waste, allowing you to optimize your production process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rolling Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Rolling Services</h2>
              <p className="lead">Specialized rolling services for custom profiles and dimensions</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                alt="Steel Rolling Services" 
                className="img-fluid rounded-4 shadow"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-4">
                <h4 className="fw-bold mb-4">Custom Rolling Solutions</h4>
                <p className="mb-4">
                  At Dhawan Ispat Udyog, we offer comprehensive rolling services to transform raw materials into finished products according to your exact specifications. Our advanced rolling equipment can handle various materials and dimensions.
                </p>
                <h5 className="fw-semibold mb-3">We specialize in rolling:</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span>
                      <p className="mb-0">Round Bars (multiple diameters)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span>
                      <p className="mb-0">Flat Bars (various dimensions)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span>
                      <p className="mb-0">Custom Profiles</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-primary">✓</span>
                      <p className="mb-0">Angles & Channels</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-4">
                    Through our sister concern, Partap Iron & Steel Rolling Mills, we have developed expertise in producing the thinnest angles available in India, catering to specialized industrial requirements.
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    Request Custom Rolling Services <ArrowRight size={18} className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forging & Annealing */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Forging & Annealing</h2>
              <p className="lead">Heat treatment and shaping services for enhanced material properties</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="card-body">
                  <div className="feature-icon mb-4 mx-auto">
                    <Settings size={32} />
                  </div>
                  <h4 className="card-title fw-bold mb-3 text-center">High-Pressure Forging</h4>
                  <p className="card-text">
                    Our forging services utilize high pressure to shape metals into desired forms while enhancing their mechanical properties. This process improves the strength and durability of the material, making it suitable for demanding applications.
                  </p>
                  <p className="card-text">
                    We specialize in both hot and cold forging processes, allowing us to work with a wide range of materials and achieve various structural properties based on your specific requirements.
                  </p>
                  <h5 className="fw-semibold mt-4 mb-3">Benefits:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Improved grain structure</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Enhanced material strength</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Greater durability</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Precise dimensional control</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="card-body">
                  <div className="feature-icon mb-4 mx-auto">
                    <Settings size={32} />
                  </div>
                  <h4 className="card-title fw-bold mb-3 text-center">Heat Treatment & Annealing</h4>
                  <p className="card-text">
                    Our heat treatment services include various annealing processes designed to alter the physical and sometimes chemical properties of materials. This controlled heating and cooling process can relieve internal stresses, soften material, or prepare it for further processing.
                  </p>
                  <p className="card-text">
                    We offer different types of annealing processes based on your specific requirements, ensuring the perfect balance of strength, ductility, and other material properties.
                  </p>
                  <h5 className="fw-semibold mt-4 mb-3">Types of Heat Treatment:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Full annealing</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Process annealing</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Stress relief annealing</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="me-2 text-primary">✓</span>
                        <span>Normalization</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Supply & Logistics */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Material Supply & Logistics</h2>
              <p className="lead">Reliable supply chain solutions across India</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Logistics Solutions" 
                className="img-fluid rounded-4 shadow"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Truck size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Pan-India Delivery</h4>
                  </div>
                  <p>
                    We offer comprehensive logistics and delivery services across India. Our established network ensures timely delivery of your materials to any location, helping you maintain production schedules and avoid costly delays.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Package size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Flexible Supply Volumes</h4>
                  </div>
                  <p>
                    Whether you need bulk quantities or specialized custom orders, we can accommodate your requirements. Our flexible approach to supply volumes ensures that businesses of all sizes can benefit from our high-quality materials and services.
                  </p>
                </div>

                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Our Logistics Advantages:</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Nationwide network</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Timely deliveries</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Tracking systems</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Secure packaging</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Sustainability Practices</h2>
              <p className="lead">Our commitment to environmental responsibility and circular economy</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Sustainability Practices" 
                className="img-fluid rounded-4 shadow"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Recycle size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Recycling Initiatives</h4>
                  </div>
                  <p>
                    We actively promote the recycling and repurposing of steel and other metals. By processing and grading scrap materials, we help reduce the need for virgin material extraction and minimize industrial waste.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Leaf size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Circular Economy Contribution</h4>
                  </div>
                  <p>
                    Our business model supports the circular economy by ensuring that valuable metals are recovered, processed, and reintroduced into the manufacturing cycle. This approach helps conserve natural resources and reduce environmental impact.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3">
                      <Shield size={28} />
                    </div>
                    <h4 className="fw-bold mb-0">Environmental Compliance</h4>
                  </div>
                  <p>
                    All our operations adhere to strict environmental regulations and standards. We continuously invest in improving our processes to minimize our environmental footprint and promote sustainable practices throughout our supply chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-sm bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="fw-bold mb-4">Ready to Discuss Your Specific Requirements?</h3>
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

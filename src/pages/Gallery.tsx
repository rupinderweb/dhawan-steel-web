
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-3">Gallery</h1>
              <p className="lead mb-0">Take a visual tour of our facilities and operations</p>
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
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Facility Images */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Facilities</h2>
              <p className="lead">State-of-the-art yards and processing equipment</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                  className="card-img-top rounded-top-4" 
                  alt="Processing Yard"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Main Processing Yard</h5>
                  <p className="card-text">Our primary facility equipped with advanced material handling equipment and processing machinery.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  className="card-img-top rounded-top-4" 
                  alt="Quality Control Lab"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Quality Control Laboratory</h5>
                  <p className="card-text">Our state-of-the-art testing facility where we conduct detailed chemical composition analysis.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                  className="card-img-top rounded-top-4" 
                  alt="Storage Yard"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Material Storage Yard</h5>
                  <p className="card-text">Organized storage areas where we maintain inventory of various materials ready for processing and delivery.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Processing Equipment"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Processing Equipment</h5>
                  <p className="card-text">Specialized machinery for cutting, shaping and processing various metal materials to customer specifications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                  className="card-img-top rounded-top-4" 
                  alt="Rolling Mill"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Partap Rolling Mill</h5>
                  <p className="card-text">Our sister concern's advanced rolling mill facility producing MS Bars and Angles in Khanna, Punjab.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  className="card-img-top rounded-top-4" 
                  alt="Logistics Fleet"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Logistics Operations</h5>
                  <p className="card-text">Our transportation and logistics operations ensuring timely delivery of materials across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Products</h2>
              <p className="lead">Quality materials for diverse industrial applications</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="MS Ingots"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">MS Ingots</h5>
                  <p className="card-text small">High-quality mild steel ingots for industrial applications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Steel Billets"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">Steel Billets</h5>
                  <p className="card-text small">Precision manufactured billets for further processing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="MS Scrap"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">Processed MS Scrap</h5>
                  <p className="card-text small">Graded and sorted mild steel scrap materials.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Stainless Steel Scrap"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">Stainless Steel Scrap</h5>
                  <p className="card-text small">High-quality stainless steel materials for recycling.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="MS Angles"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">MS Angles</h5>
                  <p className="card-text small">Precision manufactured angles from our rolling mill.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="MS Round Bars"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">MS Round Bars</h5>
                  <p className="card-text small">Quality round bars in various diameters and specifications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Aluminium Scrap"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">Aluminium Scrap</h5>
                  <p className="card-text small">Various grades of aluminum for industrial recycling.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Ship Breaking Materials"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold mb-1">Ship Breaking Materials</h5>
                  <p className="card-text small">Specialized materials reclaimed from ships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work in Action */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Work in Action</h2>
              <p className="lead">Our processes and operations in motion</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Rolling Process"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Rolling Process</h5>
                  <p className="card-text">Our advanced rolling equipment in action, transforming raw materials into finished products.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Torch Cutting"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Torch Cutting</h5>
                  <p className="card-text">Precision torch cutting operations for customizing materials to exact specifications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Forging Process"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Forging Process</h5>
                  <p className="card-text">High-pressure forging operations that enhance material properties and shapes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Efforts */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Sustainability Efforts</h2>
              <p className="lead">Our commitment to environmental responsibility</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Recycling Operations"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Recycling Operations</h5>
                  <p className="card-text">Our dedicated facilities for processing and preparing scrap materials for reuse in manufacturing, contributing to the circular economy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-top-4" 
                  alt="Environmental Compliance"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">Environmental Compliance</h5>
                  <p className="card-text">Our facilities and processes adhere to strict environmental standards, minimizing our ecological footprint while maximizing resource efficiency.</p>
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
              <h3 className="fw-bold mb-4">Want to See Our Facilities in Person?</h3>
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

import { Link } from 'react-router-dom';
import { Package, Download, Search, ArrowRight, Recycle, Anchor } from 'lucide-react';
const Products = () => {
  return <>
      {/* Page Header */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-3">Our Products</h1>
              <p className="lead mb-0">Diverse range of high-quality ferrous and non-ferrous materials</p>
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
              <li className="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Ferrous Materials */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Ferrous Materials</h2>
              <p className="lead">Quality iron and steel materials for various industrial applications</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center">
                    <div className="feature-icon mx-auto">
                      <Package size={32} />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">MS Ingots</h4>
                      <p className="card-text">
                        High-quality mild steel ingots sourced from trusted manufacturers, suitable for various industrial applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center">
                    <div className="feature-icon mx-auto">
                      <Package size={32} />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">Billets</h4>
                      <p className="card-text">
                        Semi-finished steel products in various dimensions, perfect for forging, rolling, and extrusion processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center">
                    <div className="feature-icon mx-auto">
                      <Recycle size={32} />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">MS Scrap</h4>
                      <p className="card-text">
                        Various grades of mild steel scrap materials, carefully sorted and processed for recycling and manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="row g-0 align-items-center">
                  <div className="col-4 text-center">
                    <div className="feature-icon mx-auto">
                      <Anchor size={32} />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">Ship Breaking Materials</h4>
                      <p className="card-text">
                        Reclaimed steel materials from ship breaking operations, offering unique specifications and properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Ferrous Materials */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Non-Ferrous Materials</h2>
              <p className="lead">Premium quality non-ferrous metals for specialized applications</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="card-body text-center">
                  <div className="feature-icon mx-auto">
                    <Package size={32} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3">Stainless Steel Scrap</h4>
                  <p className="card-text">
                    Various grades of stainless steel scrap, including 304, 316, and other specialized alloys, perfect for recycling and reuse in manufacturing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="card-body text-center">
                  <div className="feature-icon mx-auto">
                    <Package size={32} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3">Low Alloy Steel Scrap</h4>
                  <p className="card-text">
                    Specialized low alloy steel materials with varying compositions of chromium, nickel, and other elements for specific industrial applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                <div className="card-body text-center">
                  <div className="feature-icon mx-auto">
                    <Package size={32} />
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3">Aluminium Scrap</h4>
                  <p className="card-text">
                    Various types of aluminum scrap including Taint/Tabor, Tense, Talk, and other grades for recycling and industrial use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Grades */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Steel Grades Supplied</h2>
              <p className="lead">Specialized steel grades for diverse industrial requirements</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm">
                <div className="card-header bg-primary text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">Low Alloy Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> EN8
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> EN19
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> EN24
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> Other specialized grades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm">
                <div className="card-header bg-primary text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">Tool Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> H13
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> D2
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> D3
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> Other specialized grades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 rounded-4 shadow-sm">
                <div className="card-header bg-primary text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">PH Stainless Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> 17-4 PH
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> 15-5 PH
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> 13-8 PH
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span> Other specialized grades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finished Products */}
      <section className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-3">Finished Products</h2>
              <p className="lead">Quality finished steel products from Partap Iron & Steel Rolling Mills</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img alt="Finished Steel Products" className="img-fluid rounded-4 shadow" style={{
              height: '400px',
              width: '100%',
              objectFit: 'cover'
            }} src="/lovable-uploads/3841a2d4-1980-4be4-a198-15e3c5257c2e.jpg" />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-4">Mild Steel Bars & Angles</h3>
                <p>
                  Our sister concern, Partap Iron & Steel Rolling Mills, manufactures high-quality MS Bars & Angles at our facility in Khanna, Punjab. With over two decades of experience, we've perfected the art of producing steel products that meet rigorous industry standards.
                </p>
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Available Products:</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">MS Round Bars</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">MS Square Bars</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">MS Angles</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Thin Sections</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Key Features:</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Precision Engineering</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Consistent Quality</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Thinnest Angles in India</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">✓</span>
                        <p className="mb-0">Custom Specifications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="card border-0 rounded-4 shadow-sm p-5">
                <div className="card-body">
                  <h3 className="fw-bold mb-4">Download Our Product Catalog</h3>
                  <p className="mb-4">
                    For detailed specifications, dimensions, and full range of our products, download our comprehensive product catalog.
                  </p>
                  <a href="#" className="btn btn-primary btn-lg">
                    <Download size={18} className="me-2" /> Download Catalog
                  </a>
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
              <h3 className="fw-bold mb-4">Need Custom Materials or Have Questions?</h3>
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Contact Our Team Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Products;
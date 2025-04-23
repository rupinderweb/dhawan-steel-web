import { Link } from 'react-router-dom';
import { Building, Factory, Package, Search, Wrench, ArrowRight, Recycle, Users, Globe, List, Settings, Wind, Square, Box, Leaf, Award, BadgeCheck, Handshake } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <>
      {/* HERO BANNER */}
      <section style={{
        position: "relative",
        minHeight: 480,
        width: "100%",
        height: "60vh",
        backgroundColor: "#F1F1F1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}>
        <div style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(30,41,59,0.12)"
        }}>
          <img alt="Steel background" style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            filter: "brightness(0.55)"
          }} src="/lovable-uploads/763a0708-5779-482d-88a0-75fbfb72e671.png" />
          <div className="container hero-overlay-content" style={{
            position: "relative",
            zIndex: 2,
            color: "#1E293B",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "2rem"
          }}>
            <h1 className="display-4 fw-bolder mb-4" style={{
              color: "#fff",
              textShadow: "0 3px 16px rgba(30,41,59,0.45)"
            }}>
              Delivering Quality Steel Solutions Across India
            </h1>
            <p className="lead mb-5" style={{
              color: "#c7c9d1",
              fontWeight: 500
            }}>
              Since 2008, Dhawan Ispat Udyog has been a trusted name in iron, steel, and non-ferrous materials—serving industries with precision and reliability.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/products" className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow-rich" style={{
                background: "#B87333",
                border: "none",
                color: "#fff"
              }}>
                Explore Our Products
              </Link>
              <Link to="/services" className="btn btn-light btn-lg px-4 py-3 fw-semibold" style={{
                borderWidth: 2,
                borderColor: "#B87333",
                color: "#B87333",
                background: "#fff"
              }}>
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Dhawan Ispat Udyog */}
      <section className="section position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 position-relative mb-5 mb-lg-0">
              {/* Experience Badge */}
              <div className="position-absolute" style={{
                left: "-20px",
                top: "50px",
                zIndex: 2,
                background: "#B87333",
                padding: "1.5rem",
                borderRadius: "1rem",
                color: "white",
                boxShadow: "0 8px 32px rgba(184,115,51,0.14)"
              }}>
                <Building size={28} className="mb-2" />
                <h5 className="mb-0 fw-bold">Since 2008</h5>
                <p className="mb-0 small">15+ Years of Excellence</p>
              </div>

              {/* Main Image */}
              <div className="position-relative" style={{
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(30,41,59,0.12)"
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Steel Processing Facility" 
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Secondary Image */}
              <div className="position-absolute" style={{
                right: "-40px",
                bottom: "-40px",
                width: "250px",
                height: "250px",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(30,41,59,0.12)",
                border: "4px solid white"
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1"
                  alt="Steel Production"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5">
              <div className="mb-4">
                <span className="text-copper fw-semibold mb-2 d-block" style={{
                  fontSize: "0.95rem",
                  letterSpacing: "0.05em"
                }}>ABOUT US</span>
                <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>About Dhawan Ispat Udyog</h2>
                <p className="lead text-muted mb-4">
                  Dhawan Ispat Udyog began with a single yard and a clear mission—to provide high-quality steel and metal solutions. Today, with two fully equipped yards and state-of-the-art processing facilities, we cater to industries across India.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-light">
                    <Factory size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Two advanced yards</h5>
                      <p className="mb-0 small text-muted">Fully equipped facilities</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-light">
                    <Package size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Diverse materials</h5>
                      <p className="mb-0 small text-muted">Comprehensive range</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-light">
                    <Globe size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Global procurement</h5>
                      <p className="mb-0 small text-muted">International sourcing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-light">
                    <Users size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Nationwide service</h5>
                      <p className="mb-0 small text-muted">Pan-India presence</p>
                    </div>
                  </div>
                </div>
              </div>
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
              <p className="lead">High-quality materials sourced from trusted suppliers globally.</p>
            </div>
          </div>
          
          {/* First row - 4 products */}
          <div className="row g-4 mb-4">
            <div className="col-lg-3 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1605557202601-033f0a0f3752"
                    alt="MS Ingots"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">MS Ingots</h4>
                  <p className="text-gray-600">High-quality mild steel ingots for various industrial applications.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1"
                    alt="Billets"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">Billets</h4>
                  <p className="text-gray-600">Premium steel billets for construction and manufacturing.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517897719686-983b325fb3d3"
                    alt="Ship Breaking Materials"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">Ship Breaking Materials</h4>
                  <p className="text-gray-600">Recycled marine-grade metals from ship dismantling.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1534959513142-2fe19c7f44d0"
                    alt="Stainless Steel"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">Stainless Steel</h4>
                  <p className="text-gray-600">Premium grade stainless steel for durability and corrosion resistance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Second row - 3 products */}
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1589923188900-85f945e76bde"
                    alt="MS Scrap"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">MS Scrap</h4>
                  <p className="text-gray-600">Quality mild steel scrap materials for recycling and reprocessing.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1584264514664-1ce88a419b28"
                    alt="Low Alloy Steel"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">Low Alloy Steel</h4>
                  <p className="text-gray-600">Specialized low alloy steel for specific industrial needs.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <Card className="h-100 hover:shadow-xl transition-shadow">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1578835187647-2a37a85683b7"
                    alt="Aluminium"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-copper">Aluminium</h4>
                  <p className="text-gray-600">Lightweight and versatile aluminium products for various applications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-copper btn-lg">
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

      {/* Sustainability Commitment (ENHANCED) */}
      <section className="section-sm py-0 sustainability-attractive">
        <div className="container px-0">
          <div className="row g-0 align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-6 col-12" style={{ position: "relative", zIndex: 2 }}>
              <div
                className="p-5 rounded-4 shadow-rich sustainability-card"
                style={{
                  background: "rgba(255,255,255, 0.97)",
                  marginTop: 32,
                  marginBottom: 32,
                  boxShadow: "0 8px 32px rgba(30, 41, 59, 0.16)"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=cover&w=500&q=80"
                  alt="Recycling Metal"
                  className="rounded-circle float-end ms-3 mb-2 d-none d-md-block"
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    border: "4px solid var(--copper)",
                    boxShadow: "0 0px 12px 0 rgba(184,115,51,0.14)"
                  }}
                />
                <div className="feature-icon mb-3 mx-0" style={{
                  background: "var(--copper)",
                  color: "#fff",
                  width: 64,
                  height: 64
                }}>
                  <Leaf size={36} />
                </div>
                <h3 className="fw-bold mb-2 sustainability-headline">
                  Greener Steel, Brighter Future
                </h3>
                <p className="lead mb-2 sustainability-text" style={{ color: "var(--steel-gray)", fontWeight: 500 }}>
                  Our commitment extends beyond steel — we champion <span className="text-copper fw-semibold">recycling</span> and <span style={{ color: "var(--midnight-blue)" }}>repurposing</span> for a cleaner tomorrow.
                </p>
                <ul className="list-unstyled mb-0 mt-3" style={{ fontSize: "1.13rem" }}>
                  <li className="mb-2 d-flex align-items-center">
                    <Recycle className="me-2 text-success" size={22} />
                    <span>Over 10,000 tons recycled each year</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <Package className="me-2 text-primary" size={22} />
                    <span>Materials repurposed for new journeys</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <Users className="me-2 text-copper" size={22} />
                    <span>Partnered with eco-conscious industries</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12 sustainability-img-col" style={{ position: 'relative', minHeight: 400 }}>
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=1200&q=80"
                alt="Green manufacturing with recycled steel"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 400,
                  objectFit: 'cover',
                  borderRadius: "1.25rem",
                  filter: "brightness(0.80) contrast(1.04)"
                }}
                className="shadow-rich"
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(120deg,rgba(76,175,80,0.09) 0%,rgba(30,41,59,0.14) 60%,rgba(183,115,51,0.09) 100%)",
                borderRadius: "1.25rem"
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section: Partap Iron & Steel Rolling Mills (ENHANCED) */}
      <section className="section-sm credibility-section" style={{ backgroundColor: '#f8f9fa', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-7">
              <div className="mb-4 credibility-card p-4 rounded-4 shadow-rich bg-white">
                <div className="d-flex align-items-center mb-3">
                  <span className="me-3 p-3 bg-copper rounded-circle d-flex align-items-center justify-content-center">
                    <Factory size={32} className="text-white" />
                  </span>
                  <h2 className="fw-bold mb-0" style={{ color: "#B87333", fontSize: "2.1rem" }}>
                    Partap Iron & Steel Rolling Mills
                  </h2>
                </div>
                <h5 className="text-steel fw-semibold mb-2">Precision & Credibility Since 1997</h5>
                <p className="lead" style={{
                  color: "#6c757d"
                }}>
                  Partap Iron & Steel Rolling Mills, <span className="fw-semibold text-copper">part of our group since 1997</span>, manufactures MS Bars & Angles at Khanna, Punjab.<br />
                  Renowned for <span className="fw-semibold">thin-section steel production</span>, Partap supports industries across India with precision-crafted steel products.
                </p>
                <div className="d-flex flex-wrap gap-4 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-silver shadow-rich rounded-3 p-3 d-inline-flex">
                      <Award size={28} className="text-copper" />
                    </span>
                    <div>
                      <span className="fw-bold d-block text-steel">Trusted since 1997</span>
                      <span className="text-muted small">Years of steelmaking excellence</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-silver shadow-rich rounded-3 p-3 d-inline-flex">
                      <BadgeCheck size={28} className="text-success" />
                    </span>
                    <div>
                      <span className="fw-bold d-block text-steel">Certified Precision</span>
                      <span className="text-muted small">IS:1786/MS standards</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-silver shadow-rich rounded-3 p-3 d-inline-flex">
                      <Handshake size={28} className="text-primary" />
                    </span>
                    <div>
                      <span className="fw-bold d-block text-steel">Nationwide Trust</span>
                      <span className="text-muted small">Reliable supply partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="cred-image-container position-relative">
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1c6029b?auto=format&fit=cover&w=700&q=80"
                  alt="Steel manufacturing at Partap Mills"
                  className="img-fluid rounded-4 shadow-rich"
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    border: '4px solid var(--copper)'
                  }}
                />
                <div className="cred-badge shadow-lg">
                  <span className="badge bg-copper text-white py-2 px-3 rounded-pill fw-semibold text-uppercase small" style={{
                    fontWeight: 700,
                    letterSpacing: ".06em"
                  }}>
                    ISO & ISI Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      {/* Previous CTACard was here, now removed */}

      {/* Remove old Contact & Quick Links section */}

    </>
  );
};

export default Index;

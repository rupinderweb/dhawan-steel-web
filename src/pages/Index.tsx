import { Link } from 'react-router-dom';
import { Building, Factory, Package, Search, Wrench, ArrowRight, Recycle, Users, Globe, List, Settings, Wind, Square, Box, Leaf, Award, BadgeCheck, Handshake } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
const Index = () => {
  const isMobile = useIsMobile();
  return <>
      {/* HERO BANNER */}
      <section style={{
      position: "relative",
      minHeight: 480,
      width: "100%",
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "2rem 1rem 1rem" : "1rem",
    }} className='hero-banner'>
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
          padding: "0 2rem 2rem"
        }}>
            <h1 className="display-4 fw-bolder mb-4" style={{
            color: "#fff",
            textShadow: "0 3px 16px rgba(30,41,59,0.45)",
            marginTop: isMobile ? "2rem" : "0"
          }}>
              Delivering Quality Steel Solutions Across India
            </h1>
            <p style={{
            color: "#e9e9e9",
            fontWeight: 500
          }} className="lead mb-5 text-slate-50 text-base">
              Since 2008, Dhawan Ispat Udyog has been a trusted name in iron, steel, and non-ferrous materials—serving industries with precision and reliability.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/products" className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow-rich main-btn" style={{
              background: "#B87333",
              border: "none",
              color: "#fff",
              padding: isMobile ? "0.5rem 1.25rem !important" : "0.75rem 2rem",
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}>
                Explore Our Products
              </Link>
              <Link to="/services" className="btn btn-light btn-lg px-4 py-3 fw-semibold main-btn" style={{
              borderWidth: 2,
              borderColor: "#B87333",
              color: "#B87333",
              background: "#fff",
              padding: isMobile ? "0.5rem 1.25rem !important" : "0.75rem 2rem",
              fontSize: isMobile ? "0.9rem" : "1rem"
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
              left: "-10px",
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
                <img alt="Steel Processing Facility" style={{
                width: "100%",
                height: "500px",
                objectFit: "cover"
              }} src="/lovable-uploads/e5d0b300-bbbe-4c83-bf38-5b72169d0931.jpg" />
              </div>

              {/* Secondary Image - Modified to fix cropping on mobile */}
              <div className={`${isMobile ? 'position-relative' : 'position-absolute'} secondary-image`} style={{
              right: isMobile ? "auto" : "-40px",
              bottom: isMobile ? "auto" : "-40px",
              width: isMobile ? "90%" : "250px",
              height: isMobile ? "auto" : "250px",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(30,41,59,0.12)",
              border: "4px solid white",
              marginTop: isMobile ? "-60px" : "0",
              marginBottom: isMobile ? "20px" : "0",
              marginLeft: isMobile ? "auto" : "",
              marginRight: isMobile ? "auto" : ""
            }}>
                <img alt="Steel Production" style={{
                width: "100%",
                height: isMobile ? "auto" : "100%",
                objectFit: "cover"
              }} src="/lovable-uploads/939e71d3-3221-4e3c-868e-b1201db286cb.png" />
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5">
              <div className="mb-4">
                <span className="text-copper fw-semibold mb-2 d-block" style={{
                fontSize: "0.95rem",
                letterSpacing: "0.05em"
              }}>ABOUT US</span>
                <h2 className="fw-bold mb-4" style={{
                fontSize: isMobile ? "2rem" : "2.5rem"
              }}>About Dhawan Ispat Udyog</h2>
                <p className="lead text-muted mb-4">
                  Dhawan Ispat Udyog began with a single yard and a clear mission—to provide high-quality steel and metal solutions. Today, with two fully equipped yards and state-of-the-art processing facilities, we cater to industries across India.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-white">
                    <Factory size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Two advanced yards</h5>
                      <p className="mb-0 small text-muted">Fully equipped facilities</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-white">
                    <Package size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Diverse materials</h5>
                      <p className="mb-0 small text-muted">Comprehensive range</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-white">
                    <Globe size={24} className="text-copper" />
                    <div>
                      <h5 className="fw-semibold mb-0">Global procurement</h5>
                      <p className="mb-0 small text-muted">International sourcing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3 align-items-center p-3 rounded-3 bg-white">
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
          <div className="row mb-4">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Materials</h2>
              <p className="lead">High-quality materials sourced from trusted suppliers globally.</p>
            </div>
          </div>
          
          {/* First row - 4 products - Modified to show 2 per row on mobile */}
          <div className="row mb-4 materials-grid">
            <div className={`${isMobile ? 'col-6' : 'col-lg-3 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="MS Ingots" className="h-full w-full object-cover" src="/lovable-uploads/856f1eb4-ac83-429c-bb54-c0bed9f869c1.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">MS Ingots</h4>
                  <p className="text-gray-600 mb-1">High-quality mild steel ingots for various industrial applications.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isMobile ? 'col-6' : 'col-lg-3 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="Billets" className="h-full w-full object-cover" src="/lovable-uploads/64f8a59c-894f-4509-a015-8f56dba569ed.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">Billets</h4>
                  <p className="text-gray-600 mb-1">Premium steel billets for construction and manufacturing.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isMobile ? 'col-6' : 'col-lg-3 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="Ship Breaking Materials" className="h-full w-full object-cover" src="/lovable-uploads/2a203fa3-c007-4dfe-baa0-0783a15ba8c8.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">Ship Breaking Materials</h4>
                  <p className="text-gray-600 mb-1">Recycled marine-grade metals from ship dismantling.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isMobile ? 'col-6' : 'col-lg-3 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="Stainless Steel" className="h-full w-full object-cover" src="/lovable-uploads/02426647-1541-42a6-a39d-09f1b4a8e6f8.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">Stainless Steel</h4>
                  <p className="text-gray-600 mb-1">Premium grade stainless steel for durability and corrosion resistance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Second row - 3 products - Modified for mobile */}
          <div className="row materials-grid">
            <div className={`${isMobile ? 'col-6' : 'col-lg-4 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="MS Scrap" className="h-full w-full object-cover" src="/lovable-uploads/480f3867-3776-4aae-bf32-fef5b493aa6d.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">MS Scrap</h4>
                  <p className="text-gray-600 mb-1">Quality mild steel scrap materials for recycling and reprocessing.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`${isMobile ? 'col-6' : 'col-lg-4 col-md-6 material-card'}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="Low Alloy Steel" className="h-full w-full object-cover" src="/lovable-uploads/67181090-05d6-4588-8c7d-aaba542ce2c2.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">Low Alloy Steel</h4>
                  <p className="text-gray-600 mb-1">Specialized low alloy steel for specific industrial needs.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className={`col-lg-4 col-md-6 material-card ${isMobile ? 'col-12 mt-4' : ''}`}>
              <Card className="h-100 hover:shadow-lg transition-shadow" style={{ borderRadius: "1.5rem", overflow: "hidden"}}>
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img alt="Aluminium" className="h-full w-full object-cover" src="/lovable-uploads/5c999f96-f326-4dc2-a85b-09eca404f377.jpg" />
                </div>
                <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-copper material-points">Aluminium</h4>
                  <p className="text-gray-600 mb-1">Lightweight and versatile aluminium products for various applications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary btn-lg px-4 py-2 mt-3 fw-semibold">
              Explore Our Products <ArrowRight size={18} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section bg-light pt-2">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Services</h2>
              <p className="lead">We offer comprehensive steel processing and supply chain solutions.</p>
            </div>
          </div>
          <div className={`${isMobile ? 'row g-2' : 'row g-4'}`}>
            {/* Chemical Analysis Service */}
            <div className="col-md-6 mb-4">
              <div className="service-card position-relative overflow-hidden rounded-4">
                <img src="/lovable-uploads/1092e548-b43f-4871-b3e2-89cc3d92bb44.png" alt="Chemical Analysis" className="w-100 h-100 object-cover" style={{
                height: "400px"
              }} />
                <div className="service-overlay">
                  <div className="service-content">
                    <div className="service-category mb-2">Material Testing</div>
                    <h3 className="service-title mb-2">Chemical Analysis & Quality Control</h3>
                    <p className="service-description">Comprehensive composition analysis for quality assurance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Material Grading Service */}
            <div className="col-md-6 mb-4">
              <div className="service-card position-relative overflow-hidden rounded-4">
                <img alt="Material Grading" className="w-100 h-100 object-cover" style={{
                height: "400px"
              }} src="/lovable-uploads/5b37fa72-862d-4cd7-99fb-7a61897d9c9e.jpg" />
                <div className="service-overlay">
                  <div className="service-content">
                    <div className="service-category mb-2">Material Processing</div>
                    <h3 className="service-title mb-2">Expert Material Grading</h3>
                    <p className="service-description">Expert segregation and grading of various metals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Torch Cutting Service */}
            <div className="col-md-6 mb-4">
              <div className="service-card position-relative overflow-hidden rounded-4">
                <img alt="Torch Cutting" className="w-100 h-100 object-cover" style={{
                height: "400px"
              }} src="/lovable-uploads/aeecbd59-4a4f-4af8-9ff0-33684ef03ee2.jpg" />
                <div className="service-overlay">
                  <div className="service-content">
                    <div className="service-category mb-2">Precision Cutting</div>
                    <h3 className="service-title mb-2">Advanced Torch Cutting</h3>
                    <p className="service-description">Precision cutting for customized size requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rolling & Forging Service */}
            <div className="col-md-6 mb-4">
              <div className="service-card position-relative overflow-hidden rounded-4">
                <img alt="Rolling & Forging" className="w-100 h-100 object-cover" style={{
                height: "400px"
              }} src="/lovable-uploads/759fd17c-834e-48f3-8c8b-2d8f72f6c6ae.jpg" />
                <div className="service-overlay">
                  <div className="service-content">
                    <div className="service-category mb-2">Metal Processing</div>
                    <h3 className="service-title mb-2">Rolling & Forging Solutions</h3>
                    <p className="service-description">Advanced processes for material transformation.</p>
                  </div>
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

      {/* Industries We Serve - Updated with copper background for icons */}
      <section className="section bg-light  pt-2">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Industries We Serve</h2>
              <p className="lead">Our quality materials support a wide range of industrial applications.</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="text-center industry-card p-4">
                <div className="industry-icon-wrapper" style={{
                backgroundColor: "#B87333"
              }}>
                  <span className="industry-icon">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M271.875 37.5H206.25L178.125 65.625H75L46.875 37.5H28.125C23.1522 37.5 18.3831 39.4754 14.8667 42.9917C11.3504 46.5081 9.375 51.2772 9.375 56.25V243.75C9.375 248.723 11.3504 253.492 14.8667 257.008C18.3831 260.525 23.1522 262.5 28.125 262.5H46.875L75 234.375H178.125L206.25 262.5H271.875C276.848 262.5 281.617 260.525 285.133 257.008C288.65 253.492 290.625 248.723 290.625 243.75V56.25C290.625 51.2772 288.65 46.5081 285.133 42.9917C281.617 39.4754 276.848 37.5 271.875 37.5Z" stroke="#fff" stroke-width="18.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.375 121.875H215.625C219.34 121.796 223.033 122.469 226.481 123.855C229.929 125.24 233.061 127.309 235.689 129.937C238.316 132.564 240.385 135.696 241.771 139.144C243.156 142.592 243.829 146.285 243.75 150" stroke="#fff" stroke-width="18.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.375 178.125H215.625C219.34 178.204 223.033 177.531 226.481 176.146C229.929 174.76 233.061 172.691 235.689 170.064C238.316 167.436 240.385 164.304 241.771 160.856C243.156 157.408 243.829 153.715 243.75 150" stroke="#fff" stroke-width="18.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M56.25 121.875V178.125" stroke="#fff" stroke-width="18.75" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M253.125 84.375C258.303 84.375 262.5 80.1777 262.5 75C262.5 69.8223 258.303 65.625 253.125 65.625C247.947 65.625 243.75 69.8223 243.75 75C243.75 80.1777 247.947 84.375 253.125 84.375Z" fill="#fff"/>
                      <path d="M253.125 234.375C258.303 234.375 262.5 230.178 262.5 225C262.5 219.822 258.303 215.625 253.125 215.625C247.947 215.625 243.75 219.822 243.75 225C243.75 230.178 247.947 234.375 253.125 234.375Z" fill="#fff"/>
                      </svg>

                  </span>
                </div>
                <h4 className="industry-title">01. Hardware</h4>
                <p className="industry-description">
                  Premium hardware solutions for diverse applications
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center industry-card p-4">
                <div className="industry-icon-wrapper" style={{
                backgroundColor: "#B87333"
              }}>
                  <span className="industry-icon">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M132.422 157.281V62.1092H167.578V107.563" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M167.578 142.719V237.891H132.422V192.437" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M142.719 167.578L75.4219 100.281L100.281 75.4225L132.421 107.562" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M157.281 132.422L224.578 199.719L199.718 224.578L167.579 192.438" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M157.281 167.578H62.1094V132.422H107.562" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M142.719 132.422H237.89V167.578H192.437" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M167.579 157.281L100.282 224.578L75.4229 199.719L107.563 167.578" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M132.422 142.719L199.719 75.4221L224.578 100.282L192.438 132.422" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <mask id="mask0_1146_14" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1146_14)">
                    <path d="M256.055 291.211H43.9453C24.5291 291.211 8.78906 275.471 8.78906 256.055V43.9453C8.78906 24.5291 24.5291 8.78909 43.9453 8.78909H256.055C275.471 8.78909 291.211 24.5291 291.211 43.9453V256.055C291.211 275.471 275.471 291.211 256.055 291.211Z" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M150 62.1094V8.78907" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M150 237.891V291.211" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.78906 150H62.1094" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M237.891 150H291.211" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>

                  </span>
                </div>
                <h4 className="industry-title">02. Air Coolers</h4>
                <p className="industry-description">
                  Quality materials for cooling systems
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center industry-card p-4">
                <div className="industry-icon-wrapper" style={{
                backgroundColor: "#B87333"
              }}>
                  <span className="industry-icon">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1146_46" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_1146_46)">
                      <path d="M0 55.9609H300" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M0 244.037H300" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M26.2261 29.2504V270.748" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M273.774 29.2504V270.748" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10"/>
                      </g>
                      <path d="M237.256 209.375H62.7446V90.6254H237.256V209.375Z" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10"/>
                      </svg>

                  </span>
                </div>
                <h4 className="industry-title">03. Frames</h4>
                <p className="industry-description">
                  Durable frame solutions for structural needs
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center industry-card p-4">
                <div className="industry-icon-wrapper" style={{
                backgroundColor: "#B87333"
              }}>
                  <span className="industry-icon">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1146_63" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1146_63)">
                    <path d="M291.211 114.844H8.78906V62.1094H291.211V114.844Z" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M273.633 237.891H26.3672V114.844H273.633V237.891Z" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <path d="M238.477 202.734H168.164V167.578H238.477V202.734Z" stroke="#fff" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  </span>
                </div>
                <h4 className="industry-title">04. Trunks</h4>
                <p className="industry-description">
                  Reliable storage and transport solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment (REDESIGNED and FIXED for mobile) */}
      <section className="section sustainability-section bg-light pt-2 pb-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative sustainability-image-container" style={{
              height: isMobile ? "auto" : "480px",
              marginBottom: isMobile ? "1.5rem" : "0"
            }}>
                <div className="rounded-lg overflow-hidden shadow-lg" style={{
                height: isMobile ? "300px" : "480px"
              }}>
                  <img src="/lovable-uploads/db1ac54c-6c54-4167-b4d3-9f3138d8cebf.png" alt="Steel recycling yard with recycling container" className="w-100 h-100 rounded-4 object-cover" />
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r from-green-500/10 to-copper/10 rounded-3xl" style={{
                borderRadius: '1rem'
              }}></div>
                <div className="position-absolute bottom-0 end-0 transform translate-y-1/4 translate-x-1/4">
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <Recycle size={40} className="text-green-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${isMobile ? 'p-2' : 'p-4'}`}>
                <div className={`d-inline-flex align-items-center justify-content-center rounded-3 p-3 bg-green-100 mb-4 leaf-icon-mobile-hidden ${isMobile ? 'leaf-icon-mobile-hidden' : ''}`}>
                  <Leaf className="text-green-600" size={24} />
                </div>
                <h2 className="fw-bold display-6 mb-4">Greener Steel, <span className="text-copper">Brighter Future</span></h2>
                <p className="lead mb-4">
                  Our commitment extends beyond steel — we champion recycling and repurposing for a cleaner tomorrow.
                </p>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex bg-light p-3 rounded-3 h-100">
                      <Recycle className="text-green-600 me-3 flex-shrink-0" size={24} />
                      <div>
                        <h5 className="fw-bold">10,000+ Tons</h5>
                        <p className="mb-0 text-muted">Recycled each year</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex bg-light p-3 rounded-3 h-100">
                      <Package className="text-copper me-3 flex-shrink-0" size={24} />
                      <div>
                        <h5 className="fw-bold">Materials Reuse</h5>
                        <p className="mb-0 text-muted">For new journeys</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex gap-3">
                  <img alt="Recycling Process" className="rounded-circle object-cover border-4 border-white shadow" style={{
                  width: "80px",
                  height: "80px"
                }} src="/lovable-uploads/18a10566-cdaf-4d20-ad1c-d6129b2bc194.png" />
                  <div className="bg-white p-3 rounded-3 shadow flex-grow-1">
                    <p className="fst-italic mb-0">
                      "Our sustainable practices have reduced carbon footprint by 30% while maintaining the highest quality standards."
                    </p>
                    <div className="text-copper fw-bold mt-2">— Dhawan Sustainability Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section: Partap Iron & Steel Rolling Mills (Mobile fixes) */}
      <section className="section-sm credibility-section" style={{
      backgroundColor: '#f8f9fa',
      position: 'relative',
      zIndex: 1
    }}>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-7">
              <div className="mb-4 credibility-card p-4 rounded-4 shadow-rich bg-white">
                <div className="d-flex align-items-center mb-3">
                  <span className={`me-3 p-3 bg-copper rounded-circle d-flex align-items-center justify-content-center mobile-hidden-svg ${isMobile ? 'mobile-hidden-svg' : ''}`}>
                    <Factory size={32} className="text-white" />
                  </span>
                  <h2 className="fw-bold mb-0" style={{
                  color: "#B87333",
                  fontSize: isMobile ? "1.75rem" : "2.1rem",
                  textAlign: isMobile ? "left" : "inherit"
                }}>
                    Partap Iron & Steel Rolling Mills
                  </h2>
                </div>
                <h5 className="text-steel fw-semibold mb-2" style={{
                textAlign: isMobile ? "left" : "inherit"
              }}>Precision & Credibility Since 1997</h5>
                <p className="lead" style={{
                color: "#6c757d"
              }}>
                  Partap Iron & Steel Rolling Mills, <span className="fw-semibold text-copper">part of our group since 1997</span>, manufactures MS Bars & Angles at Khanna, Punjab.<br />
                  Renowned for <span className="fw-semibold">thin-section steel production</span>, Partap supports industries across India with precision-crafted steel products.
                </p>
                <div className="d-flex flex-wrap gap-4 mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-light border border-silver shadow-rich rounded-3 p-3 d-inline-flex">
                      <Award size={28} className="text-copper" />
                    </span>
                    <div>
                      <span className="fw-bold d-block text-steel">Trusted since 1997</span>
                      <span className="text-muted small">Years of steelmaking excellence</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-light border border-silver shadow-rich rounded-3 p-3 d-inline-flex">
                      <BadgeCheck size={28} className="text-success" />
                    </span>
                    <div>
                      <span className="fw-bold d-block text-steel">Certified Precision</span>
                      <span className="text-muted small">IS:1786/MS standards</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="bg-light border border-silver shadow-rich rounded-3 p-3 d-inline-flex">
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
                <img alt="Steel manufacturing at Partap Mills" className="img-fluid rounded-4 shadow-rich" style={{
                width: "100%",
                height: 340,
                objectFit: "cover",
                border: '4px solid var(--copper)'
              }} src="/lovable-uploads/7e84c32b-5c94-4562-b698-1f14a5419361.jpg" />
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

    </>;
};
export default Index;
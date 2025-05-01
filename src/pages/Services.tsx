import { Link } from 'react-router-dom';
import { Search, List, Wrench, Settings, Truck, Recycle, ArrowRight, Package, Leaf, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Services = () => {
  const isMobile = useIsMobile();
  return <>
      {/* Page Header */}
      <section className="bg-copper text-white py-5">
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
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-copper">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Material Processing */}
      <section className="section">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Material Processing Services</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Advanced material analysis, segregation, and customization services</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img alt="Material Processing" className="img-fluid rounded-4 shadow" style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              maxHeight: '600px'
            }} src="/lovable-uploads/a31bf3ae-f6dc-4576-807c-e80144f93c2b.jpg" />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1158_101" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1158_101)">
                      <path d="M73.8234 21.4766L98.4305 35.6832L123.037 49.8899V78.3037V106.718L98.4305 120.924L73.8234 135.131L49.2164 120.924L24.6094 106.718V78.3037V49.8899L49.2164 35.6832L73.8234 21.4766Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M123.037 106.717V78.3035V49.8897L147.644 35.683L172.251 21.4758L196.858 35.683L221.465 49.8897V73.7162" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <path d="M121.67 218.719L99.9244 206.164L75.3174 191.957V163.544V135.13L99.9244 120.923L121.132 108.679" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <mask id="mask1_1158_101" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                      </mask>
                      <g mask="url(#mask1_1158_101)">
                      <path d="M173.176 92.5098H123.047V291.143H291.211V92.5098H240.646" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <path d="M174.609 109.502H239.648V74.3457H174.609V109.502Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <mask id="mask2_1158_101" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                      </mask>
                      <g mask="url(#mask2_1158_101)">
                      <path d="M24.6094 106.716L8.78906 117.119" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <path d="M75.3178 191.958L40.5078 220.908" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <mask id="mask3_1158_101" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                      </mask>
                      <g mask="url(#mask3_1158_101)">
                      <path d="M73.8276 21.6797V8.85703" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <path d="M181.411 144.658H232.848" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M158.203 179.814H256.055" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M158.203 214.971H256.055" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M158.203 250.127H256.055" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                    <h4 className="fw-bold mb-0">Chemical Composition Analysis</h4>
                  </div>
                  <p>
                    Our state-of-the-art testing equipment allows us to perform detailed chemical composition analysis of various materials. This ensures that you receive exactly what you need for your specific applications, with verified material properties and quality.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 258 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M129 300C135.472 300 140.719 294.753 140.719 288.281C140.719 281.809 135.472 276.562 129 276.562C122.528 276.562 117.281 281.809 117.281 288.281C117.281 294.753 122.528 300 129 300Z" fill="#B87333" />
                      <path d="M152.438 276.562C158.91 276.562 164.156 271.316 164.156 264.844C164.156 258.372 158.91 253.125 152.438 253.125C145.965 253.125 140.719 258.372 140.719 264.844C140.719 271.316 145.965 276.562 152.438 276.562Z" fill="#B87333" />
                      <path d="M105.562 276.562C112.035 276.562 117.281 271.316 117.281 264.844C117.281 258.372 112.035 253.125 105.562 253.125C99.0904 253.125 93.8438 258.372 93.8438 264.844C93.8438 271.316 99.0904 276.562 105.562 276.562Z" fill="#B87333" />
                      <path d="M35.25 70.3125H58.6875C78.0727 70.3125 93.8438 54.5414 93.8438 35.1562C93.8438 15.7711 78.0727 0 58.6875 0H35.25C15.8648 0 0.09375 15.7711 0.09375 35.1562C0.09375 54.5414 15.8648 70.3125 35.25 70.3125ZM35.25 23.4375H58.6875C65.1492 23.4375 70.4062 28.6945 70.4062 35.1562C70.4062 41.618 65.1492 46.875 58.6875 46.875H35.25C28.7883 46.875 23.5312 41.618 23.5312 35.1562C23.5312 28.6945 28.7883 23.4375 35.25 23.4375Z" fill="#B87333" />
                      <path d="M199.312 70.3125H222.75C242.135 70.3125 257.906 54.5414 257.906 35.1562C257.906 15.7711 242.135 0 222.75 0H199.312C179.927 0 164.156 15.7711 164.156 35.1562C164.156 54.5414 179.927 70.3125 199.312 70.3125ZM199.312 23.4375H222.75C229.212 23.4375 234.469 28.6945 234.469 35.1562C234.469 41.618 229.212 46.875 222.75 46.875H199.312C192.851 46.875 187.594 41.618 187.594 35.1562C187.594 28.6945 192.851 23.4375 199.312 23.4375Z" fill="#B87333" />
                      <path d="M35.25 164.062H58.6875C78.0727 164.062 93.8438 148.291 93.8438 128.906C93.8438 109.521 78.0727 93.75 58.6875 93.75H35.25C15.8648 93.75 0.09375 109.521 0.09375 128.906C0.09375 148.291 15.8648 164.062 35.25 164.062ZM35.25 117.188H58.6875C65.1492 117.188 70.4062 122.445 70.4062 128.906C70.4062 135.368 65.1492 140.625 58.6875 140.625H35.25C28.7883 140.625 23.5312 135.368 23.5312 128.906C23.5312 122.445 28.7883 117.188 35.25 117.188Z" fill="#B87333" />
                      <path d="M199.312 164.062H222.75C242.135 164.062 257.906 148.291 257.906 128.906C257.906 109.521 242.135 93.75 222.75 93.75H199.312C179.927 93.75 164.156 109.521 164.156 128.906C164.156 148.291 179.927 164.062 199.312 164.062ZM199.312 117.188H222.75C229.212 117.188 234.469 122.445 234.469 128.906C234.469 135.368 229.212 140.625 222.75 140.625H199.312C192.851 140.625 187.594 135.368 187.594 128.906C187.594 122.445 192.851 117.188 199.312 117.188Z" fill="#B87333" />
                      <path d="M35.25 257.812H58.6875C78.0727 257.812 93.8438 242.041 93.8438 222.656C93.8438 203.271 78.0727 187.5 58.6875 187.5H35.25C15.8648 187.5 0.09375 203.271 0.09375 222.656C0.09375 242.041 15.8648 257.812 35.25 257.812ZM35.25 210.938H58.6875C65.1492 210.938 70.4062 216.195 70.4062 222.656C70.4062 229.118 65.1492 234.375 58.6875 234.375H35.25C28.7883 234.375 23.5312 229.118 23.5312 222.656C23.5312 216.195 28.7883 210.938 35.25 210.938Z" fill="#B87333" />
                      <path d="M199.312 257.812H222.75C242.135 257.812 257.906 242.041 257.906 222.656C257.906 203.271 242.135 187.5 222.75 187.5H199.312C179.927 187.5 164.156 203.271 164.156 222.656C164.156 242.041 179.927 257.812 199.312 257.812ZM199.312 210.938H222.75C229.212 210.938 234.469 216.195 234.469 222.656C234.469 229.118 229.212 234.375 222.75 234.375H199.312C192.851 234.375 187.594 229.118 187.594 222.656C187.594 216.195 192.851 210.938 199.312 210.938Z" fill="#B87333" />
                      <path d="M129 0C122.528 0 117.281 5.24707 117.281 11.7188V241.406C117.281 247.879 122.528 253.125 129 253.125C135.472 253.125 140.719 247.878 140.719 241.406V11.7188C140.719 5.24648 135.472 0 129 0Z" fill="#B87333" />
                      </svg>

                    </div>
                    <h4 className="fw-bold mb-0">Segregation & Grading</h4>
                  </div>
                  <p>
                    Our experienced team meticulously segregates and grades materials based on their composition and properties. This process ensures consistency in quality and helps our customers select the perfect materials for their specific requirements.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1158_168)">
                        <path d="M243.75 11.7188H288.281" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.7188 11.7188H196.875V58.5938C196.875 71.5377 186.381 82.0312 173.438 82.0312H126.562C113.619 82.0312 103.125 71.5377 103.125 58.5938V11.7188" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M173.438 82.0312V126.562L150 150L126.562 126.562V82.0312" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M150 288.281V150" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.7188 288.281H103.125" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M196.875 288.281H288.281" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M150 150V194.531" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M79.6875 166.496L103.125 207.091" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.2153 217.969L68.8103 241.406" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M220.312 166.496L196.875 207.091" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M271.785 217.969L231.19 241.406" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                        <clipPath id="clip0_1158_168">
                        <rect width="300" height="300" fill="white" />
                        </clipPath>
                        </defs>
                        </svg>
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
      <section className="section bg-light pt-3">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Rolling Services</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Specialized rolling services for custom profiles and dimensions</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" alt="Steel Rolling Services" className="img-fluid rounded-4 shadow" style={{
              height: '420px',
              width: '100%',
              objectFit: 'cover'
            }} />
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
                      <span className="me-2 text-copper">✓</span>
                      <p className="mb-0">Round Bars (multiple diameters)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-copper">✓</span>
                      <p className="mb-0">Flat Bars (various dimensions)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-copper">✓</span>
                      <p className="mb-0">Custom Profiles</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2 text-copper">✓</span>
                      <p className="mb-0">Angles & Channels</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-4">
                    Through our sister concern, Partap Iron & Steel Rolling Mills, we have developed expertise in producing the thinnest angles available in India, catering to specialized industrial requirements.
                  </p>
                  <Link to="/contact" className="btn btn-accent">
                    Request Custom Rolling Services <ArrowRight size={18} className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forging & Annealing */}
      <section className="section pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Forging & Annealing</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Heat treatment and shaping services for enhanced material properties</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-3 pb-0">
                <div className="card-body">
                  <div className="feature-icon mb-4 bg-silver mx-auto">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1159_182" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1159_182)">
                    <path d="M44.5312 291.211H255.469" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M273.047 237.891H26.9531V202.734H273.047V237.891Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M237.891 43.9453H62.1094V8.78907H237.891V43.9453Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    </g>
                    <path d="M185.156 43.9453V114.844H114.844V43.9453" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M167.578 114.844V202.734" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <mask id="mask1_1159_182" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_1159_182)">
                    <path d="M167.578 237.891V291.211H132.422V237.891" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    </g>
                    <path d="M132.422 202.734V114.844" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <mask id="mask2_1159_182" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                    </mask>
                    <g mask="url(#mask2_1159_182)">
                    <path d="M281.836 114.844H220.312" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" />
                    </g>
                    <path d="M237.891 132.422L220.312 114.844L237.891 97.2656" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    <mask id="mask3_1159_182" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white" />
                    </mask>
                    <g mask="url(#mask3_1159_182)">
                    <path d="M18.1641 114.844H79.6875" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" />
                    </g>
                    <path d="M62.1094 132.422L79.6875 114.844L62.1094 97.2656" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="square" />
                    </svg>

                  </div>
                  <h4 className="card-title fw-bold mb-3">High-Pressure Forging</h4>
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
                        <span className="me-2 text-copper">✓</span>
                        <span>Improved grain structure</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
                        <span>Enhanced material strength</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
                        <span>Greater durability</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
                        <span>Precise dimensional control</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm p-3 pb-0">
                <div className="card-body">
                  <div className="feature-icon bg-silver mb-4 mx-auto">
                  <svg width="30" height="30" viewBox="0 0 264 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M244.5 96.225V57C244.5 54.5136 243.512 52.129 241.754 50.3709C239.996 48.6127 237.611 47.625 235.125 47.625C232.639 47.625 230.254 48.6127 228.496 50.3709C226.738 52.129 225.75 54.5136 225.75 57V96.225C220.285 98.157 215.551 101.73 212.195 106.456C208.838 111.182 207.024 116.829 207 122.625V141.375C207.024 147.171 208.838 152.818 212.195 157.544C215.551 162.27 220.285 165.843 225.75 167.775V235.125C225.75 237.611 224.762 239.996 223.004 241.754C221.246 243.512 218.861 244.5 216.375 244.5H122.625C120.139 244.5 117.754 243.512 115.996 241.754C114.238 239.996 113.25 237.611 113.25 235.125V207H122.625C130.084 207 137.238 204.037 142.512 198.762C147.787 193.488 150.75 186.334 150.75 178.875V66.375C150.75 58.9158 147.787 51.7621 142.512 46.4876C137.238 41.2132 130.084 38.25 122.625 38.25H103.875V28.875C103.875 21.4158 100.912 14.2621 95.6374 8.98762C90.3629 3.71316 83.2092 0.75 75.75 0.75C68.2908 0.75 61.1371 3.71316 55.8626 8.98762C50.5882 14.2621 47.625 21.4158 47.625 28.875V38.25H28.875C21.4158 38.25 14.2621 41.2132 8.98762 46.4876C3.71316 51.7621 0.75 58.9158 0.75 66.375V178.875C0.75 186.334 3.71316 193.488 8.98762 198.762C14.2621 204.037 21.4158 207 28.875 207H38.25V216.375C38.25 218.861 39.2377 221.246 40.9959 223.004C42.754 224.762 45.1386 225.75 47.625 225.75C50.1114 225.75 52.496 224.762 54.2541 223.004C56.0123 221.246 57 218.861 57 216.375V207H94.5V235.125C94.5 242.584 97.4632 249.738 102.738 255.012C108.012 260.287 115.166 263.25 122.625 263.25H216.375C223.834 263.25 230.988 260.287 236.262 255.012C241.537 249.738 244.5 242.584 244.5 235.125V167.775C249.965 165.843 254.699 162.27 258.055 157.544C261.412 152.818 263.226 147.171 263.25 141.375V122.625C263.226 116.829 261.412 111.182 258.055 106.456C254.699 101.73 249.965 98.157 244.5 96.225ZM66.375 28.875C66.375 26.3886 67.3627 24.004 69.1209 22.2459C70.879 20.4877 73.2636 19.5 75.75 19.5C78.2364 19.5 80.621 20.4877 82.3791 22.2459C84.1373 24.004 85.125 26.3886 85.125 28.875V38.25H66.375V28.875ZM28.875 188.25C26.3886 188.25 24.004 187.262 22.2459 185.504C20.4877 183.746 19.5 181.361 19.5 178.875V169.5H28.875C31.3614 169.5 33.746 168.512 35.5041 166.754C37.2623 164.996 38.25 162.611 38.25 160.125C38.25 157.639 37.2623 155.254 35.5041 153.496C33.746 151.738 31.3614 150.75 28.875 150.75H19.5V132H28.875C31.3614 132 33.746 131.012 35.5041 129.254C37.2623 127.496 38.25 125.111 38.25 122.625C38.25 120.139 37.2623 117.754 35.5041 115.996C33.746 114.238 31.3614 113.25 28.875 113.25H19.5V94.5H28.875C31.3614 94.5 33.746 93.5123 35.5041 91.7541C37.2623 89.996 38.25 87.6114 38.25 85.125C38.25 82.6386 37.2623 80.254 35.5041 78.4959C33.746 76.7377 31.3614 75.75 28.875 75.75H19.5V66.375C19.5 63.8886 20.4877 61.504 22.2459 59.7459C24.004 57.9877 26.3886 57 28.875 57H122.625C125.111 57 127.496 57.9877 129.254 59.7459C131.012 61.504 132 63.8886 132 66.375V178.875C132 181.361 131.012 183.746 129.254 185.504C127.496 187.262 125.111 188.25 122.625 188.25H28.875ZM244.5 141.375C244.5 143.861 243.512 146.246 241.754 148.004C239.996 149.762 237.611 150.75 235.125 150.75C232.639 150.75 230.254 149.762 228.496 148.004C226.738 146.246 225.75 143.861 225.75 141.375V122.625C225.75 120.139 226.738 117.754 228.496 115.996C230.254 114.238 232.639 113.25 235.125 113.25C237.611 113.25 239.996 114.238 241.754 115.996C243.512 117.754 244.5 120.139 244.5 122.625V141.375ZM75.75 85.125C56.3906 85.125 47.625 121.078 47.625 132C47.625 139.459 50.5882 146.613 55.8626 151.887C61.1371 157.162 68.2908 160.125 75.75 160.125C83.2092 160.125 90.3629 157.162 95.6374 151.887C100.912 146.613 103.875 139.459 103.875 132C103.875 121.078 95.1094 85.125 75.75 85.125ZM75.75 141.375C73.2636 141.375 70.879 140.387 69.1209 138.629C67.3627 136.871 66.375 134.486 66.375 132C67.1486 122.244 70.3733 112.84 75.75 104.662C81.1267 112.84 84.3514 122.244 85.125 132C85.125 134.486 84.1373 136.871 82.3791 138.629C80.621 140.387 78.2364 141.375 75.75 141.375Z" fill="#B87333" />
                    </svg>

                  </div>
                  <h4 className="card-title fw-bold mb-3">Heat Treatment & Annealing</h4>
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
                        <span className="me-2 text-copper">✓</span>
                        <span>Full annealing</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
                        <span>Process annealing</span>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
                        <span>Stress relief annealing</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <span className="me-2 text-copper">✓</span>
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
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Material Supply & Logistics</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Reliable supply chain solutions across India</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Logistics Solutions" className="img-fluid rounded-4 shadow" style={{
              height: isMobile ? '300px' : '520px',
              width: '100%',
              objectFit: 'cover'
            }} />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1159_229)">
                      <path d="M9.59398 217.172C14.8978 217.172 19.1932 212.882 19.1932 207.578L19.2764 62.0556C19.2764 50.7765 27.4976 43.1952 39.7388 43.1952H174.196C195.823 43.1952 199.707 46.0445 208.698 55.0356C212.254 58.7433 245.634 101.331 266.06 127.576C266.205 127.753 280.802 145.755 280.802 166.597V207.568C280.802 212.871 285.097 217.167 290.401 217.167C295.7 217.167 299.995 212.871 299.995 207.568V166.597C299.995 138.517 281.561 116.188 280.994 115.517C272.034 103.999 227.085 46.273 222.306 41.4889C209.176 28.3642 200.383 23.9961 174.196 23.9961H39.7388C16.7599 23.9961 0.0832065 39.9966 0.0832065 62.0444L4.85022e-06 207.568C-0.00526849 212.871 4.29016 217.172 9.59398 217.172Z" fill="#B87333" />
                      <path d="M290.401 224.202H270.076C265.715 205.544 248.954 191.598 228.989 191.598C209.022 191.598 192.261 205.541 187.9 224.202H107.955C103.594 205.544 86.8327 191.598 66.8672 191.598C46.8988 191.598 30.1325 205.544 25.7732 224.207H9.59924C4.29543 224.207 0 228.508 0 233.806C0 239.105 4.29543 243.4 9.59924 243.4H25.7726C30.1307 262.057 46.8941 276.004 66.8672 276.004C86.8403 276.004 103.604 262.057 107.959 243.4H187.899C192.256 262.057 209.015 276.004 228.989 276.004C248.962 276.004 265.721 262.057 270.078 243.4H290.401C295.7 243.4 300 239.105 300 233.801C300 228.497 295.705 224.202 290.401 224.202ZM66.8672 256.811C54.1971 256.811 43.8912 246.527 43.8537 233.875C43.8537 233.852 43.8572 233.83 43.8572 233.807C43.8572 233.783 43.8537 233.761 43.8537 233.738C43.8912 221.076 54.2024 210.791 66.8672 210.791C79.5554 210.791 89.8771 221.113 89.8771 233.806C89.8771 246.494 79.5502 256.811 66.8672 256.811ZM228.989 256.811C216.323 256.811 206.016 246.525 205.98 233.872C205.98 233.848 205.984 233.825 205.984 233.801C205.984 233.779 205.98 233.757 205.98 233.734C206.02 221.074 216.33 210.791 228.989 210.791C241.677 210.791 251.998 221.113 251.998 233.806C251.998 246.494 241.676 256.811 228.989 256.811Z" fill="#B87333" />
                      <path d="M173.624 50.2559C168.32 50.2559 164.024 54.5513 164.024 59.8551V150.107C164.024 155.41 168.32 159.706 173.624 159.706H258.946C264.245 159.706 268.55 155.41 268.55 150.107C268.55 144.803 264.255 140.507 258.951 140.507H183.223V59.8551C183.223 54.5513 178.927 50.2559 173.624 50.2559Z" fill="#B87333" />
                      <path d="M135.107 91.7574C135.107 86.4536 130.812 82.1582 125.508 82.1582H75.9C70.5962 82.1582 66.3008 86.4536 66.3008 91.7574C66.3008 97.0613 70.5962 101.357 75.9 101.357H125.508C130.807 101.357 135.107 97.0618 135.107 91.7574Z" fill="#B87333" />
                      <path d="M52.3229 114.658C47.0191 114.658 42.7236 118.954 42.7236 124.257C42.7236 129.561 47.0191 133.857 52.3229 133.857H101.931C107.23 133.857 111.53 129.561 111.53 124.257C111.53 118.954 107.235 114.658 101.931 114.658H52.3229Z" fill="#B87333" />
                      </g>
                      <defs>
                      <clipPath id="clip0_1159_229">
                      <rect width="300" height="300" fill="white" />
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-2">Pan-India Delivery</h4>
                  </div>
                  <p>
                    We offer comprehensive logistics and delivery services across India. Our established network ensures timely delivery of your materials to any location, helping you maintain production schedules and avoid costly delays.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                      <svg width="34" height="34" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M220.312 184.219V111.094C220.312 110.156 220.313 109.219 219.844 108.75V108.281C219.375 107.344 219.375 106.875 218.906 105.938C218.437 105.469 217.969 104.531 217.5 104.063C217.5 104.063 217.031 104.063 217.031 103.594C216.562 103.125 215.625 102.656 214.687 102.187L153.75 80.1563C151.875 79.2188 149.531 79.2188 147.187 80.1563L86.25 102.187C85.3125 102.656 84.8437 103.125 83.9062 103.594C83.9062 103.594 83.4375 103.594 83.4375 104.063C82.9687 104.531 82.5 105 82.0312 105.938C81.5625 106.406 81.0937 107.344 81.0937 108.281V108.75C81.0937 109.688 80.625 110.625 80.625 111.094V184.219C80.625 187.969 82.9687 191.719 86.7187 193.125L147.656 215.156H148.125H148.594C149.531 215.156 150 215.625 150.938 215.625C151.875 215.625 152.812 215.625 153.281 215.156H153.75H154.219L215.156 193.125C217.969 191.719 220.312 187.969 220.312 184.219ZM150 98.9063L183.281 111.094L150 123.281L116.719 111.094L150 98.9063ZM98.4375 177.656V124.687L140.625 140.156V193.125L98.4375 177.656ZM159.375 192.656V139.687L201.562 124.219V177.187L159.375 192.656Z" fill="#B87333" />
                        <path d="M150 234.375C144.844 234.375 140.625 238.594 140.625 243.75V258.75L140.156 258.281C136.406 254.531 130.781 254.531 127.031 258.281C123.281 262.031 123.281 267.656 127.031 271.406L143.437 287.813C143.906 288.281 144.375 288.75 144.844 289.219L145.312 289.687C145.781 289.687 145.781 290.156 146.25 290.156C146.719 290.156 146.719 290.156 147.187 290.625C147.656 290.625 147.656 290.625 148.125 291.094H150C150 291.094 151.406 291.094 151.875 291.094C152.344 291.094 152.344 291.094 152.812 290.625C153.281 290.625 153.281 290.625 153.75 290.156C154.219 290.156 154.219 289.687 154.687 289.687C154.687 289.687 155.156 289.688 155.156 289.219C155.625 288.75 156.094 288.281 156.563 287.813L172.969 271.406C176.719 267.656 176.719 262.031 172.969 258.281C169.219 254.531 163.594 254.531 159.844 258.281L159.375 258.75V243.75C159.375 238.594 155.156 234.375 150 234.375Z" fill="#B87333" />
                        <path d="M150 65.625C155.156 65.625 159.375 61.4063 159.375 56.25V41.25L159.844 41.7187C161.719 43.5937 164.062 44.5312 166.406 44.5312C168.75 44.5312 171.094 43.5937 172.969 41.7187C176.719 37.9687 176.719 32.3437 172.969 28.5937L156.563 12.1875C156.094 11.7187 155.625 11.25 155.156 10.7812L154.687 10.3125C154.219 10.3125 154.219 9.84375 153.75 9.84375C153.281 9.84375 153.281 9.84375 152.812 9.375C152.344 9.375 152.344 9.375 151.875 8.90625C150.469 9.375 149.531 9.375 148.125 9.375C147.656 9.375 147.656 9.375 147.187 9.84375C146.719 9.84375 146.719 9.84375 146.25 10.3125C145.781 10.3125 145.781 10.7812 145.312 10.7812C145.312 10.7812 144.844 10.7813 144.844 11.25C144.375 11.7188 143.906 12.1875 143.437 12.6563L127.031 29.0625C123.281 32.8125 123.281 38.4375 127.031 42.1875C130.781 45.9375 136.406 45.9375 140.156 42.1875L140.625 41.25V56.25C140.625 61.4063 144.844 65.625 150 65.625Z" fill="#B87333" />
                        <path d="M65.625 150C65.625 144.844 61.4063 140.625 56.25 140.625H41.25L41.7187 140.156C45.4687 136.406 45.4687 130.781 41.7187 127.031C37.9687 123.281 32.3437 123.281 28.5937 127.031L12.1875 143.437C11.7187 143.906 11.25 144.375 10.7812 144.844L10.3125 145.312C10.3125 145.781 9.84375 145.781 9.84375 146.25C9.84375 146.719 9.84375 146.719 9.375 147.187C9.375 147.656 9.375 147.656 8.90625 148.125C9.375 149.531 9.375 150.469 9.375 151.875C9.375 152.344 9.375 152.344 9.84375 152.812C9.84375 153.281 9.84375 153.281 10.3125 153.75C10.3125 154.219 10.7812 154.219 10.7812 154.687C10.7812 154.687 10.7813 155.156 11.25 155.156L12.6563 156.563L29.0625 172.969C30.9375 174.844 33.2812 175.781 35.625 175.781C37.9687 175.781 40.3125 174.844 42.1875 172.969C45.9375 169.219 45.9375 163.594 42.1875 159.844L41.25 159.375H56.25C61.4063 159.375 65.625 155.156 65.625 150Z" fill="#B87333" />
                        <path d="M258.281 172.969C260.156 174.844 262.5 175.781 264.844 175.781C267.188 175.781 269.531 174.844 271.406 172.969L287.813 156.563L289.219 155.156L289.687 154.687C289.687 154.219 290.156 154.219 290.156 153.75C290.156 153.281 290.156 153.281 290.625 152.812C290.625 152.344 290.625 152.344 291.094 151.875C291.562 150.469 291.562 149.531 291.094 148.125C291.094 147.656 291.094 147.656 290.625 147.187C290.625 146.719 290.625 146.719 290.156 146.25C290.156 145.781 289.687 145.781 289.687 145.312C289.687 145.312 289.688 144.844 289.219 144.844C288.75 144.375 288.281 143.906 287.813 143.437L271.406 127.031C267.656 123.281 262.031 123.281 258.281 127.031C254.531 130.781 254.531 136.406 258.281 140.156L258.75 140.625H243.75C238.594 140.625 234.375 144.844 234.375 150C234.375 155.156 238.594 159.375 243.75 159.375H258.75L258.281 159.844C254.531 163.594 254.531 169.688 258.281 172.969Z" fill="#B87333" />
                        <path d="M90.4687 209.531C86.7187 205.781 81.0938 205.781 77.3438 209.531L66.5625 220.312V219.375C66.5625 214.219 62.3438 210 57.1875 210C52.0312 210 47.8125 214.219 47.8125 219.375V242.812V244.688C47.8125 245.156 47.8125 245.156 48.2813 245.625C48.2813 246.094 48.2812 246.094 48.75 246.562C48.75 247.031 49.2188 247.031 49.2188 247.5C49.2188 247.5 49.2188 247.969 49.6875 247.969C50.1563 248.906 51.0937 249.844 52.5 250.781L52.9688 251.25C53.4375 251.25 53.4375 251.719 53.9063 251.719C54.375 251.719 54.375 251.719 54.8438 252.187C55.3125 252.187 55.3125 252.188 55.7812 252.656H57.6563H81.0937C86.25 252.656 90.4687 248.438 90.4687 243.281C90.4687 238.125 86.25 233.906 81.0937 233.906H79.6875L90 223.594C94.2188 219.375 94.2187 213.281 90.4687 209.531Z" fill="#B87333" />
                        <path d="M242.812 90C247.969 90 252.188 85.7813 252.188 80.625V57.1875C252.188 56.7187 252.188 55.7812 252.188 55.3125C252.188 54.8437 252.188 54.8438 251.719 54.375C251.719 53.9062 251.719 53.9062 251.25 53.4375C251.25 52.9687 250.781 52.9687 250.781 52.5C250.781 52.5 250.781 52.0312 250.313 52.0312C249.844 51.0937 248.906 50.1562 247.5 49.2187L247.031 48.75C246.563 48.75 246.563 48.2812 246.094 48.2812C245.625 48.2812 245.625 48.2812 245.156 47.8125C244.688 47.8125 244.687 47.8125 244.219 47.3438C243.75 47.3438 242.813 47.3438 242.344 47.3438H218.906C213.75 47.3438 209.531 51.5625 209.531 56.7188C209.531 61.875 213.75 66.0938 218.906 66.0938H220.313L210 76.4062C206.25 80.1562 206.25 85.7812 210 89.5312C211.875 91.4063 214.219 92.3438 216.563 92.3438C218.906 92.3438 221.25 91.4063 223.125 89.5312L233.437 79.2187V80.1562C233.437 85.7813 237.656 90 242.812 90Z" fill="#B87333" />
                        <path d="M210 242.812C210 247.969 214.219 252.188 219.375 252.188H242.812H244.687C245.156 252.188 245.156 252.188 245.625 251.719C246.094 251.719 246.094 251.719 246.562 251.25C247.031 251.25 247.031 250.781 247.5 250.781C247.5 250.781 247.969 250.781 247.969 250.313C248.906 249.844 249.844 248.906 250.781 247.5L251.25 247.031C251.25 246.563 251.719 246.563 251.719 246.094C251.719 245.625 251.719 245.625 252.187 245.156C252.187 244.688 252.188 244.687 252.656 244.219C252.656 243.75 252.656 242.813 252.656 242.344V218.906C252.656 213.75 248.437 209.531 243.281 209.531C238.125 209.531 233.906 213.75 233.906 218.906V220.313L223.594 210C219.844 206.25 214.219 206.25 210.469 210C206.719 213.75 206.719 219.375 210.469 223.125L220.781 233.437H219.844C214.219 233.437 210 237.656 210 242.812Z" fill="#B87333" />
                        <path d="M90 57.1875C90 52.0312 85.7813 47.8125 80.625 47.8125H57.1875C56.7187 47.8125 55.7812 47.8125 55.3125 47.8125C54.8437 47.8125 54.8438 47.8125 54.375 48.2813C53.9062 48.2813 53.9062 48.2812 53.4375 48.75C52.9687 48.75 52.9687 49.2188 52.5 49.2188C52.5 49.2188 52.0312 49.2188 52.0312 49.6875C51.0937 50.1563 50.1562 51.0937 49.2187 52.5L48.75 52.9688C48.75 53.4375 48.2812 53.4375 48.2812 53.9063C48.2812 54.375 48.2812 54.375 47.8125 54.8438C47.8125 55.3125 47.8125 55.3125 47.3438 55.7812V57.6563V81.0937C47.3438 86.25 51.5625 90.4687 56.7188 90.4687C61.875 90.4687 66.0938 86.25 66.0938 81.0937V79.6875L76.4062 90C78.2812 91.875 80.625 92.8125 82.9688 92.8125C85.3125 92.8125 87.6562 91.875 89.5312 90C93.2813 86.25 93.2813 80.625 89.5312 76.875L79.6875 66.5625H80.625C85.7813 66.5625 90 62.3438 90 57.1875Z" fill="#B87333" />
                        </svg>

                    </div>
                    <h4 className="fw-bold mb-2">Flexible Supply Volumes</h4>
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
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Nationwide network</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Timely deliveries</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Tracking systems</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
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
      <section className="section pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Sustainability Practices</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Our commitment to environmental responsibility and circular economy</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Sustainability Practices" className="img-fluid rounded-4 shadow" style={{
              height: isMobile ? '400px' : '520px',
              width: '100%',
              objectFit: 'cover'
            }} />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="34" height="34" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M178.125 159.375V140.625C178.125 128.419 170.264 118.11 159.375 114.227V93.75H178.125C203.97 93.75 225 72.7203 225 46.875C225 41.6931 220.807 37.5 215.625 37.5H196.875C177.145 37.5 160.3 49.7921 153.397 67.0893C152.296 65.2548 151.012 63.5405 149.621 61.8765C147.675 37.8067 127.687 18.75 103.125 18.75H84.375C79.1931 18.75 75 22.9431 75 28.125C75 53.9703 96.0297 75 121.875 75H136.254C139.054 78.8412 140.625 83.4154 140.625 88.2568V114.227C129.736 118.11 121.875 128.419 121.875 140.625V159.375C116.693 159.375 112.5 163.568 112.5 168.75V196.875C112.5 202.057 116.693 206.25 121.875 206.25H140.625V225H131.25C127.698 225 124.457 227.005 122.864 230.182L113.489 248.932C112.17 251.569 112.17 254.681 113.489 257.318L122.864 276.068C125.18 280.701 130.811 282.568 135.443 280.261C140.076 277.945 141.953 272.314 139.636 267.682L132.358 253.125L137.045 243.75H162.955L167.642 253.125L160.364 267.682C158.047 272.314 159.924 277.945 164.557 280.261C165.903 280.93 167.331 281.25 168.741 281.25C172.183 281.25 175.488 279.355 177.136 276.068L186.511 257.318C187.83 254.681 187.83 251.569 186.511 248.932L177.136 230.182C175.543 227.005 172.302 225 168.75 225H159.375V206.25H178.125C183.307 206.25 187.5 202.057 187.5 196.875V168.75C187.5 163.568 183.307 159.375 178.125 159.375ZM196.875 56.25H204.648C200.775 67.1631 190.347 75 178.125 75H170.352C174.225 64.0869 184.653 56.25 196.875 56.25ZM121.875 56.25C109.653 56.25 99.2249 48.4131 95.3522 37.5H103.125C115.347 37.5 125.775 45.3369 129.648 56.25H121.875ZM140.625 140.625C140.625 135.452 144.827 131.25 150 131.25C155.173 131.25 159.375 135.452 159.375 140.625V159.375H140.625V140.625ZM168.75 187.5H131.25V178.125H168.75V187.5Z" fill="#B87333" />
                      <path d="M281.25 150.001C281.25 120.438 271.655 92.5239 253.491 69.2786C250.305 65.1954 244.418 64.463 240.335 67.6581C236.252 70.8442 235.529 76.7402 238.715 80.8143C254.279 100.736 262.5 124.659 262.5 150.001C262.5 183.621 247.731 214.853 222.399 236.106L223.059 233.643C224.396 228.644 221.429 223.499 216.431 222.163C211.459 220.817 206.287 223.783 204.95 228.791L197.671 255.955C197.031 258.353 197.36 260.917 198.605 263.068C199.85 265.22 201.901 266.795 204.3 267.435L231.473 274.714C232.288 274.934 233.102 275.034 233.908 275.034C238.046 275.034 241.837 272.269 242.953 268.085C244.29 263.087 241.324 257.941 236.325 256.605L228.871 254.609C261.739 229.855 281.25 191.567 281.25 150.001Z" fill="#B87333" />
                      <path d="M98.0713 249.829C60.7086 230.347 37.5 192.096 37.5 150C37.5 127.559 43.9699 106.243 56.25 87.826V93.75C56.25 98.9319 60.4431 103.125 65.625 103.125C70.8069 103.125 75 98.9319 75 93.75V65.625C75 60.4431 70.8069 56.25 65.625 56.25H37.5C32.3181 56.25 28.125 60.4431 28.125 65.625C28.125 70.8069 32.3181 75 37.5 75H42.3901C26.964 97.0522 18.75 122.802 18.75 150C18.75 199.109 45.8221 243.732 89.4104 266.455C90.7928 267.178 92.276 267.517 93.7317 267.517C97.1191 267.517 100.378 265.686 102.054 262.473C104.443 257.886 102.667 252.228 98.0713 249.829Z" fill="#B87333" />
                      </svg>

                    </div>
                    <h4 className="fw-bold mb-0">Recycling Initiatives</h4>
                  </div>
                  <p>
                    We actively promote the recycling and repurposing of steel and other metals. By processing and grading scrap materials, we help reduce the need for virgin material extraction and minimize industrial waste.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1160_28)">
                        <path d="M259.808 252.204C309.084 199.303 313.621 118.235 270.238 60.2642V38.4129C270.238 34.9133 268.13 31.757 264.896 30.4181C261.662 29.0768 257.938 29.8184 255.464 32.2926L249.786 37.9712C196.857 -9.21504 117.368 -12.9641 60.2785 29.7589H33.7786C30.279 29.7589 27.1228 31.8669 25.7838 35.101C24.4448 38.3351 25.1841 42.0567 27.6583 44.5332L35.8225 52.6974C15.2461 76.849 2.74688 107.146 0.405419 138.901C-2.04819 172.194 6.72026 205.547 25.1246 233.143V266.219C25.1246 269.718 27.2326 272.875 30.4667 274.213C33.7008 275.552 37.4247 274.813 39.8989 272.337L50.2283 262.009C74.3799 283.515 104.981 296.735 137.299 299.466C141.518 299.823 145.736 299.999 149.943 299.999C179.519 299.999 208.585 291.27 233.164 274.873H261.584C265.084 274.873 268.24 272.765 269.579 269.531C270.918 266.296 270.179 262.573 267.705 260.098L259.808 252.204ZM243.841 56.1535C246.3 58.6117 249.866 59.2846 252.93 58.1654V85.5465H226.689C228.209 84.0267 229.687 82.5939 230.34 80.4676C231.271 77.4349 230.429 74.052 228.186 71.809C209.356 52.9789 184.373 41.5783 157.839 39.7038C137.052 38.2367 116.387 42.6587 98.2225 52.2831V38.4129C98.2225 34.8446 95.936 31.5465 92.592 30.3013C142.351 6.40841 203.373 15.6873 243.841 56.1535ZM219.633 212.026L211.915 204.308C209.438 201.834 205.717 201.093 202.483 202.434C199.248 203.773 197.14 206.929 197.14 210.429V230.474C163.403 250.263 120.442 246.597 90.4703 221.765L95.6865 216.547C98.163 214.073 98.9023 210.351 97.5633 207.117C96.2244 203.883 93.0681 201.772 89.5685 201.772H72.4344C50.075 168.406 51.7641 124.559 76.156 93.0286L83.4482 100.321C85.9247 102.795 89.6463 103.537 92.8804 102.198C96.1145 100.856 98.2225 97.7024 98.2225 94.2005V72.4201C132.326 49.6258 178.107 52.2122 209.539 78.2177L199.676 88.0825C197.202 90.5567 196.461 94.2783 197.8 97.5124C199.141 100.749 202.295 102.857 205.797 102.857H230.491C250.836 137.544 246.387 181.981 219.633 212.026ZM54.0117 58.3668C57.0101 55.2265 57.1886 50.4063 54.5817 47.0669H80.9145V73.4157C77.4309 70.7539 72.3474 71.175 69.3468 74.3679C36.5984 109.263 30.382 160.608 52.2791 201.775H33.7786C31.9064 201.775 30.041 202.4 28.551 203.533C7.35197 155.335 16.5736 97.5536 54.0117 58.3668ZM56.1701 243.827C52.8353 240.492 47.2666 240.492 43.9318 243.827L42.4326 245.324V219.083H69.8137C68.6968 222.148 69.3674 225.713 71.8256 228.172C89.8981 246.244 113.839 257.56 139.236 260.032C159.146 261.968 179.228 258.439 197.14 250.021V266.219C197.14 268.764 198.315 271.256 200.272 272.884C151.698 292.828 94.6771 282.332 56.1701 243.827ZM241.637 245.976C238.46 249.004 238.083 254.102 240.784 257.562H214.451V231.216C217.767 233.756 222.517 233.58 225.639 230.639C226.561 229.772 227.394 228.964 228.186 228.172C246.261 210.097 257.574 186.158 260.046 160.761C261.983 140.851 258.456 120.769 250.035 102.857H261.584C264.075 102.857 266.537 101.74 268.151 99.8378C269.636 98.0869 270.238 95.988 270.238 93.7221C293.442 143.268 283.999 203.67 243.841 243.827C243.12 244.548 242.379 245.271 241.637 245.976Z" fill="#B87333" />
                        <path d="M150.007 124.029H173.085C177.866 124.029 181.741 120.154 181.741 115.373C181.741 110.594 177.866 106.719 173.085 106.719H158.661V92.2946C158.661 87.5156 154.786 83.6406 150.007 83.6406C145.228 83.6406 141.353 87.5156 141.353 92.2946V107.927C128.05 111.706 118.275 123.956 118.275 138.453V149.991C118.275 154.77 122.15 158.645 126.929 158.645H164.431V161.531C164.431 169.485 157.961 175.955 150.007 175.955H126.929C122.15 175.955 118.275 179.83 118.275 184.609C118.275 189.388 122.15 193.263 126.929 193.263H141.353V207.688C141.353 212.469 145.228 216.342 150.007 216.342C154.786 216.342 158.661 212.469 158.661 207.688V192.055C171.966 188.278 181.741 176.029 181.741 161.531V149.991C181.741 145.212 177.866 141.337 173.085 141.337H135.583V138.453C135.583 130.5 142.053 124.029 150.007 124.029Z" fill="#B87333" />
                        </g>
                        <defs>
                        <clipPath id="clip0_1160_28">
                        <rect width="300" height="300" fill="white" />
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <h4 className="fw-bold mb-0">Circular Economy Contribution</h4>
                  </div>
                  <p>
                    Our business model supports the circular economy by ensuring that valuable metals are recovered, processed, and reintroduced into the manufacturing cycle. This approach helps conserve natural resources and reduce environmental impact.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1160_32)">
                        <path d="M291.841 45.0299C286.581 39.9533 279.657 37.2926 272.338 37.5615C265.328 37.8106 258.8 40.8076 253.957 46.0008C249.217 51.0826 246.607 57.7125 246.607 64.6693V99.6434C244.01 98.758 241.262 98.2693 238.433 98.219C231.108 98.0906 224.249 100.864 219.08 106.034L188.776 136.338C178.409 146.704 172.699 160.488 172.699 175.15V230.911H157.345V299.999H269.197V230.912H246.371V215.789L283.924 178.237C294.291 167.87 300 154.087 300 139.426V64.2404C300 56.9297 297.103 50.107 291.841 45.0299ZM251.619 248.49V282.421H174.923V248.49H251.619ZM271.494 165.807L228.793 208.508V230.911H190.277V175.15C190.277 165.183 194.158 155.814 201.205 148.768L231.51 118.464C233.276 116.697 235.644 115.747 238.12 115.794C240.616 115.838 242.932 116.873 244.641 118.709C247.942 122.253 247.7 128.064 244.101 131.663L213.688 162.076L226.117 174.505L256.53 144.093C261.45 139.173 264.293 132.639 264.534 125.694C264.598 123.868 264.477 122.066 264.185 120.309V64.6693C264.185 59.5799 268.122 55.3002 272.962 55.1279C275.466 55.0412 277.837 55.9447 279.633 57.6779C281.431 59.4129 282.421 61.7432 282.421 64.2404V139.426H282.422C282.422 149.391 278.541 158.76 271.494 165.807Z" fill="#B87333" />
                        <path d="M234.545 274.248C239.399 274.248 243.334 270.313 243.334 265.459C243.334 260.605 239.399 256.67 234.545 256.67C229.691 256.67 225.756 260.605 225.756 265.459C225.756 270.313 229.691 274.248 234.545 274.248Z" fill="#B87333" />
                        <path d="M127.301 230.912V175.15C127.301 160.489 121.591 146.705 111.224 136.339L80.9203 106.035C75.7512 100.866 68.8646 98.095 61.5674 98.2198C58.7373 98.2702 55.9898 98.7588 53.393 99.6442V64.6696C53.393 57.7127 50.7826 51.0829 46.043 46.001C41.1996 40.8079 34.6717 37.8102 27.6621 37.5618C20.3408 37.2911 13.4191 39.9536 8.15918 45.0301C2.89746 50.1073 0 56.9299 0 64.2407V139.426C0 154.087 5.70937 167.87 16.077 178.237L53.6291 215.789V230.912H30.8027V300H142.655V230.912H127.301ZM28.5059 165.808C21.4594 158.761 17.5781 149.391 17.5781 139.426V64.2407C17.5781 61.7434 18.5678 59.4131 20.366 57.6782C22.1619 55.945 24.5309 55.0303 27.0375 55.1282C31.8779 55.3004 35.8148 59.5807 35.8148 64.6696V120.309C35.523 122.066 35.4018 123.868 35.465 125.694C35.7064 132.639 38.5494 139.173 43.4689 144.092L73.882 174.505L86.3115 162.076L55.8984 131.663C52.299 128.064 52.057 122.253 55.3582 118.71C57.0674 116.874 59.383 115.839 61.8791 115.795C64.3582 115.744 66.7242 116.698 68.4902 118.464L98.7943 148.769C105.841 155.815 109.722 165.185 109.722 175.15V230.912H71.2066V208.509L28.5059 165.808ZM125.077 282.422H48.3809V248.49H125.077V282.422Z" fill="#B87333" />
                        <path d="M65.4551 274.248C70.3091 274.248 74.2441 270.313 74.2441 265.459C74.2441 260.605 70.3091 256.67 65.4551 256.67C60.601 256.67 56.666 260.605 56.666 265.459C56.666 270.313 60.601 274.248 65.4551 274.248Z" fill="#B87333" />
                        <path d="M149.999 0C116.947 0 90.0557 26.8916 90.0557 59.9449C90.0557 92.9982 116.947 119.889 149.999 119.889C183.053 119.889 209.944 92.9982 209.944 59.9449C209.944 26.8916 183.053 0 149.999 0ZM166.528 20.9367C173.03 23.7023 178.698 28.0541 183.06 33.4951C181.047 35.3168 178.995 36.4611 177.162 36.7148C176.295 36.8355 173.655 37.2006 169.251 33.6059C166.659 31.4912 166.058 28.1672 165.929 26.3736C165.797 24.5332 166.02 22.6529 166.528 20.9367ZM157.989 79.3148C152.856 85.9195 150.444 93.8584 150.877 102.288C150.584 102.294 150.293 102.311 149.999 102.311C126.639 102.311 107.634 83.3057 107.634 59.9449C107.634 48.7424 112.012 38.5494 119.137 30.9656C119.948 31.7227 120.504 32.523 120.701 33.283C120.98 34.3529 120.503 35.7012 119.282 37.2891C112.937 45.5455 111.912 52.7701 112.169 57.3773C112.515 63.5783 115.329 69.2824 120.091 73.4391C129.537 81.682 143.298 81.7084 151.421 73.4953C153.412 71.4814 155.844 73.2082 156.797 74.0449C157.972 75.075 159.688 77.1299 157.989 79.3148ZM168.536 98.0314C168.918 95.127 170.025 92.4744 171.87 90.1008C178.888 81.068 177.425 68.7586 168.391 60.8314C159.34 52.8908 146.948 53.0174 138.922 61.1355C137.447 62.6268 133.913 62.1709 131.65 60.1957C127.587 56.6496 130.89 51.0328 133.221 48.0006C137.786 42.0592 139.382 35.2588 137.712 28.8504C136.963 25.9752 135.571 23.2799 133.654 20.8617C138.463 18.842 143.724 17.6959 149.236 17.5975C148.457 20.8348 148.153 24.2338 148.396 27.6281C148.967 35.6039 152.426 42.5631 158.136 47.2236C165.032 52.851 171.459 54.348 176.344 54.348C177.514 54.348 178.597 54.2619 179.575 54.126C182.279 53.7516 186.454 52.643 191.065 49.5182C191.913 52.8551 192.366 56.3473 192.366 59.9443C192.366 76.6611 182.631 91.1438 168.536 98.0314Z" fill="#B87333" />
                        </g>
                        <defs>
                        <clipPath id="clip0_1160_32">
                        <rect width="300" height="300" fill="white" />
                        </clipPath>
                        </defs>
                        </svg>

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
      <section className="section-sm help-section mb-5">
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
    </>;
};
export default Services;
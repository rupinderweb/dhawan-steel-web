import { Link } from 'react-router-dom';
import { Calendar, Users, Search, Building, Factory, Download, Recycle, Globe, Settings, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const About = () => {
  const isMobile = useIsMobile();
  return <>
      {/* Page Header */}
      <section className="bg-copper text-white py-5">
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
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-copper">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Journey */}
      <section className="section">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-accent">Our Journey</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>From a single yard to becoming a trusted name in steel solutions across India</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img alt="Dhawan Ispat Udyog Facility" className="img-fluid rounded-4 shadow" style={{
                height: isMobile ? "400px" : "600px",
                width: '100%',
                objectFit: 'cover'
              }} src="/lovable-uploads/ae4cf5ac-6893-42cb-9ea8-c89ea04ce816.jpg" />
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
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="26" height="26" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1152_162" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_1152_162)">
                      <path d="M138.477 230.859H161.524M207.751 230.859H230.798M69.3362 230.859H92.3829M138.477 161.719H161.524M207.751 161.719H230.798M69.3362 161.719H92.3829M11.7192 103.906H288.415M219.274 69.3358V11.7188M80.8599 69.3358V11.7188M57.9462 288.281H242.188C267.718 288.281 288.415 267.585 288.415 242.054V80.993C288.415 55.4625 267.718 34.7655 242.188 34.7655H57.9462C32.4157 34.7655 11.7192 55.4625 11.7192 80.993V242.054C11.7192 267.585 32.4157 288.281 57.9462 288.281Z" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                    </div>
                    <h4 className="fw-bold mb-2 text-zinc-950">Established in 2008</h4>
                  </div>
                  <p>
                    Dhawan Ispat Udyog began with a single yard and a clear mission—to provide high-quality steel and metal solutions to industries across India. Our foundation was built on expertise, quality, and customer satisfaction.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="26" height="26" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1152_171)">
                      <path d="M150 291.211V176.993L79.3945 133.543L8.78906 176.993V291.211H291.211V176.993L220.605 133.543L150 176.993" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M185.156 291.211V220.898H256.055V291.211" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M185.156 256.055H256.055" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M43.9453 291.211V220.898H114.844V291.211" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M43.9453 256.055H114.844" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M194.238 149.769V8.78906H246.973V149.769" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M105.762 149.769V8.78906H53.0273V149.769" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M194.238 43.9453H246.973" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      <path d="M105.762 43.9453H53.0273" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1152_171">
                      <rect width="300" height="300" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>

                    </div>
                    <h4 className="fw-bold mb-2 text-zinc-950">Expanded to Two Yards</h4>
                  </div>
                  <p>
                    Over the years, we've grown significantly, expanding our operations to include two fully equipped yards with state-of-the-art processing facilities to better serve our customers across various industries.
                  </p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-0">
                    <div className="feature-icon me-3 bg-silver">
                    <svg width="26" height="26" viewBox="0 0 296 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M155.629 123.238C170.264 123.238 182.128 111.373 182.128 96.7379C182.128 82.1026 170.264 70.2383 155.629 70.2383C140.993 70.2383 129.129 82.1026 129.129 96.7379C129.129 111.373 140.993 123.238 155.629 123.238Z" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M236.345 64.7715L230.099 96.7373H186.106" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M82.8857 128.933C89.0041 100.187 112.671 77.1 143.475 73.1484" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M140.372 229.763C155.007 229.763 166.871 217.899 166.871 203.263C166.871 188.628 155.007 176.764 140.372 176.764C125.736 176.764 113.872 188.628 113.872 203.263C113.872 217.899 125.736 229.763 140.372 229.763Z" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M59.6553 235.229L65.9008 203.264H109.894" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M213.115 171.068C206.996 199.815 183.33 222.902 152.525 226.853" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M241.775 237.268L256.056 241.927L284.187 190.91L268.108 177.875C270.239 168.779 271.318 159.415 271.318 150C271.318 140.585 270.239 131.22 268.108 122.125L284.187 109.09L256.056 58.0729L236.31 64.5158C221.042 48.9563 202.036 37.7625 181.072 31.9822L177.284 11.7188H118.717L114.928 31.9816C93.9637 37.7619 74.9576 48.9557 59.6898 64.5152L39.9438 58.0723L11.8135 109.09L27.8916 122.125C25.7611 131.221 24.6818 140.585 24.6818 150C24.6818 159.415 25.7611 168.78 27.8916 177.875L11.8135 190.91L39.9438 241.927L59.6898 235.484C74.9576 251.044 93.9637 262.237 114.928 268.018L118.717 288.281H177.284L181.073 268.018C183.288 267.408 185.481 266.736 187.65 266.006" stroke="#B87333" stroke-width="23.4375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-2 text-zinc-950">Integration of Partap Iron & Steel</h4>
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
      <section className="section bg-light pt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-4 text-accent">Our Mission</h2>
              <div className={`${isMobile ? 'p-2' : 'p-5'} card border-0 shadow rounded-4`}>
                <div className="card-body">
                  <h3 className=" fw-bold mb-4">
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
      <section className="section pt-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-accent">Operational Highlights</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Our commitment to excellence is reflected in our operations</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto bg-silver mb-0">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M114.262 200.205L49.4339 265.033C40.135 274.332 25.0593 274.332 15.7603 265.033C6.4614 255.734 6.4614 240.658 15.7603 231.359L79.7171 167.402" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M252.76 117.028C251.283 67.6042 210.754 27.9922 160.973 27.9922C110.257 27.9922 69.1436 69.1055 69.1436 119.821C69.1436 170.537 110.257 211.65 160.973 211.65C163.975 211.65 166.943 211.506 169.87 211.224" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M215.885 107.655C210.326 82.447 187.852 63.5879 160.972 63.5879C129.916 63.5879 104.739 88.7645 104.739 119.821C104.739 150.877 129.916 176.054 160.972 176.054C164.666 176.054 168.277 175.698 171.772 175.018" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M222.275 211.425L201.864 265.315L180.79 252.322L156.397 248.094L178.939 188.58" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M222.137 211.426L242.548 265.316L263.621 252.323L288.014 248.095L264.585 186.238" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M222.206 211.425C250.998 211.425 274.339 188.085 274.339 159.293C274.339 130.501 250.998 107.16 222.206 107.16C193.414 107.16 170.073 130.501 170.073 159.293C170.073 188.085 193.414 211.425 222.206 211.425Z" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  <path d="M204.821 158.492L216.945 170.615L239.591 147.969" stroke="#000" stroke-width="17.5728" stroke-miterlimit="10"/>
                  </svg>

                  </div>
                  <h5 className="card-title fw-bold mt-4 mb-3 text-accent">Quality Control Teams</h5>
                  <p className="card-text">
                    Dedicated teams at both yards ensuring consistent quality in all our materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto bg-silver mb-0">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1152_99)">
                    <path d="M137.351 291.211H291.211V8.78906H91.6089V97.208" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M120.99 97.207V161.882L168.316 233.738C172.303 239.793 174.428 246.882 174.428 254.132C174.428 274.61 157.828 291.21 137.351 291.21H45.8667C25.3893 291.21 8.78906 274.61 8.78906 254.133C8.78906 246.884 10.9143 239.793 14.9016 233.739L62.2274 161.883V97.207H120.99Z" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M34.9365 203.721H148.281" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M115.047 247.669V230.09" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M68.1689 264.841V247.262" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M129.487 120.646H253.333" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M200.493 179.244H253.333" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M132.424 179.244H182.914" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M155.581 214.404H253.333" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M174.146 249.562H253.333" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M191.703 120.647V59.2285" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M226.861 120.647V41.6484" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    <path d="M156.544 120.646V76.8066" stroke="#000" stroke-width="17.5782" stroke-miterlimit="10"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1152_99">
                    <rect width="300" height="300" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>

                  </div>
                  <h5 className="card-title fw-bold mt-4 mb-3 text-accent">Chemical Analysis</h5>
                  <p className="card-text">
                    Advanced composition testing for precise material verification and grading.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto bg-silver mb-0">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1152_130)">
                    <path d="M62.5 271.768V300H237.5V271.768C276.736 243.594 300 198.605 300 150V143.988L299.844 143.863C297.025 74.176 246.457 16.5802 180.038 3.02429L180.005 2.98157L174.619 2.05688C174.612 2.05688 174.606 2.05688 174.6 2.05688C173.187 1.82495 171.762 1.61133 170.337 1.41907C169.989 1.37024 169.638 1.31226 169.293 1.26343L168.649 1.17493C168.268 1.1261 167.926 1.11389 167.545 1.06201C166.006 0.881958 164.456 0.726319 162.906 0.595093C162.75 0.579834 162.57 0.55542 162.418 0.543213C162.292 0.531006 162.183 0.537109 162.057 0.524902C158.075 0.20752 154.062 0 150 0C145.993 0 142.044 0.20752 138.12 0.512695C138.013 0.518798 137.906 0.518798 137.799 0.524902C137.65 0.537109 137.5 0.561523 137.35 0.567627C135.699 0.704956 134.058 0.869751 132.419 1.06201C132.062 1.10474 131.708 1.12 131.357 1.16882L130.688 1.26343C130.35 1.30615 130.011 1.37024 129.675 1.41296C128.244 1.60522 126.813 1.81274 125.394 2.05078C125.388 2.05078 125.388 2.05078 125.381 2.05078L119.989 2.97546L119.955 3.01819C53.537 16.5802 2.97546 74.176 0.15564 143.863L0 143.988V150C0 198.605 23.2635 243.594 62.5 271.768ZM137.5 237.5V212.5H162.5V237.5H187.5V212.5H212.5V275H87.5V212.5H112.5V237.5H137.5ZM162.5 187.5H137.5V175C137.5 168.106 143.106 162.5 150 162.5C156.894 162.5 162.5 168.106 162.5 175V187.5ZM187.5 187.5V175C187.5 154.318 170.682 137.5 150 137.5C129.318 137.5 112.5 154.318 112.5 175V187.5H62.5V239.301C59.613 236.475 56.8817 233.511 54.2938 230.444C53.4576 229.443 52.7191 228.375 51.9135 227.35C50.238 225.226 48.5565 223.105 47.0245 220.886C46.1426 219.608 45.3674 218.256 44.5312 216.943C43.2251 214.886 41.9067 212.839 40.7257 210.712C39.9139 209.25 39.2059 207.736 38.4552 206.25C37.4115 204.181 36.3678 202.112 35.437 199.988C34.7443 198.395 34.1431 196.762 33.5175 195.139C32.7057 193.03 31.9 190.924 31.2012 188.776C30.6488 187.082 30.1819 185.358 29.6997 183.636C29.0985 181.494 28.5248 179.337 28.0426 177.158C27.6489 175.381 27.3254 173.581 27.0111 171.78C26.6327 169.601 26.2817 167.407 26.0132 165.189C25.7874 163.342 25.6195 161.487 25.4761 159.625C25.3876 158.45 25.3571 157.269 25.2991 156.088C33.5999 150.226 51.6754 138.443 75.3387 128.632C75.2075 131.595 75 134.555 75 137.5V150H100V137.5C100 131.613 100.436 125.674 101.074 119.745C101.819 119.537 102.57 119.312 103.311 119.113C105.289 118.582 107.269 118.005 109.232 117.538C112.036 116.87 114.819 116.351 117.599 115.817C119.424 115.469 121.268 115.051 123.08 114.755C126.144 114.264 129.169 113.937 132.193 113.605C133.688 113.443 135.199 113.199 136.688 113.074C141.174 112.708 145.618 112.5 150 112.5C154.343 112.5 158.749 112.708 163.193 113.068C164.642 113.187 166.125 113.419 167.581 113.574C170.599 113.901 173.618 114.23 176.669 114.719C178.442 114.999 180.237 115.393 182.019 115.732C184.799 116.257 187.582 116.794 190.387 117.45C192.319 117.908 194.263 118.451 196.201 118.964C197.107 119.208 198.013 119.476 198.92 119.733C199.564 125.674 200 131.613 200 137.5V150H225V137.5C225 134.555 224.792 131.595 224.655 128.632C248.318 138.443 266.394 150.226 274.695 156.088C274.637 157.269 274.606 158.45 274.518 159.625C274.374 161.487 274.207 163.351 273.981 165.195C273.712 167.401 273.367 169.586 272.989 171.762C272.668 173.569 272.345 175.375 271.951 177.164C271.469 179.33 270.901 181.47 270.306 183.6C269.824 185.336 269.351 187.082 268.793 188.794C268.106 190.912 267.307 192.993 266.507 195.068C265.869 196.719 265.256 198.389 264.551 200.006C263.644 202.087 262.619 204.108 261.6 206.131C260.825 207.669 260.101 209.232 259.262 210.73C258.112 212.799 256.83 214.789 255.569 216.782C254.7 218.155 253.894 219.562 252.969 220.901C251.48 223.056 249.844 225.119 248.218 227.182C247.369 228.262 246.594 229.388 245.706 230.444C243.124 233.505 240.399 236.469 237.512 239.294V187.5H187.5ZM106 92.5812C113.364 64.3311 125.925 40.6311 134.937 26.001C135.449 25.9369 135.944 25.824 136.456 25.769C137.024 25.705 137.619 25.65 138.22 25.6012C142.105 25.2319 146.024 25 150 25C154.218 25 158.38 25.2258 162.494 25.6317C162.674 25.65 162.875 25.6683 163.062 25.6927C163.739 25.7629 164.386 25.9186 165.063 26.001C174.075 40.6189 186.636 64.325 194 92.5812C189.987 91.6748 186.014 90.9119 182.062 90.2496C181.451 90.1489 180.838 90.0818 180.225 89.9872C176.044 89.325 171.887 88.8184 167.749 88.4247C166.461 88.2996 165.176 88.1866 163.889 88.089C159.625 87.7747 155.362 87.5702 151.114 87.5427C150.745 87.5427 150.369 87.5 150 87.5C149.625 87.5 149.231 87.5427 148.856 87.5488C144.626 87.5763 140.387 87.7747 136.145 88.0951C134.845 88.1927 133.545 88.3057 132.239 88.4308C128.119 88.8184 123.981 89.325 119.824 89.9811C119.193 90.0818 118.57 90.1428 117.938 90.2496C113.98 90.9119 110.007 91.6748 106 92.5812ZM272.449 124.808C259.949 117.3 242.963 108.368 222.882 101.12L221.576 100.662L220.825 95.7947L220.432 95.8557C215.387 72.3999 206.9 51.4374 198.557 34.8175C235.944 50.6378 264.093 84.1553 272.449 124.808ZM101.443 34.8175C93.1 51.4374 84.6191 72.3999 79.5746 95.8557L79.187 95.7947L78.4576 100.5L77.124 100.937V101.114C57.0435 108.362 40.0574 117.294 27.5513 124.799C35.907 84.1553 64.0564 50.6439 101.443 34.8175Z" fill="#000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1152_130">
                    <rect width="300" height="300" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                  </div>
                  <h5 className="card-title fw-bold mt-4 mb-3 text-accent">Global Procurement</h5>
                  <p className="card-text">
                    Extensive network of domestic and international suppliers for diverse materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 rounded-4 text-center p-4">
                <div className="card-body">
                  <div className="feature-icon mx-auto bg-silver mb-0">
                  <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1152_133)">
                    <mask id="mask0_1152_133" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                    <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1152_133)">
                    <path d="M229.446 79.1016H271.793V35.1563" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M70.5889 220.898H28.1494V264.844" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M220.898 229.377V271.752H264.844" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M79.1016 70.5879V28.1397H35.1562" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M114.844 13.2197C126.08 10.3275 137.861 8.78946 150 8.78946C202.048 8.78946 247.491 37.065 271.807 79.0938" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M286.78 114.844C289.673 126.08 291.211 137.86 291.211 150C291.211 202.04 262.943 247.478 220.924 271.797" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M185.157 286.781C173.92 289.673 162.14 291.211 150 291.211C97.9422 291.211 52.491 262.924 28.1787 220.881" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M13.2199 185.156C10.3271 173.92 8.78906 162.139 8.78906 150C8.78906 97.94 37.0787 52.4877 79.1227 28.176" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M202.735 150C202.735 146.715 202.343 143.528 201.769 140.409L219.682 130.067L202.104 99.6205L184.053 110.041C179.217 105.915 173.69 102.667 167.579 100.495V79.6875H132.422V100.495C126.311 102.667 120.784 105.915 115.947 110.041L97.8965 99.6205L80.3184 130.067L98.2322 140.409C97.6574 143.528 97.266 146.715 97.266 150C97.266 153.285 97.6574 156.472 98.2322 159.591L80.3184 169.933L97.8965 200.379L115.947 189.959C120.784 194.085 126.311 197.333 132.422 199.505V220.312H167.579V199.505C173.69 197.333 179.217 194.085 184.053 189.959L202.104 200.379L219.682 169.933L201.769 159.591C202.343 156.472 202.735 153.285 202.735 150Z" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    <path d="M167.578 150C167.578 159.708 159.708 167.578 150 167.578C140.292 167.578 132.422 159.708 132.422 150C132.422 140.292 140.292 132.422 150 132.422C159.708 132.422 167.578 140.292 167.578 150Z" stroke="#000" stroke-width="17.5781" stroke-miterlimit="10"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_1152_133">
                    <rect width="300" height="300" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                  </div>
                  <h5 className="card-title fw-bold mt-4 mb-3 text-accent">Processing Capabilities</h5>
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
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Partap Iron & Steel Rolling Mills</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Excellence in steel manufacturing since 1997</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="position-relative">
                <img alt="Partap Iron & Steel Facility" className="img-fluid rounded-4 shadow" style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover'
              }} src="/lovable-uploads/4717eca1-c854-4c17-b365-67cccc5dff37.jpg" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pe-lg-4">
                <h4 className="fw-bold mb-4 text-accent">Specialized Steel Manufacturing</h4>
                <p>
                  Partap Iron & Steel Rolling Mills has been an integral part of our group since 1997, specializing in the manufacture of MS Bars & Angles at our facility in Khanna, Punjab.
                </p>
                <p className="mb-3">
                  Known for producing the thinnest angles in India, Partap has established itself as a trusted name in precision steel manufacturing, catering to a wide range of industries with specific requirements.
                </p>
                <div className="row g-3">
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
      <section className="section learn-more-section mt-4 mb-5">
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

    </>;
};
export default About;
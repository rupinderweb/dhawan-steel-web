import { Link } from 'react-router-dom';
import { Package, Download, Search, ArrowRight, Recycle, Anchor } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Products = () => {
  const isMobile = useIsMobile();
  return <>
      {/* Page Header */}
      <section className="bg-copper text-white py-5">
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
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-copper">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Ferrous Materials */}
      <section className="section">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Ferrous Materials</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Quality iron and steel materials for various industrial applications</p>
            </div>
          </div>
          
          <div className={`${isMobile ? 'g-2' : 'g-4'} row justify-content-center`}>
            <div className="col-md-6">
              <div className="card border-0 rounded-4 shadow-sm p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-3 text-center">
                    <div className="feature-icon mx-auto bg-silver bg-silver">
                    <svg width="36" height="36" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M289.735 198.591L276.891 154.847C275.829 150.824 273.483 147.257 270.208 144.69C266.934 142.123 262.911 140.696 258.75 140.625H222.938C223.173 138.048 222.941 135.45 222.253 132.956L209.4 89.2219C208.337 85.198 205.989 81.6314 202.713 79.0643C199.437 76.4973 195.412 75.0702 191.25 75H108.75C104.591 75.0701 100.569 76.4962 97.2946 79.0615C94.0203 81.6268 91.673 85.1911 90.6097 89.2125L77.7378 132.966C77.0525 135.457 76.8239 138.052 77.0629 140.625H41.2504C37.0921 140.694 33.0704 142.12 29.7973 144.686C26.5242 147.251 24.1792 150.816 23.1191 154.838L10.2566 198.591C9.31566 201.767 9.12396 205.118 9.69654 208.382C10.2691 211.645 11.5904 214.731 13.5566 217.397C15.2602 219.74 17.4913 221.649 20.0695 222.97C22.6476 224.29 25.5005 224.986 28.3972 225H136.622C139.148 224.974 141.642 224.424 143.945 223.384C146.247 222.345 148.309 220.839 150 218.963C151.691 220.839 153.753 222.345 156.056 223.384C158.359 224.424 160.852 224.974 163.378 225H271.603C274.5 224.986 277.353 224.29 279.931 222.97C282.509 221.649 284.74 219.74 286.444 217.397C288.411 214.731 289.733 211.645 290.304 208.381C290.875 205.118 290.68 201.766 289.735 198.591ZM95.7285 138.253L108.75 93.75H190.978L191.41 94.5L204.263 138.244C204.446 139.035 204.394 139.863 204.113 140.625H176.25H175.997H124.5C124.266 140.625 124.032 140.569 123.788 140.569H96.1691C95.9058 140.252 95.7273 139.873 95.6503 139.468C95.5732 139.063 95.6001 138.645 95.7285 138.253ZM150 182.372L143.25 159.375H156.76L150 182.372ZM136.622 206.25L28.7254 206.334C28.4355 206.002 28.2386 205.599 28.1547 205.166C28.0707 204.733 28.1026 204.285 28.2472 203.869L41.2504 159.375H123.497L123.928 160.125L136.772 203.869C136.95 204.661 136.898 205.487 136.622 206.25ZM271.622 206.25L163.725 206.334C163.434 206.003 163.235 205.6 163.15 205.167C163.064 204.734 163.095 204.286 163.238 203.869L176.25 159.375H258.469L258.9 160.125L271.744 203.869C271.923 204.66 271.874 205.485 271.603 206.25H271.622Z" fill="#B87333"/>
                      </svg>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">MS and Graded Ingots</h4>
                      <p className="card-text">
                      Semi-finished steel products in various dimensions, perfect for forging, rolling, and extrusion processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 rounded-4 shadow-sm p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-3 text-center">
                    <div className="feature-icon mx-auto bg-silver">
                    <svg width="36" height="36" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M271.875 37.5H103.125C88.125 37.5 75 50.625 75 65.625V75H65.625C50.625 75 37.5 88.125 37.5 103.125V112.5H28.125C13.125 112.5 0 125.625 0 140.625V234.375C0 249.375 13.125 262.5 28.125 262.5H196.875C211.875 262.5 225 249.375 225 234.375V225H234.375C249.375 225 262.5 211.875 262.5 196.875V187.5H271.875C286.875 187.5 300 174.375 300 159.375V65.625C300 50.625 286.875 37.5 271.875 37.5ZM18.75 234.375V140.625C18.75 135 22.5 131.25 28.125 131.25H71.25C61.875 146.25 56.25 166.875 56.25 187.5C56.25 208.125 61.875 228.75 71.25 243.75H28.125C22.5 243.75 18.75 240 18.75 234.375ZM131.25 131.25C142.5 142.5 150 165 150 187.5C150 210 142.5 232.5 131.25 243.75H93.75C82.5 232.5 75 210 75 187.5C75 165 82.5 142.5 93.75 131.25H131.25ZM206.25 234.375C206.25 240 202.5 243.75 196.875 243.75H153.75C163.125 228.75 168.75 208.125 168.75 187.5C168.75 166.875 163.125 146.25 153.75 131.25H196.875C202.5 131.25 206.25 135 206.25 140.625V234.375ZM243.75 196.875C243.75 202.5 240 206.25 234.375 206.25H225V140.625C225 125.625 211.875 112.5 196.875 112.5H56.25V103.125C56.25 97.5 60 93.75 65.625 93.75H234.375C240 93.75 243.75 97.5 243.75 103.125V196.875ZM281.25 159.375C281.25 165 277.5 168.75 271.875 168.75H262.5V103.125C262.5 88.125 249.375 75 234.375 75H93.75V65.625C93.75 60 97.5 56.25 103.125 56.25H271.875C277.5 56.25 281.25 60 281.25 65.625V159.375Z" fill="#B87333"/>
                      </svg>
                    </div>
                  </div>
                  <div className="col-9">
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
              <div className="card border-0 rounded-4 shadow-sm p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-3 text-center">
                    <div className="feature-icon mx-auto bg-silver">
                    <svg width="32" height="32" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1154_9)">
                      <mask id="mask0_1154_9" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M300 0H0V300H300V0Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_1154_9)">
                      <mask id="mask1_1154_9" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask1_1154_9)">
                      <path d="M291.211 126.562H8.78906V91.4063H291.211V126.562Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.9151 220.865L26.9526 126.563H273.046L255.084 220.865" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <path d="M79.6875 249.609H220.312" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <mask id="mask2_1154_9" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask2_1154_9)">
                      <path d="M44.5312 44.5313L62.1094 50.3906L79.6875 32.8125L97.2656 62.1094L91.4062 91.4062H26.9531L44.5312 44.5313Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <path d="M97.2656 62.1094L114.844 38.6719L138.281 50.3906L150 91.4062H91.4062L97.2656 62.1094Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <mask id="mask3_1154_9" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                      <path d="M0 3.05176e-05H300V300H0V3.05176e-05Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask3_1154_9)">
                      <path d="M210.452 45.3891L191.016 21.0938L161.719 26.9531L138.281 50.3906L150 91.4062H208.594" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M273.047 44.5313L249.609 50.3906L226.172 32.8125L196.875 56.25L208.594 91.4062H273.047V44.5313Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M278.906 249.609C278.906 265.789 265.789 278.906 249.609 278.906C233.429 278.906 220.312 265.789 220.312 249.609C220.312 233.429 233.429 220.313 249.609 220.313C265.789 220.313 278.906 233.429 278.906 249.609Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21.0938 249.609C21.0938 265.789 34.2105 278.906 50.3906 278.906C66.5707 278.906 79.6875 265.789 79.6875 249.609C79.6875 233.429 66.5707 220.313 50.3906 220.313C34.2105 220.313 21.0938 233.429 21.0938 249.609Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      </g>
                      </g>
                      <defs>
                      <clipPath id="clip0_1154_9">
                      <rect width="300" height="300" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>

                    </div>
                  </div>
                  <div className="col-9">
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
              <div className="card border-0 rounded-4 shadow-sm p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-3 text-center">
                    <div className="feature-icon mx-auto bg-silver">
                    <svg width="35" height="35" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1154_49)">
                      <path d="M150 74.6875V93.5154C165.581 93.5154 178.242 106.159 178.242 121.758C178.242 137.342 165.581 150 150 150C134.373 150 121.758 137.356 121.758 121.758" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M74.6875 215.899L150 140.586L178.242 168.828" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M206.484 197.07L225.312 215.899" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M291.211 215.898H8.78906V291.211H291.211V215.898Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M74.6875 215.898V291.211" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M225.312 215.898V291.211" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M150 74.6871C160.398 74.6871 168.828 66.2576 168.828 55.8592C168.828 45.4608 160.398 37.0312 150 37.0312C139.601 37.0312 131.172 45.4608 131.172 55.8592C131.172 66.2576 139.601 74.6871 150 74.6871Z" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M150 37.0313V8.78906" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M211.191 150V140.586" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M234.727 173.535H244.141" stroke="#B87333" stroke-width="17.5781" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1154_49">
                      <rect width="300" height="300" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="col-9">
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
            <div className="col-md-6">
              <div className="card border-0 rounded-4 shadow-sm p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-3 text-center">
                    <div className="feature-icon mx-auto bg-silver">
                    <svg width="34" height="34" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.8 133.199V248.999C88.8 257.399 71.4 264.599 50.4 264.599C29.4 264.599 12 257.999 12 248.999V133.199" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50.4 148.8C71.6077 148.8 88.8 141.815 88.8 133.2C88.8 124.584 71.6077 117.6 50.4 117.6C29.1923 117.6 12 124.584 12 133.2C12 141.815 29.1923 148.8 50.4 148.8Z" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.2002 262.8V146.4" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50.3999 264.599V148.799" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M69.6001 262.8V146.4" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M162.6 21L188.4 133.8C190.2 142.2 175.2 153 154.2 157.2C133.8 162 115.2 159 113.4 150.6L88.2002 37.8" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M128.859 44.571C149.537 39.8629 164.749 29.2364 162.836 20.8362C160.923 12.4359 142.61 9.44286 121.933 14.151C101.255 18.8591 86.0432 29.4855 87.9559 37.8858C89.8685 46.286 108.182 49.2791 128.859 44.571Z" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M135.6 159.599L109.8 46.7988" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M154.8 157.8L129 44.4004" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M172.8 151.2L147 38.4004" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M288 27.5996V143.4C288 151.8 270.6 159 249.6 159C228.6 159 211.2 151.8 211.2 143.4V27.5996" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M249.6 43.2C270.808 43.2 288 36.2156 288 27.6C288 18.9844 270.808 12 249.6 12C228.392 12 211.2 18.9844 211.2 27.6C211.2 36.2156 228.392 43.2 249.6 43.2Z" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M230.4 157.201V40.8008" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M249.6 158.999V43.1992" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M268.8 157.201V40.8008" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M257.4 254.4L146.4 288C138 290.4 126.6 276 120.6 255.6C114.6 235.2 116.4 216.6 124.2 214.2L235.2 180.6" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M231.992 221.789C238.121 242.085 249.773 256.519 258.018 254.029C266.264 251.54 267.979 233.068 261.85 212.772C255.721 192.476 244.068 178.042 235.823 180.532C227.578 183.022 225.863 201.493 231.992 221.789Z" stroke="#B87333" stroke-width="11.9962" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M117 236.399L228 202.799" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M120.6 255.6L231.6 222" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M128.4 273L239.4 239.4" stroke="#B87333" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="card-body">
                      <h4 className="card-title fw-bold mb-3">Low Alloy Steel Scrap
                      </h4>
                      <p className="card-text">
                      Specialized low alloy steel materials with varying compositions of chromium, nickel, and other elements for specific industrial applications.
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
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Non-Ferrous Materials</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Premium quality non-ferrous metals for specialized applications</p>
            </div>
          </div>
          
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-0 h-100">
                <div className="card-body text-center">
                  <div className="feature-icon mb-1 mx-auto bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1155_62)">
                      <path d="M240.86 39.7376H199.483V32.405C199.483 14.5369 184.947 0 167.078 0H132.921C115.053 0 100.516 14.5369 100.516 32.405V39.7376H59.1398C43.5142 39.7376 30.8013 52.4506 30.8013 68.0762V81.5524C30.8013 91.3844 35.8369 100.06 43.462 105.144V234.008C43.462 270.396 73.0664 300.001 109.456 300.001H190.545C226.934 300.001 256.538 270.396 256.538 234.008V105.144C264.163 100.06 269.199 91.3844 269.199 81.5519V68.0756C269.198 52.45 256.485 39.7376 240.86 39.7376ZM251.61 68.0762V81.5524C251.61 87.4798 246.787 92.3025 240.86 92.3025H223.285V57.3261H240.86C246.787 57.3261 251.61 62.1483 251.61 68.0762ZM205.697 57.3261V92.3025H94.3033V57.3261H205.697ZM118.105 32.405C118.105 24.2351 124.751 17.5885 132.922 17.5885H167.078C175.249 17.5885 181.895 24.2351 181.895 32.405V39.7376H118.105V32.405ZM48.3897 68.0762C48.3897 62.1488 53.2125 57.3261 59.1398 57.3261H76.7148V92.3025H59.1398C53.2125 92.3025 48.3897 87.4798 48.3897 81.5524V68.0762ZM81.3077 158.159C86.1645 158.159 90.102 154.222 90.102 149.365H101.873L108.514 160.866L108.193 161.078C104.139 163.753 103.021 169.208 105.695 173.262C107.387 175.824 110.187 177.214 113.044 177.214C114.498 177.214 115.967 176.853 117.311 176.105L124.86 189.18L118.273 200.587L117.878 200.326C113.825 197.651 108.369 198.769 105.695 202.823C103.02 206.877 104.138 212.332 108.192 215.007L109.464 215.846L101.872 228.995H90.0949C90.0293 224.194 86.1229 220.322 81.3066 220.322C76.4908 220.322 72.5844 224.194 72.5188 228.995H61.0499V149.365H72.5129C72.5135 154.222 76.4504 158.159 81.3077 158.159ZM190.544 282.412H109.455C87.1143 282.412 68.2694 267.194 62.7173 246.583H72.5129V247.273C72.5129 252.13 76.4504 256.068 81.3071 256.068C86.1639 256.068 90.1014 252.13 90.1014 247.273V246.583H106.949C110.091 246.583 112.995 244.907 114.565 242.186L124.201 225.497C125.466 226.144 126.83 226.461 128.182 226.461C131.039 226.461 133.84 225.071 135.531 222.509C138.205 218.455 137.087 213 133.033 210.325L132.98 210.29L142.629 193.576C144.201 190.855 144.201 187.503 142.629 184.782L132.029 166.421L133.033 165.759C137.087 163.084 138.205 157.629 135.531 153.575C132.855 149.521 127.4 148.403 123.347 151.078L123.219 151.163L114.565 136.173C112.993 133.452 110.091 131.776 106.949 131.776H90.1008V131.207C90.1008 126.35 86.1633 122.413 81.3066 122.413C76.4498 122.413 72.5123 126.35 72.5123 131.207V131.776H61.0493V109.89H238.948V234.007C238.949 260.697 217.235 282.412 190.544 282.412Z" fill="#B87333"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1155_62">
                      <rect width="300" height="300" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h4 className="card-title fw-bold mt-4 mb-3">Stainless Steel Scrap</h4>
                  <p className="card-text">
                    Various grades of stainless steel scrap, including 304, 316, and other specialized alloys, perfect for recycling and reuse in manufacturing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-0 h-100">
                <div className="card-body text-center">
                  <div className="feature-icon mb-1 mx-auto bg-silver">
                    <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1155_93)">
                      <path d="M270.691 12.1425C256.529 4.31247 237.89 0 218.209 0C198.528 0 179.889 4.31247 165.727 12.1425C159.258 15.7187 153.98 19.8753 150 24.4572C146.019 19.8753 140.742 15.7192 134.274 12.1425C120.111 4.31247 101.473 0 81.7917 0C62.1103 0 43.4715 4.31247 29.3093 12.1425C13.5016 20.8817 4.79639 33.0833 4.79639 46.4976V253.502C4.79639 266.917 13.5016 279.118 29.3099 287.857C43.4721 295.688 62.1108 300 81.7923 300C101.474 300 120.112 295.688 134.275 287.857C140.743 284.281 146.021 280.125 150.001 275.543C153.981 280.125 159.259 284.281 165.728 287.857C179.89 295.688 198.529 300 218.21 300C237.892 300 256.53 295.688 270.693 287.857C286.5 279.118 295.206 266.917 295.206 253.502V46.4976C295.204 33.0833 286.499 20.8817 270.691 12.1425ZM218.209 17.5732C253.227 17.5732 277.631 32.8168 277.631 46.4976C277.631 60.1783 253.227 75.4225 218.209 75.4225C183.191 75.4225 158.787 60.1789 158.787 46.4976C158.787 32.8162 183.191 17.5732 218.209 17.5732ZM241.801 132.789L230.141 158.666L238.453 177.115C232.24 178.271 225.452 178.925 218.208 178.925C183.19 178.925 158.786 163.681 158.786 150V76.4699C160.919 78.011 163.234 79.4755 165.727 80.8532C179.889 88.6832 198.528 92.9957 218.209 92.9957C224.634 92.9957 230.943 92.5283 237.026 91.6367L230.142 106.915L241.801 132.789ZM119.087 172.179L112.999 158.666L124.659 132.788L112.999 106.915L122.311 86.2499C126.562 84.6988 130.574 82.8993 134.274 80.8532C136.766 79.4755 139.081 78.011 141.214 76.4699V150C141.214 157.971 132.927 166.47 119.087 172.179ZM81.7917 17.5732C116.81 17.5732 141.213 32.8168 141.213 46.4976C141.213 60.1783 116.81 75.4225 81.7917 75.4225C46.7735 75.4225 22.3696 60.1789 22.3696 46.4976C22.3696 32.8162 46.7735 17.5732 81.7917 17.5732ZM22.3696 76.4699C24.5024 78.011 26.8174 79.4755 29.3099 80.8532C43.4721 88.6832 62.1108 92.9957 81.7923 92.9957C88.217 92.9957 94.5258 92.5283 100.609 91.6367L93.7245 106.915L105.385 132.789L93.7239 158.666L102.037 177.115C95.8233 178.271 89.0354 178.925 81.7917 178.925C46.7735 178.925 22.3696 163.681 22.3696 150V76.4699ZM22.3696 253.502V179.972C24.5024 181.513 26.8174 182.978 29.3099 184.355C34.7353 187.355 40.8226 189.834 47.3693 191.756L38.9365 210.607L50.5957 236.673L38.937 262.74L44.776 275.795C30.7678 270.087 22.3696 261.526 22.3696 253.502ZM81.7917 282.427C76.4441 282.427 71.3456 282.069 66.5416 281.419L58.1873 262.74L69.8472 236.672L58.1879 210.607L64.9841 195.414C70.4441 196.123 76.071 196.498 81.7917 196.498C101.473 196.498 120.111 192.185 134.274 184.355C136.766 182.978 139.081 181.513 141.214 179.972V253.502C141.214 267.183 116.81 282.427 81.7917 282.427ZM158.787 253.502V179.972C160.92 181.513 163.235 182.978 165.727 184.355C171.153 187.355 177.24 189.834 183.787 191.756L175.354 210.607L187.014 236.673L175.354 262.74L181.193 275.795C167.185 270.086 158.787 261.526 158.787 253.502ZM218.209 282.427C212.862 282.427 207.763 282.069 202.959 281.419L194.605 262.74L206.265 236.672L194.605 210.607L201.401 195.414C206.861 196.123 212.488 196.498 218.209 196.498C237.89 196.498 256.529 192.185 270.691 184.355C273.183 182.978 275.498 181.513 277.631 179.972V253.502C277.631 267.183 253.227 282.427 218.209 282.427ZM255.504 172.179L249.416 158.666L261.075 132.788L249.416 106.915L258.728 86.2499C262.979 84.6988 266.991 82.8993 270.691 80.8532C273.183 79.4755 275.498 78.011 277.631 76.4699V150C277.631 157.971 269.345 166.471 255.504 172.179Z" fill="#B87333"/>
                      <path d="M201.69 37.7109H234.728V55.2842H201.69V37.7109Z" fill="#B87333"/>
                      <path d="M65.2729 37.7109H98.31V55.2842H65.2729V37.7109Z" fill="#B87333"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1155_93">
                      <rect width="300" height="300" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
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
      <section className="section pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Steel Grades Supplied</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Specialized steel grades for diverse industrial requirements</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-header bg-copper text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">Low Alloy Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> EN8
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> EN19
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> EN24
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> Other specialized grades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-header bg-copper text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">Tool Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> H13
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> D2
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> D3
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> Other specialized grades
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-header bg-copper text-white py-3 rounded-top-4">
                  <h4 className="mb-0 text-center fw-bold">PH Stainless Steel</h4>
                </div>
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> 17-4 PH
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> 15-5 PH
                      </div>
                    </li>
                    <li className="py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> 13-8 PH
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span> Other specialized grades
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
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-3">Finished Products</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Quality finished steel products from the Partap Iron & Steel Rolling Mills</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img alt="Finished Steel Products" className="img-fluid rounded-4 shadow" style={{
              height: '430px',
              width: '100%',
              objectFit: 'cover'
            }} src="/lovable-uploads/3841a2d4-1980-4be4-a198-15e3c5257c2e.jpg" />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-3">Mild Steel Bars & Angles</h3>
                <p>
                  Our sister concern, the Partap Iron & Steel Rolling Mills, manufactures high-quality MS Bars & Angles at our facility in Khanna, Punjab. With over two decades of experience, we've perfected the art of producing steel products that meet rigorous industry standards.
                </p>
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Available Products:</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">MS Round Bars</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">MS Square Bars</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">MS Angles</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Thin Sections</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Graded Bars and Angles</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="fw-bold mb-3">Key Features:</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Precision Engineering</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Consistent Quality</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
                        <p className="mb-0">Thinnest Angles in India</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-copper">✓</span>
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
      {/* <section className="section pt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="card border-0 rounded-4 shadow-sm py-5 px-4">
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
      </section> */}

      {/* Call to Action */}
      <section className="section-sm help-section  mb-5">
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
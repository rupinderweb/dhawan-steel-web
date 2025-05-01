
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import ImageZoom from '@/components/ImageZoom';

const Gallery = () => {
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Function to handle image click
  const handleImageClick = (src: string, alt: string) => {
    console.log("Image clicked:", src, alt);
    setSelectedImage({ src, alt });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-copper text-white py-5">
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
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-copper">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Facility Images */}
      <section className="section">
        <div className="container">
          <div className={`${isMobile ? 'mb-4' : 'mb-5'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Facilities</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>State-of-the-art yards and processing equipment</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e", 
                  "Processing Yard"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                  className="card-img-top rounded-4" 
                  alt="Processing Yard"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1518770660439-4636190af475", 
                  "Quality Control Lab"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  className="card-img-top rounded-4" 
                  alt="Quality Control Lab"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace", 
                  "Storage Yard"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                  className="card-img-top rounded-4" 
                  alt="Storage Yard"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Processing Equipment"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Processing Equipment"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1486718448742-163732cd1544", 
                  "Rolling Mill"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                  className="card-img-top rounded-4" 
                  alt="Rolling Mill"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", 
                  "Logistics Fleet"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  className="card-img-top rounded-4" 
                  alt="Logistics Fleet"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-4' : 'mb-5'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Our Products</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Quality materials for diverse industrial applications</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Replace all the product image sections with updated onClick handlers */}
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "MS Ingots"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="MS Ingots"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Repeat the pattern for all other product images with updated onClick */}
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Steel Billets"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Steel Billets"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "MS Scrap"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="MS Scrap"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Stainless Steel Scrap"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Stainless Steel Scrap"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "MS Angles"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="MS Angles"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "MS Round Bars"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="MS Round Bars"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Aluminium Scrap"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Aluminium Scrap"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Ship Breaking Materials"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Ship Breaking Materials"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work in Action */}
      <section className="section pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-4' : 'mb-5'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Work in Action</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Our processes and operations in motion</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Update onClick handlers for Work in Action images */}
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Rolling Process"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Rolling Process"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Torch Cutting"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Torch Cutting"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Forging Process"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Forging Process"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Efforts */}
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-4' : 'mb-5'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Sustainability Efforts</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Our commitment to environmental responsibility</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Update onClick handlers for Sustainability images */}
            <div className="col-md-6 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Recycling Operations"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Recycling Operations"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="col-md-6 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={() => handleImageClick(
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
                  "Environmental Compliance"
                )}>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  className="card-img-top rounded-4" 
                  alt="Environmental Compliance"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-sm help-section mt-3 mb-5">
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

      {/* Image Zoom Dialog */}
      {selectedImage && (
        <ImageZoom 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          open={!!selectedImage} 
          onOpenChange={(open) => {
            if (!open) setSelectedImage(null);
          }} 
        />
      )}
    </>
  );
};

export default Gallery;

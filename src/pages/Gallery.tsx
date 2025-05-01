import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import ImageZoom from '@/components/ImageZoom';

const Gallery = () => {
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Function to handle image click
  const handleImageClick = (imageElement: HTMLImageElement) => {
    if (!imageElement) return;
    
    console.log("Image clicked:", imageElement.src, imageElement.alt);
    setSelectedImage({
      src: imageElement.src,
      alt: imageElement.alt
    });
  };

  return <>
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
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Processing Yard" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/3a11db6c-7dc7-4786-87bf-b517f44cb7e3.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Quality Control Lab" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/c5985d3b-46d7-464d-971f-deaf79b31e62.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Storage Yard" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/3eef3d40-523c-4573-840d-4be9e5ea37c5.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Processing Equipment" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/fd77ddd9-f605-4aa9-919c-ae411aa535d8.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Rolling Mill" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/10d47e38-b78b-4ac3-b08b-1e9193c7bdfb.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Logistics Fleet" style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
              }} src="/lovable-uploads/04d0f857-1018-4a98-92e1-9dff16a1afc0.jpg" />
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
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="MS Ingots" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/e18e9435-e3df-4b30-86af-5215fe6ead1e.jpg" />
              </div>
            </div>
            
            {/* Repeat the pattern for all other product images with updated onClick */}
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Steel Billets" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/e94862e8-f057-4cba-a658-1592648e385c.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="MS Scrap" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/fe4a62b2-a0f3-460b-867b-544b698d9711.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Stainless Steel Scrap" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/0e3b6497-e602-47b9-b933-098d825e9135.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="MS Angles" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/63a2d2ac-f63e-41e9-8ecb-1fa12a960996.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="MS Round Bars" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/6500f27c-2b60-41dc-8c94-f299e1c5d7a6.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Aluminium Scrap" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/76ab16d7-51eb-4adf-b346-aefea9f14b79.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Ship Breaking Materials" style={{
                height: '300px',
                objectFit: 'cover'
              }} src="/lovable-uploads/662f92b2-45c0-40eb-a3ea-411e35392bbb.jpg" />
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
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Rolling Process" style={{
                height: '320px',
                objectFit: 'cover'
              }} src="/lovable-uploads/4f07f0a0-052e-4142-9fa0-49a9ba09d284.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Torch Cutting" style={{
                height: '320px',
                objectFit: 'cover'
              }} src="/lovable-uploads/34718182-b84b-413b-8e29-c8507d609348.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Forging Process" style={{
                height: '320px',
                objectFit: 'cover'
              }} src="/lovable-uploads/a443f1e9-3173-4f57-8ab6-a6091978d22f.jpg" />
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
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Recycling Operations" style={{
                height: '320px',
                objectFit: 'cover'
              }} src="/lovable-uploads/5201650a-7e76-4ae8-8479-d6403dace31f.jpg" />
              </div>
            </div>
            
            <div className="col-md-6 mt-0">
              <div className="card border-0 rounded-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow" 
                onClick={(e) => handleImageClick(e.currentTarget.querySelector('img'))}>
                <img className="card-img-top rounded-4" alt="Environmental Compliance" style={{
                height: '320px',
                objectFit: 'cover'
              }} src="/lovable-uploads/7b3608e5-7641-4bca-a955-001d86074f5e.jpg" />
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
      {selectedImage && <ImageZoom 
        src={selectedImage.src} 
        alt={selectedImage.alt} 
        open={!!selectedImage} 
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }} 
      />}
    </>;
};
export default Gallery;

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
const Contact = () => {
  const isMobile = useIsMobile();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-copper text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-3">Contact Us</h1>
              <p className="lead mb-0">Get in touch with our team for inquiries and support</p>
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
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Get In Touch</h2>
              <p className={`${isMobile ? '' : 'lead'} mb-4`}>
                Have questions about our products or services? Our team is here to help you find the right solutions for your business needs.
              </p>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <div className="feature-icon text-copper bg-silver">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="mb-0">
                    Main Yard: Dhawan Ispat Udyog, Punjab, India<br />
                    Second Yard: Khanna, Punjab, India
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <div className="feature-icon text-copper bg-silver">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone</h5>
                  <p className="mb-0">+91 XXXXXXXXXX</p>
                  <p className="mb-0">+91 XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <div className="feature-icon text-copper bg-silver">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <p className="mb-0">info@dhawanispat.com</p>
                  <p className="mb-0">sales@dhawanispat.com</p>
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <div className="feature-icon text-copper bg-silver">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Business Hours</h5>
                  <p className="mb-0">Monday–Saturday: 9 AM–6 PM</p>
                  <p className="mb-0">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="card border-0 rounded-4 shadow p-4">
                <div className={` ${isMobile ? 'p-0' : ''} card-body`}>
                  <h3 className="fw-bold mb-4">Send Us a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="alert alert-success p-4 text-center">
                      <i className="bi bi-check-circle fs-1 d-block mb-3"></i>
                      <h4 className="fw-bold">Thank You!</h4>
                      <p className="mb-0">Your message has been sent successfully. We'll get back to you shortly.</p>
                      <button 
                        className="btn btn-primary mt-3"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email Address *</label>
                          <input 
                            type="email" 
                            className="form-control form-control-lg" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <input 
                            type="tel" 
                            className="form-control form-control-lg" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                          <select 
                            className="form-select form-select-md" 
                            id="inquiryType" 
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>Select type</option>
                            <option value="Products">Products</option>
                            <option value="Services">Services</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">Message *</label>
                          <textarea 
                            className="form-control" 
                            id="message" 
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button 
                            type="submit" 
                            className="btn btn-primary btn-lg px-5 mt-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message <ArrowRight size={18} className="ms-2" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light pt-2">
        <div className="container">
          <div className={`${isMobile ? 'mb-3' : 'mb-4'} row`}>
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="fw-bold mb-3">Find Us</h2>
              <p className={`${isMobile ? '' : 'lead'} `}>Visit our facilities to see our operations firsthand</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="card border-0 rounded-4 shadow overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.961933115939!2d76.28935013231091!3d30.664272303408453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101b6e5da6d547%3A0x3c422d140dd80f53!2sDHAWAN%20ISPAT%20UDYOG!5e0!3m2!1sen!2sin!4v1746081346033!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section help-section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="fw-bold mb-4">Explore More About Us</h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/about" className="btn btn-light">
                  About Our Company
                </Link>
                <Link to="/products" className="btn btn-light">
                  View Our Products
                </Link>
                <Link to="/services" className="btn btn-light">
                  Discover Our Services
                </Link>
                <Link to="/gallery" className="btn btn-light">
                  Browse Our Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

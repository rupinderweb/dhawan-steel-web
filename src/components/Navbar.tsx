
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-midnight-blue/95 to-copper/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link className="text-white text-xl font-bold" to="/">
            Dhawan Ispat Udyog
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-white/90 hover:text-white transition-colors" to="/">Home</Link>
            <Link className="text-white/90 hover:text-white transition-colors" to="/about">About</Link>
            <Link className="text-white/90 hover:text-white transition-colors" to="/products">Products</Link>
            <Link className="text-white/90 hover:text-white transition-colors" to="/services">Services</Link>
            <Link className="text-white/90 hover:text-white transition-colors" to="/gallery">Gallery</Link>
            <Link className="text-white/90 hover:text-white transition-colors" to="/contact">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center text-white">
              <Phone size={18} className="mr-2" />
              <span>+91 98XXX XXXXX</span>
            </div>
            <Link 
              to="/contact" 
              className="bg-copper text-white px-4 py-2 rounded-full hover:bg-copper/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

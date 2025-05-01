
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav style={{
      backgroundColor: 'var(--midnight-blue)',
      padding: '0.5rem 0',
      marginTop: 0,
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }} className="navbar navbar-expand-lg navbar-dark bg-zinc-950">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Dhawan Ispat Udyog
        </Link>
        
        {isMobile ? (
          <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <CollapsibleTrigger asChild>
              <button 
                className="navbar-toggler border border-white/20" 
                type="button"
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <span className="navbar-toggler-icon"></span>
                )}
              </button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="absolute top-full left-0 right-0 bg-zinc-950 mt-2 p-4 shadow-lg rounded-b-lg border-t border-white/10">
              <ul className="navbar-nav w-full text-center flex flex-col gap-3">
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/') ? 'active text-copper font-bold' : 'text-white'}`} to="/">Home</Link>
                </li>
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/about') ? 'active text-copper font-bold' : 'text-white'}`} to="/about">About</Link>
                </li>
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/products') ? 'active text-copper font-bold' : 'text-white'}`} to="/products">Products</Link>
                </li>
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/services') ? 'active text-copper font-bold' : 'text-white'}`} to="/services">Services</Link>
                </li>
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/gallery') ? 'active text-copper font-bold' : 'text-white'}`} to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item py-2">
                  <Link className={`nav-link px-3 text-lg ${isActive('/contact') ? 'active text-copper font-bold' : 'text-white'}`} to="/contact">Contact</Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav lg:ms-5 text-center">
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/') ? 'active text-copper font-bold' : 'text-white'}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/about') ? 'active text-copper font-bold' : 'text-white'}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/products') ? 'active text-copper font-bold' : 'text-white'}`} to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/services') ? 'active text-copper font-bold' : 'text-white'}`} to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/gallery') ? 'active text-copper font-bold' : 'text-white'}`} to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 ${isActive('/contact') ? 'active text-copper font-bold' : 'text-white'}`} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

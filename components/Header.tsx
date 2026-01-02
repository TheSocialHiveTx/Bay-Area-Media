
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg h-16' : 'bg-white h-20 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-900 tracking-tighter group">
              BAY GROUP <span className="text-slate-400 font-light group-hover:text-indigo-500 transition-colors">MEDIA</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-slate-50 ${
              isActive('/') ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-900'
            }`}>Home</Link>
            
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`flex items-center text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 transform scale-100 hover:scale-[1.03] hover:bg-indigo-50/50 ${
                  location.pathname.startsWith('/services') ? 'text-indigo-600 bg-indigo-50/30' : 'text-slate-600 hover:text-indigo-900'
                }`}
              >
                Services
                <svg className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-64 bg-white border border-slate-100 rounded-b-xl shadow-2xl py-3 z-50 animate-reveal">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="block px-5 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-slate-50 mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/our-magazines" className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-slate-50 ${
              isActive('/our-magazines') ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-900'
            }`}>Our Magazines</Link>
            
            <Link to="/contact" className="ml-4 px-6 py-2.5 bg-indigo-900 text-white rounded-full hover:bg-indigo-800 hover:shadow-indigo-900/20 hover:shadow-xl transition-all text-sm font-bold active:scale-95">
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-indigo-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-6 space-y-4 shadow-xl animate-reveal">
          <Link to="/" className="block text-lg font-semibold text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="space-y-3">
            <Link to="/services" className="text-indigo-900 font-black text-xs uppercase tracking-widest block" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="block pl-4 text-slate-600 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          <Link to="/our-magazines" className="block text-lg font-semibold text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Our Magazines</Link>
          <Link to="/contact" className="block py-4 text-center bg-indigo-900 text-white rounded-2xl font-bold shadow-lg shadow-indigo-900/20" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

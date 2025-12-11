import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLink = ({ id, label }: { id: string, label: string }) => (
    <button
      onClick={() => handleNav(id)}
      className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-bold
        ${activePage === id ? 'text-hot-pink' : 'text-white hover:text-hot-pink'}`}
      style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
    >
      {label}
      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-hot-pink transition-all duration-300
        ${activePage === id ? 'opacity-100' : 'opacity-0'}`} 
      />
    </button>
  );

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/98 backdrop-blur-md py-3 md:py-4 shadow-lg' 
          : 'bg-black/50 backdrop-blur-md py-4 md:py-6 border-b border-white/10'}`}>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo - slightly smaller on mobile */}
            <div 
              className="flex-shrink-0 cursor-pointer z-50"
              onClick={() => handleNav('home')}
            >
              <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300
                ${isScrolled ? 'text-charcoal' : 'text-white'}`}
                style={!isScrolled ? { textShadow: '2px 2px 6px rgba(0,0,0,0.8)' } : {}}
              >
                MBJ<span className="text-hot-pink">.</span>
              </h1>
            </div>

            {/* Desktop Center Nav */}
            <div className={`hidden md:flex space-x-12 ${isScrolled ? 'text-nav-scrolled' : ''}`}>
              {isScrolled ? (
                <>
                  <button
                    onClick={() => handleNav('home')}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-bold
                      ${activePage === 'home' ? 'text-hot-pink' : 'text-charcoal hover:text-hot-pink'}`}
                  >
                    Home
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-hot-pink transition-all duration-300
                      ${activePage === 'home' ? 'opacity-100' : 'opacity-0'}`} 
                    />
                  </button>
                  <button
                    onClick={() => handleNav('shop')}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-bold
                      ${activePage === 'shop' ? 'text-hot-pink' : 'text-charcoal hover:text-hot-pink'}`}
                  >
                    Shop
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-hot-pink transition-all duration-300
                      ${activePage === 'shop' ? 'opacity-100' : 'opacity-0'}`} 
                    />
                  </button>
                  <button
                    onClick={() => handleNav('about')}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-bold
                      ${activePage === 'about' ? 'text-hot-pink' : 'text-charcoal hover:text-hot-pink'}`}
                  >
                    About
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-hot-pink transition-all duration-300
                      ${activePage === 'about' ? 'opacity-100' : 'opacity-0'}`} 
                    />
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-bold
                      ${activePage === 'contact' ? 'text-hot-pink' : 'text-charcoal hover:text-hot-pink'}`}
                  >
                    Contact
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-hot-pink transition-all duration-300
                      ${activePage === 'contact' ? 'opacity-100' : 'opacity-0'}`} 
                    />
                  </button>
                </>
              ) : (
                <>
                  <NavLink id="home" label="Home" />
                  <NavLink id="shop" label="Shop" />
                  <NavLink id="about" label="About" />
                  <NavLink id="contact" label="Contact" />
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleNav('shop')}
                className={`hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-colors
                  ${isScrolled ? 'text-charcoal hover:text-hot-pink' : 'text-white hover:text-hot-pink'}`}
                style={!isScrolled ? { textShadow: '1px 1px 3px rgba(0,0,0,0.5)' } : {}}
              >
                <span>Bag</span>
                <span className="w-1.5 h-1.5 bg-hot-pink rounded-full"></span>
                <span>(0)</span>
              </button>

              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden transition-colors p-2 ${isScrolled ? 'text-charcoal hover:text-hot-pink' : 'text-white hover:text-hot-pink'}`}
                style={!isScrolled ? { filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.8))' } : {}}
              >
                <Menu size={26} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Premium Design */}
      <div className={`fixed inset-0 z-[60] bg-gradient-to-br from-blush via-white to-blush transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 py-6 border-b border-stone-200">
          <span className="font-serif text-2xl font-bold tracking-widest text-charcoal">MBJ<span className="text-hot-pink">.</span></span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-charcoal hover:text-hot-pink transition-colors p-2 rounded-full hover:bg-hot-pink/10"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-2 px-6">
          {[
            { id: 'home', label: 'Home' },
            { id: 'shop', label: 'Shop' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-center py-4 px-8 rounded-2xl font-serif text-3xl transition-all duration-300
                ${activePage === item.id 
                  ? 'bg-hot-pink text-white shadow-lg scale-105' 
                  : 'text-charcoal hover:bg-white hover:shadow-md hover:scale-105'
                }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Bag indicator in mobile menu */}
          <div className="pt-8 mt-4 border-t border-stone-200 w-full">
            <button 
              onClick={() => handleNav('shop')}
              className="w-full py-4 px-8 rounded-2xl bg-white text-charcoal hover:bg-hot-pink hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-md text-sm uppercase tracking-widest font-bold"
            >
              <ShoppingBag size={18} />
              Shopping Bag (0)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

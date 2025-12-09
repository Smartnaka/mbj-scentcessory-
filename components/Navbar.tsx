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
      className={`text-sm uppercase tracking-widest transition-all duration-300 relative py-2 font-medium
        ${activePage === id ? 'text-hot-pink' : 'text-charcoal hover:text-hot-pink'}`}
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
          ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-6'}`}>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer z-50"
              onClick={() => handleNav('home')}
            >
              <h1 className="font-serif text-3xl font-bold tracking-widest text-charcoal">
                MBJ<span className="text-hot-pink">.</span>
              </h1>
            </div>

            {/* Desktop Center Nav */}
            <div className="hidden md:flex space-x-12">
              <NavLink id="home" label="Home" />
              <NavLink id="shop" label="Shop" />
              <NavLink id="about" label="About" />
              <NavLink id="contact" label="Contact" />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleNav('shop')}
                className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal hover:text-hot-pink transition-colors"
              >
                <span>Bag</span>
                <span className="w-1.5 h-1.5 bg-hot-pink rounded-full"></span>
                <span>(0)</span>
              </button>

              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-charcoal hover:text-hot-pink transition-colors"
              >
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-blush transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 py-8">
          <span className="font-serif text-2xl font-bold tracking-widest text-charcoal">MBJ.</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-charcoal hover:text-hot-pink transition-colors"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-[80vh] space-y-8">
          {['Home', 'Shop', 'About', 'Contact'].map((item, idx) => (
            <button
              key={item}
              onClick={() => handleNav(item.toLowerCase())}
              className="font-serif text-4xl text-charcoal hover:text-hot-pink transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
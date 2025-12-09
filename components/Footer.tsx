import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-charcoal border-t border-stone-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          
          <div className="max-w-sm">
            <h2 className="font-serif text-3xl font-bold mb-6">MBJ<span className="text-hot-pink">.</span></h2>
            <p className="font-light leading-relaxed text-sm text-stone-500">
              Indulge in luxury scents and elegant accessories. Designed for the modern woman.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24">
             <div className="flex flex-col gap-4">
                <h4 className="text-hot-pink text-xs uppercase tracking-widest font-bold">Shop</h4>
                <a href="#" className="text-xs hover:text-hot-pink transition-colors">Perfumes</a>
                <a href="#" className="text-xs hover:text-hot-pink transition-colors">Jewelry</a>
             </div>
             <div className="flex flex-col gap-4">
                <h4 className="text-hot-pink text-xs uppercase tracking-widest font-bold">Follow</h4>
                <a href="#" className="text-xs hover:text-hot-pink transition-colors">Instagram</a>
                <a href="#" className="text-xs hover:text-hot-pink transition-colors">TikTok</a>
             </div>
          </div>

        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-400">
          <p>&copy; {new Date().getFullYear()} MBJ Scentcessory.</p>
          <p>Made with Love & Luxury.</p>
        </div>
      </div>
    </footer>
  );
};
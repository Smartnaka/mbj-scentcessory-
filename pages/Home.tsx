import React from 'react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Star, Heart } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  
  // High-quality hero image
  const heroImage = "https://i.postimg.cc/zDRtMF65/unnamed-6.jpg";

  return (
    <div className="w-full bg-luxury-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-blush">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury Perfume and Jewelry" 
            className="w-full h-full object-cover animate-fade-in"
            loading="eager"
            onError={(e) => {
              console.error('Image failed to load');
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl animate-slide-up">
              {/* Badge with better contrast */}
              <span className="inline-block px-5 py-2 mb-8 border-2 border-hot-pink text-hot-pink text-[11px] font-bold uppercase tracking-[0.25em] rounded-full bg-white shadow-lg">
                New Collection 2024
              </span>
              
              {/* Title with text shadow and white color */}
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
                Indulge in <br/>
                <span className="italic text-hot-pink" style={{textShadow: '2px 2px 12px rgba(255,105,180,0.6)'}}>Luxury Scents</span>
              </h1>
              
              {/* Description with better background */}
              <div className="bg-white/95 backdrop-blur-sm px-6 py-5 rounded-2xl mb-10 max-w-xl shadow-xl">
                <p className="text-charcoal text-base md:text-lg font-light leading-relaxed">
                  Where femininity meets premium fragrance and timeless jewelry. Discover the essence of elegance.
                </p>
              </div>
              
              {/* Button with enhanced styling */}
              <button 
                onClick={() => setPage('shop')}
                className="group bg-hot-pink text-white px-12 py-5 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-pink-600 transition-all duration-300 shadow-2xl hover:shadow-soft-pink flex items-center gap-3 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Curated Favorites</h2>
           <div className="w-24 h-1 bg-hot-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {featuredProducts.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>
        
        <div className="mt-16 text-center">
            <button 
              onClick={() => setPage('shop')}
              className="text-hot-pink uppercase tracking-widest text-xs font-bold border-b border-hot-pink pb-1 hover:text-charcoal hover:border-charcoal transition-all"
            >
                View Full Collection
            </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blush py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
           <Heart className="w-8 h-8 text-hot-pink mx-auto mb-8 animate-pulse" fill="currentColor" />
           <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12">Loved by Our Community</h2>
           
           <div className="grid md:grid-cols-3 gap-8">
             {TESTIMONIALS.map(t => (
               <div key={t.id} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-soft-pink transition-all">
                  <div className="flex justify-center gap-1 mb-4 text-hot-pink">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-600 italic font-light mb-6 text-sm leading-relaxed">"{t.text}"</p>
                  <h4 className="font-serif text-charcoal font-bold text-sm">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">{t.location}</span>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

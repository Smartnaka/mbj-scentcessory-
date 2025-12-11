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
          <div className="absolute inset-0 bg-gradient-to-r from-soft-pink/40 to-transparent mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-xl animate-slide-up">
              <span className="inline-block px-4 py-1 mb-6 border border-hot-pink text-hot-pink text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-white/80 backdrop-blur-sm">
                New Collection 2024
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight mb-6 drop-shadow-sm">
                Indulge in <br/>
                <span className="italic text-hot-pink">Luxury Scents</span>
              </h1>
              <p className="text-stone-700 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed drop-shadow-sm">
                Where femininity meets premium fragrance and timeless jewelry. Discover the essence of elegance.
              </p>
              <button 
                onClick={() => setPage('shop')}
                className="group bg-hot-pink text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-soft-pink flex items-center gap-3"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

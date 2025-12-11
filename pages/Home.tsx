import React from 'react';
import { PRODUCTS, TESTIMONIALS, WHATSAPP_NUMBER } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Star, Heart, MessageCircle } from 'lucide-react';

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
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-blush">
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
          {/* Enhanced overlay for mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 md:bg-gradient-to-r md:from-black/60 md:via-black/40 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
            <div className="max-w-2xl animate-slide-up">
              {/* Badge - more compact on mobile */}
              <span className="inline-block px-4 py-2 md:px-5 md:py-2 mb-6 md:mb-8 border-2 border-hot-pink text-hot-pink text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                New Collection 2025
              </span>
              
              {/* Title - adjusted sizing for mobile */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] md:leading-tight mb-5 md:mb-6" style={{textShadow: '2px 2px 12px rgba(0,0,0,0.8)'}}>
                Indulge in <br/>
                <span className="italic text-hot-pink block mt-1" style={{textShadow: '2px 2px 16px rgba(255,105,180,0.8), 0 0 30px rgba(255,105,180,0.4)'}}>Luxury Scents</span>
              </h1>
              
              {/* Description - improved mobile padding and sizing */}
              <div className="bg-white backdrop-blur-md px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-2xl mb-8 md:mb-10 max-w-xl shadow-2xl">
                <p className="text-charcoal text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Where femininity meets premium fragrance and timeless jewelry. Discover the essence of elegance.
                </p>
              </div>
              
              {/* Button - full width on mobile, auto on desktop */}
              <button 
                onClick={() => setPage('shop')}
                className="group bg-gradient-to-r from-hot-pink to-pink-500 text-white w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-full uppercase tracking-widest text-xs md:text-sm font-bold hover:from-pink-500 hover:to-hot-pink transition-all duration-300 shadow-2xl hover:shadow-hot-pink/50 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* WhatsApp CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-hot-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-pink/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-hot-pink to-pink-500 text-white rounded-3xl p-12 md:p-16 shadow-2xl">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Order via WhatsApp</h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized recommendations, ask questions, and place your order directly through WhatsApp. We're here to help you find your perfect scent and jewelry!
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to know more about your luxury collection.')}`, '_blank')}
              className="bg-white text-hot-pink px-10 py-4 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-stone-100 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 hover:scale-105"
            >
              <MessageCircle size={20} />
              Chat with Us Now
            </button>
            <p className="text-white/70 text-sm mt-6">Fast responses • Personalized service • Secure ordering</p>
          </div>
        </div>
      </section>
    </div>
  );
};

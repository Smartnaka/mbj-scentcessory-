import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { ShoppingBag, Loader2 } from 'lucide-react';
import { generateImage } from '../utils/genai';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchImage = async () => {
      // Check if we have a cached version or need to generate
      const cacheKey = `img_cache_prod_${product.id}`;
      
      const prompt = `Professional luxury product photography of ${product.name}, ${product.description}. 
      Style: Minimalist, high-end, soft pink and rose gold color palette, soft lighting, photorealistic, 4k resolution. 
      The product should be the central focus on a clean background.`;
      
      // Pass cacheKey to the generator
      const generated = await generateImage(prompt, cacheKey);
      
      if (mounted) {
        if (generated) {
          setImageSrc(generated);
        } else {
          setImageSrc(product.image); // Fallback
        }
        setLoading(false);
      }
    };

    fetchImage();
    return () => { mounted = false; };
  }, [product]);

  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `I would like to order the ${product.name} (Price: ₦${product.price.toLocaleString()})`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-soft-pink transition-shadow duration-500">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-blush flex items-center justify-center">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-soft-pink/20 animate-pulse">
             <Loader2 className="w-8 h-8 text-hot-pink animate-spin mb-2" />
             <span className="text-[10px] uppercase tracking-widest text-hot-pink">Designing...</span>
          </div>
        ) : (
          <img
            src={imageSrc || product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 animate-fade-in"
          />
        )}
        
        {/* Floating Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full z-10">
           <span className="text-[10px] uppercase tracking-widest text-charcoal font-medium">
             {product.category}
           </span>
        </div>
      </div>
      
      {/* Details */}
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <h3 className="font-serif text-xl text-charcoal mb-2">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm font-light mb-4 line-clamp-1">
           {product.description}
        </p>
        <span className="font-sans text-lg text-hot-pink font-medium mb-6">
          ₦{product.price.toLocaleString()}
        </span>

        <button
          onClick={handleOrder}
          className="w-full mt-auto bg-hot-pink text-white py-3 rounded-full uppercase tracking-widest text-xs font-medium hover:bg-pink-400 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { Instagram, MessageCircle } from 'lucide-react';
import { generateImage } from '../utils/genai';

export const Contact: React.FC = () => {
  const [contactImage, setContactImage] = useState<string | null>(null);
  
  const FALLBACK_CONTACT = "https://images.unsplash.com/photo-1522335789203-abd1c91f167b?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    const fetchImage = async () => {
      const prompt = "A clean, minimal, luxury desk setup with fresh pink flowers, soft lighting, elegant vibe, photorealistic.";
      const generated = await generateImage(prompt, 'contact-image-v1');
      if (generated) {
        setContactImage(generated);
      } else {
        setContactImage(FALLBACK_CONTACT);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="w-full min-h-screen bg-luxury-white pt-32 pb-24 px-6 md:px-12">
       <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-soft-pink overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Info Side */}
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
             <span className="text-hot-pink uppercase tracking-widest text-xs font-bold block mb-4">Get in Touch</span>
             <h1 className="font-serif text-5xl text-charcoal mb-8">Hello, Beautiful.</h1>
             <p className="text-stone-500 mb-12 font-light leading-relaxed">
               Have a question about a scent? Need help choosing the perfect gift? We are here to help via WhatsApp or Email.
             </p>

             <div className="space-y-6">
                <button 
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                  className="w-full bg-hot-pink text-white py-4 rounded-full uppercase tracking-widest text-xs font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
                
                <div className="flex gap-4 justify-center pt-8">
                   <a href="#" className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-hot-pink hover:bg-hot-pink hover:text-white transition-all">
                      <Instagram size={20} />
                   </a>
                   {/* TikTok Icon placeholder */}
                   <a href="#" className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-hot-pink hover:bg-hot-pink hover:text-white transition-all">
                      <span className="font-bold text-xs">TT</span>
                   </a>
                </div>
             </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative bg-blush flex items-center justify-center overflow-hidden">
             {contactImage ? (
                <img 
                  src={contactImage}
                  className="w-full h-full object-cover opacity-80 animate-fade-in"
                  alt="Contact"
                />
             ) : (
                <div className="w-full h-full bg-soft-pink/30 animate-pulse"></div>
             )}
             <div className="absolute inset-0 bg-hot-pink/10 mix-blend-overlay"></div>
          </div>

       </div>
    </div>
  );
};
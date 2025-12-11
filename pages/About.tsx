import React from 'react';

export const About: React.FC = () => {
  const aboutImage = "https://images.unsplash.com/photo-1596918833989-13e55164998d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <div className="w-full bg-luxury-white pt-24">
      
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
        <span className="text-hot-pink uppercase tracking-widest text-xs font-bold block mb-8">Our Story</span>
        <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-10">Elegance & <br/> <span className="italic text-hot-pink">Emotion</span></h1>
        <p className="text-stone-600 font-light text-xl leading-relaxed">
          MBJ Scentcessory was born from a simple desire: to make every woman feel radiant. We believe that a scent is a memory waiting to be made, and jewelry is the sparkle that lights up your story.
        </p>
      </section>

      {/* Visual Story */}
      <section className="grid md:grid-cols-2 w-full">
        <div className="relative h-[60vh] md:h-[80vh] bg-blush flex items-center justify-center overflow-hidden">
          <img 
            src={aboutImage} 
            alt="Pink Flowers and Luxury"
            className="w-full h-full object-cover animate-fade-in" 
          />
          <div className="absolute inset-0 bg-hot-pink/10 mix-blend-overlay"></div>
        </div>
        <div className="bg-blush flex flex-col justify-center p-12 md:p-24">
           <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">For the Modern Muse</h3>
           <p className="text-stone-600 font-light text-lg leading-8 mb-8">
             Our collection is carefully curated for the woman who knows her worth. Whether it's the lingering note of our blush peony perfume or the subtle glint of a rose gold necklace, every piece is chosen to empower.
           </p>
           <div className="w-16 h-1 bg-hot-pink rounded-full" />
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 text-center bg-white">
         <h2 className="font-serif text-3xl italic text-charcoal mb-4">MBJ.</h2>
         <p className="text-xs uppercase tracking-widest text-stone-400">Est. 2024</p>
      </section>

    </div>
  );
};

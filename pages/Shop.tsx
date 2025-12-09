import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">The Collection</h1>
          <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto">
             Explore our handpicked selection of premium perfumes and exquisite jewelry.
          </p>
        </div>

        {/* Pill Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {['All', Category.PERFUME, Category.JEWELRY].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category | 'All')}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border
                ${filter === cat 
                  ? 'bg-hot-pink text-white border-hot-pink shadow-soft-pink' 
                  : 'bg-white text-stone-500 border-stone-200 hover:border-hot-pink hover:text-hot-pink'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-stone-400 font-light italic text-xl">No items found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
import { Category, Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "2348012345678"; // Replace with actual number

export const PRODUCTS: Product[] = [
  // Perfumes
  {
    id: 'p1',
    name: 'Blush Peony',
    price: 45000,
    category: Category.PERFUME,
    image: 'https://i.postimg.cc/7Yb1DyQY/download-5.png',
    description: 'A romantic blend of peony petals and soft musk.',
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Rose & Gold',
    price: 38000,
    category: Category.PERFUME,
    image: 'https://i.postimg.cc/50nvdPBH/download-4.png',
    description: 'Elegant floral notes with a hint of spicy vanilla.',
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Velvet Orchid',
    price: 42000,
    category: Category.PERFUME,
    image: 'https://i.postimg.cc/tCL6jnxM/download.png',
    description: 'Sophisticated orchid notes with a touch of amber.',
    isFeatured: false
  },
  {
    id: 'p4',
    name: 'Pink Essence',
    price: 50000,
    category: Category.PERFUME,
    image: 'https://i.postimg.cc/7Yb1DyQY/download-5.png',
    description: 'Rich fruit tones blended with sweet jasmine.',
    isFeatured: false
  },
  // Jewelry
  {
    id: 'j1',
    name: 'Rose Heart',
    price: 85000,
    category: Category.JEWELRY,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: '18k rose gold plated necklace with a delicate heart.',
    isFeatured: true
  },
  {
    id: 'j2',
    name: 'Blush Earrings',
    price: 60000,
    category: Category.JEWELRY,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Classic crystal cut stones set in rose gold.',
    isFeatured: true
  },
  {
    id: 'j3',
    name: 'Pink Pearl',
    price: 45000,
    category: Category.JEWELRY,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba731f6e1bd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'A timeless statement piece with a pink hue.',
    isFeatured: false
  },
  {
    id: 'j4',
    name: 'Diamond Rose',
    price: 120000,
    category: Category.JEWELRY,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: 'Elegance personified with simulated diamonds.',
    isFeatured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Amina B.',
    location: 'Lagos',
    text: "The Blush Peony is absolutely captivating. It feels so feminine and lasts all day."
  },
  {
    id: 't2',
    name: 'Chinedu O.',
    location: 'Abuja',
    text: "Ordered a rose gold set for my wife. She loved the pink packaging and the quality."
  },
  {
    id: 't3',
    name: 'Sarah K.',
    location: 'Port Harcourt',
    text: "Seamless ordering process via WhatsApp. The jewelry is even more beautiful in person."
  }
];

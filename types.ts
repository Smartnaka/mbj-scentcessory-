export enum Category {
  PERFUME = 'Perfume',
  JEWELRY = 'Jewelry'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}
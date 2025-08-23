export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Customer {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}
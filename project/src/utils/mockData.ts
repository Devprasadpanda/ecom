import { Product, Customer, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: "Men's Collection",
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=men'
  },
  {
    id: '2',
    name: "Women's Collection",
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=women'
  },
  {
    id: '3',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=accessories'
  },
  {
    id: '4',
    name: 'T-Shirts',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=tshirts'
  },
  {
    id: '5',
    name: 'Hoodies',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=hoodies'
  },
  {
    id: '6',
    name: 'Sneakers',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    link: '/products?category=sneakers'
  }
];

export const products: Product[] = [
  // T-Shirts Collection
  {
    id: '1',
    name: 'Minimalist Urban Tee',
    price: 39,
    originalPrice: 49,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'A high-quality, 100% organic cotton tee designed for modern city life. Breathable, durable, and effortlessly stylish.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'White', 'Navy', 'Grey'],
    isNew: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Essential Cotton Crew',
    price: 35,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic crew neck tee made from premium cotton blend. Perfect for layering or wearing solo.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy'],
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Vintage Wash Tee',
    price: 42,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Soft vintage-washed cotton tee with a lived-in feel. Comfortable and stylish for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Faded Black', 'Stone Grey', 'Vintage White'],
    isNew: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Organic Hemp Blend Tee',
    price: 45,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Sustainable hemp-cotton blend tee. Naturally antimicrobial and incredibly soft.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Natural', 'Charcoal', 'Forest Green'],
    rating: 4.9,
    reviews: 73
  },
  {
    id: '5',
    name: 'Crew Neck Sweatshirt',
    price: 69,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Cozy and comfortable sweatshirt perfect for casual days. Made from premium cotton fleece.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Navy', 'Black', 'Cream'],
    isNew: true,
    rating: 4.5,
    reviews: 91
  },

  // Backpacks Collection
  {
    id: '6',
    name: 'Minimalist Backpack',
    price: 89,
    category: 'backpacks',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Sleek and functional backpack perfect for urban exploration and daily commutes. Water-resistant material.',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'Tan', 'Grey'],
    isNew: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: '7',
    name: 'Tech Commuter Pack',
    price: 125,
    category: 'backpacks',
    images: [
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Professional backpack with dedicated laptop compartment and organizational pockets. TSA-friendly design.',
    sizes: ['One Size'],
    colors: ['Charcoal', 'Navy', 'Black'],
    rating: 4.8,
    reviews: 142
  },
  {
    id: '8',
    name: 'Canvas Daypack',
    price: 75,
    category: 'backpacks',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Durable canvas backpack with vintage-inspired design. Perfect for weekend adventures.',
    sizes: ['One Size'],
    colors: ['Khaki', 'Navy', 'Olive'],
    rating: 4.6,
    reviews: 98
  },
  {
    id: '9',
    name: 'Leather Laptop Bag',
    price: 159,
    category: 'backpacks',
    images: [
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Premium leather laptop bag with sophisticated design. Handcrafted with attention to detail.',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Cognac'],
    rating: 4.9,
    reviews: 67
  },

  // Sneakers Collection
  {
    id: '10',
    name: 'Urban Sneakers',
    price: 129,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Comfortable and stylish sneakers designed for the modern urbanite. Premium materials and cushioned sole.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Grey', 'Navy'],
    rating: 4.7,
    reviews: 203
  },
  {
    id: '11',
    name: 'Eco Runner',
    price: 145,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Sustainable running shoes made from recycled materials. Lightweight and breathable design.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Forest Green', 'Ocean Blue', 'Stone Grey'],
    isNew: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: '12',
    name: 'Classic Court Shoe',
    price: 95,
    originalPrice: 120,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Timeless court-inspired sneaker with clean lines and premium leather construction.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Cream'],
    rating: 4.6,
    reviews: 178
  },
  {
    id: '13',
    name: 'High-Top Canvas',
    price: 85,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic high-top canvas sneaker with vintage appeal. Durable construction and comfortable fit.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Navy', 'Red'],
    rating: 4.4,
    reviews: 156
  },

  // Accessories Collection
  {
    id: '14',
    name: 'Classic Watch',
    price: 199,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Timeless design meets modern functionality in this elegant timepiece. Water-resistant with sapphire crystal.',
    sizes: ['One Size'],
    colors: ['Silver', 'Gold', 'Black', 'Rose Gold'],
    rating: 4.6,
    reviews: 156
  },
  {
    id: '15',
    name: 'Leather Wallet',
    price: 79,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Premium leather wallet with RFID protection and multiple card slots. Handcrafted with attention to detail.',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan', 'Navy'],
    rating: 4.8,
    reviews: 67
  },
  {
    id: '16',
    name: 'Minimalist Belt',
    price: 65,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Clean, minimalist leather belt with brushed metal buckle. Versatile design for any occasion.',
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Black', 'Brown', 'Cognac'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: '17',
    name: 'Wool Beanie',
    price: 35,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Soft merino wool beanie perfect for cold weather. Classic fit with subtle branding.',
    sizes: ['One Size'],
    colors: ['Charcoal', 'Navy', 'Cream', 'Forest Green'],
    rating: 4.5,
    reviews: 112
  },

  // Hoodies Collection
  {
    id: '18',
    name: 'Essential Hoodie',
    price: 89,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Premium cotton fleece hoodie with adjustable drawstring hood. Perfect for layering or solo wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Black', 'Navy', 'Cream'],
    rating: 4.7,
    reviews: 198
  },
  {
    id: '19',
    name: 'Zip-Up Hoodie',
    price: 95,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Full-zip hoodie with kangaroo pocket and ribbed cuffs. Comfortable and versatile design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Black', 'Olive'],
    rating: 4.6,
    reviews: 145
  },
  {
    id: '20',
    name: 'Oversized Hoodie',
    price: 105,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Relaxed fit oversized hoodie with dropped shoulders. Contemporary streetwear aesthetic.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Stone', 'Black', 'Sage Green'],
    isNew: true,
    rating: 4.8,
    reviews: 76
  },

  // Jeans Collection
  {
    id: '21',
    name: 'Slim Fit Jeans',
    price: 119,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic slim fit jeans with stretch denim for comfort and mobility. Timeless five-pocket design.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Indigo', 'Medium Wash', 'Black'],
    rating: 4.5,
    reviews: 234
  },
  {
    id: '22',
    name: 'Straight Leg Jeans',
    price: 109,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Relaxed straight leg jeans with classic fit. Made from premium denim with subtle fading.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Light Wash', 'Medium Wash', 'Dark Wash'],
    rating: 4.4,
    reviews: 187
  },
  {
    id: '23',
    name: 'Raw Denim Jeans',
    price: 149,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Selvedge raw denim jeans that age beautifully with wear. Traditional construction and premium materials.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Raw Indigo', 'Black'],
    rating: 4.9,
    reviews: 98
  },

  // Additional Products for Variety
  {
    id: '24',
    name: 'Merino Wool Sweater',
    price: 135,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Luxurious merino wool sweater with ribbed collar and cuffs. Temperature regulating and odor resistant.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Cream', 'Forest'],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '25',
    name: 'Canvas Tote Bag',
    price: 45,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Durable canvas tote bag perfect for shopping or daily essentials. Reinforced handles and spacious interior.',
    sizes: ['One Size'],
    colors: ['Natural', 'Black', 'Navy'],
    rating: 4.3,
    reviews: 156
  },
  {
    id: '26',
    name: 'Performance Polo',
    price: 65,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Moisture-wicking polo shirt with UPF 50+ sun protection. Perfect for active lifestyles.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Grey', 'Black'],
    rating: 4.6,
    reviews: 123
  },
  {
    id: '27',
    name: 'Chino Pants',
    price: 89,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic chino pants with tailored fit. Versatile design suitable for casual and business casual wear.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Stone'],
    rating: 4.5,
    reviews: 167
  },
  {
    id: '28',
    name: 'Leather Sneakers',
    price: 165,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Premium leather sneakers with minimalist design. Handcrafted with Italian leather and rubber sole.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Tan'],
    rating: 4.9,
    reviews: 145
  },
  {
    id: '29',
    name: 'Crossbody Bag',
    price: 95,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Compact crossbody bag with adjustable strap. Perfect for hands-free convenience and urban exploration.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Navy'],
    rating: 4.7,
    reviews: 98
  },
  {
    id: '30',
    name: 'Bomber Jacket',
    price: 159,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic bomber jacket with ribbed collar and cuffs. Water-resistant fabric with modern fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive', 'Burgundy'],
    isNew: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: '31',
    name: 'Denim Jacket',
    price: 125,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Timeless denim jacket with classic styling. Made from premium denim with vintage-inspired details.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Light Wash', 'Medium Wash', 'Dark Wash'],
    rating: 4.6,
    reviews: 178
  },
  {
    id: '32',
    name: 'Sunglasses',
    price: 125,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic aviator sunglasses with UV protection. Lightweight titanium frame with polarized lenses.',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Black'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: '33',
    name: 'Track Pants',
    price: 75,
    category: 'jeans',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Comfortable track pants with tapered fit. Perfect for workouts or casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey', 'Olive'],
    rating: 4.4,
    reviews: 156
  },
  {
    id: '34',
    name: 'Baseball Cap',
    price: 39,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic six-panel baseball cap with adjustable strap. Embroidered logo and curved brim.',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'White', 'Grey'],
    rating: 4.5,
    reviews: 234
  },
  {
    id: '35',
    name: 'Long Sleeve Tee',
    price: 49,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Essential long sleeve tee made from soft cotton blend. Perfect for layering or standalone wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Grey', 'Navy'],
    rating: 4.6,
    reviews: 167
  },
  {
    id: '36',
    name: 'Hiking Boots',
    price: 189,
    category: 'sneakers',
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Durable hiking boots with waterproof construction. Excellent traction and ankle support for outdoor adventures.',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Brown', 'Black', 'Tan'],
    rating: 4.8,
    reviews: 123
  },
  {
    id: '37',
    name: 'Messenger Bag',
    price: 115,
    category: 'backpacks',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Professional messenger bag with laptop compartment. Water-resistant canvas with leather accents.',
    sizes: ['One Size'],
    colors: ['Charcoal', 'Navy', 'Olive'],
    rating: 4.7,
    reviews: 145
  },
  {
    id: '38',
    name: 'Cardigan Sweater',
    price: 119,
    category: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Elegant cardigan sweater with button closure. Made from soft merino wool blend.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Cream', 'Camel'],
    rating: 4.8,
    reviews: 98
  },
  {
    id: '39',
    name: 'Scarf',
    price: 55,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Soft cashmere blend scarf with fringe details. Lightweight and warm for transitional weather.',
    sizes: ['One Size'],
    colors: ['Charcoal', 'Navy', 'Cream', 'Burgundy'],
    rating: 4.6,
    reviews: 134
  },
  {
    id: '40',
    name: 'Henley Shirt',
    price: 59,
    category: 'tshirts',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ],
    description: 'Classic henley shirt with three-button placket. Made from premium cotton with vintage-inspired styling.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Grey', 'Navy', 'Black'],
    rating: 4.7,
    reviews: 189
  }
];

export const customers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    quote: 'The quality is exceptional and the style is exactly what I was looking for. Highly recommend!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Chen',
    quote: 'Fast shipping and amazing customer service. The products exceeded my expectations.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Davis',
    quote: 'Love the minimalist design and sustainable approach. My new favorite brand!',
    rating: 5
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    quote: 'Perfect fit and incredible comfort. The attention to detail is remarkable.',
    rating: 5
  },
  {
    id: '5',
    name: 'Jessica Kim',
    quote: 'Stylish, sustainable, and high-quality. Everything I want in a fashion brand.',
    rating: 5
  }
];
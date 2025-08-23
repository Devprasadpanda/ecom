// Products Database
const products = [
    // T-Shirts Collection
    {
        id: 1,
        name: "Minimalist Urban Tee",
        category: "men",
        price: 39.99,
        originalPrice: 49.99,
        imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "A high-quality, 100% organic cotton tee designed for modern city life. Breathable, durable, and effortlessly stylish.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Charcoal", "White", "Navy", "Grey"],
        isNew: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "Essential Cotton Crew",
        category: "men",
        price: 35.99,
        imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic crew neck tee made from premium cotton blend. Perfect for layering or wearing solo.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Grey", "Navy"],
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        name: "Vintage Wash Tee",
        category: "women",
        price: 42.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Soft vintage-washed cotton tee with a lived-in feel. Comfortable and stylish for everyday wear.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Faded Black", "Stone Grey", "Vintage White"],
        isNew: true,
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Organic Hemp Blend Tee",
        category: "women",
        price: 45.99,
        imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Sustainable hemp-cotton blend tee. Naturally antimicrobial and incredibly soft.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Natural", "Charcoal", "Forest Green"],
        rating: 4.9,
        reviews: 73
    },
    {
        id: 5,
        name: "Performance Polo",
        category: "men",
        price: 65.99,
        imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Moisture-wicking polo shirt with UPF 50+ sun protection. Perfect for active lifestyles.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Navy", "Grey", "Black"],
        rating: 4.6,
        reviews: 123
    },

    // Backpacks Collection
    {
        id: 6,
        name: "Minimalist Backpack",
        category: "accessories",
        price: 89.99,
        imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Sleek and functional backpack perfect for urban exploration and daily commutes. Water-resistant material.",
        sizes: ["One Size"],
        colors: ["Black", "Navy", "Tan", "Grey"],
        isNew: true,
        rating: 4.9,
        reviews: 87
    },
    {
        id: 7,
        name: "Tech Commuter Pack",
        category: "accessories",
        price: 125.99,
        imageUrl: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Professional backpack with dedicated laptop compartment and organizational pockets. TSA-friendly design.",
        sizes: ["One Size"],
        colors: ["Charcoal", "Navy", "Black"],
        rating: 4.8,
        reviews: 142
    },
    {
        id: 8,
        name: "Canvas Daypack",
        category: "accessories",
        price: 75.99,
        imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Durable canvas backpack with vintage-inspired design. Perfect for weekend adventures.",
        sizes: ["One Size"],
        colors: ["Khaki", "Navy", "Olive"],
        rating: 4.6,
        reviews: 98
    },
    {
        id: 9,
        name: "Leather Laptop Bag",
        category: "accessories",
        price: 159.99,
        imageUrl: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium leather laptop bag with sophisticated design. Handcrafted with attention to detail.",
        sizes: ["One Size"],
        colors: ["Brown", "Black", "Cognac"],
        rating: 4.9,
        reviews: 67
    },

    // Sneakers Collection
    {
        id: 10,
        name: "Urban Sneakers",
        category: "men",
        price: 129.99,
        imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Comfortable and stylish sneakers designed for the modern urbanite. Premium materials and cushioned sole.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["White", "Black", "Grey", "Navy"],
        rating: 4.7,
        reviews: 203
    },
    {
        id: 11,
        name: "Eco Runner",
        category: "women",
        price: 145.99,
        imageUrl: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Sustainable running shoes made from recycled materials. Lightweight and breathable design.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["Forest Green", "Ocean Blue", "Stone Grey"],
        isNew: true,
        rating: 4.8,
        reviews: 134
    },
    {
        id: 12,
        name: "Classic Court Shoe",
        category: "men",
        price: 95.99,
        originalPrice: 120.99,
        imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Timeless court-inspired sneaker with clean lines and premium leather construction.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["White", "Black", "Cream"],
        rating: 4.6,
        reviews: 178
    },
    {
        id: 13,
        name: "High-Top Canvas",
        category: "women",
        price: 85.99,
        imageUrl: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic high-top canvas sneaker with vintage appeal. Durable construction and comfortable fit.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["Black", "White", "Navy", "Red"],
        rating: 4.4,
        reviews: 156
    },

    // Accessories Collection
    {
        id: 14,
        name: "Classic Watch",
        category: "accessories",
        price: 199.99,
        imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Timeless design meets modern functionality in this elegant timepiece. Water-resistant with sapphire crystal.",
        sizes: ["One Size"],
        colors: ["Silver", "Gold", "Black", "Rose Gold"],
        rating: 4.6,
        reviews: 156
    },
    {
        id: 15,
        name: "Leather Wallet",
        category: "accessories",
        price: 79.99,
        imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium leather wallet with RFID protection and multiple card slots. Handcrafted with attention to detail.",
        sizes: ["One Size"],
        colors: ["Brown", "Black", "Tan", "Navy"],
        rating: 4.8,
        reviews: 67
    },
    {
        id: 16,
        name: "Minimalist Belt",
        category: "accessories",
        price: 65.99,
        imageUrl: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Clean, minimalist leather belt with brushed metal buckle. Versatile design for any occasion.",
        sizes: ["30", "32", "34", "36", "38", "40"],
        colors: ["Black", "Brown", "Cognac"],
        rating: 4.7,
        reviews: 89
    },
    {
        id: 17,
        name: "Wool Beanie",
        category: "accessories",
        price: 35.99,
        imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Soft merino wool beanie perfect for cold weather. Classic fit with subtle branding.",
        sizes: ["One Size"],
        colors: ["Charcoal", "Navy", "Cream", "Forest Green"],
        rating: 4.5,
        reviews: 112
    },

    // Hoodies Collection
    {
        id: 18,
        name: "Essential Hoodie",
        category: "men",
        price: 89.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium cotton fleece hoodie with adjustable drawstring hood. Perfect for layering or solo wear.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Grey", "Black", "Navy", "Cream"],
        rating: 4.7,
        reviews: 198
    },
    {
        id: 19,
        name: "Zip-Up Hoodie",
        category: "women",
        price: 95.99,
        imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Full-zip hoodie with kangaroo pocket and ribbed cuffs. Comfortable and versatile design.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Charcoal", "Navy", "Black", "Olive"],
        rating: 4.6,
        reviews: 145
    },
    {
        id: 20,
        name: "Oversized Hoodie",
        category: "women",
        price: 105.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Relaxed fit oversized hoodie with dropped shoulders. Contemporary streetwear aesthetic.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Stone", "Black", "Sage Green"],
        isNew: true,
        rating: 4.8,
        reviews: 76
    },

    // Jeans Collection
    {
        id: 21,
        name: "Slim Fit Jeans",
        category: "men",
        price: 119.99,
        imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic slim fit jeans with stretch denim for comfort and mobility. Timeless five-pocket design.",
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Dark Indigo", "Medium Wash", "Black"],
        rating: 4.5,
        reviews: 234
    },
    {
        id: 22,
        name: "Straight Leg Jeans",
        category: "women",
        price: 109.99,
        imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Relaxed straight leg jeans with classic fit. Made from premium denim with subtle fading.",
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Light Wash", "Medium Wash", "Dark Wash"],
        rating: 4.4,
        reviews: 187
    },
    {
        id: 23,
        name: "Raw Denim Jeans",
        category: "men",
        price: 149.99,
        imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Selvedge raw denim jeans that age beautifully with wear. Traditional construction and premium materials.",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Raw Indigo", "Black"],
        rating: 4.9,
        reviews: 98
    },

    // Additional Products for Variety
    {
        id: 24,
        name: "Merino Wool Sweater",
        category: "men",
        price: 135.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Luxurious merino wool sweater with ribbed collar and cuffs. Temperature regulating and odor resistant.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Charcoal", "Navy", "Cream", "Forest"],
        rating: 4.8,
        reviews: 89
    },
    {
        id: 25,
        name: "Canvas Tote Bag",
        category: "accessories",
        price: 45.99,
        imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Durable canvas tote bag perfect for shopping or daily essentials. Reinforced handles and spacious interior.",
        sizes: ["One Size"],
        colors: ["Natural", "Black", "Navy"],
        rating: 4.3,
        reviews: 156
    },
    {
        id: 26,
        name: "Chino Pants",
        category: "men",
        price: 89.99,
        imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic chino pants with tailored fit. Versatile design suitable for casual and business casual wear.",
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Khaki", "Navy", "Olive", "Stone"],
        rating: 4.5,
        reviews: 167
    },
    {
        id: 27,
        name: "Leather Sneakers",
        category: "women",
        price: 165.99,
        imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium leather sneakers with minimalist design. Handcrafted with Italian leather and rubber sole.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["White", "Black", "Tan"],
        rating: 4.9,
        reviews: 145
    },
    {
        id: 28,
        name: "Crossbody Bag",
        category: "accessories",
        price: 95.99,
        imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Compact crossbody bag with adjustable strap. Perfect for hands-free convenience and urban exploration.",
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Navy"],
        rating: 4.7,
        reviews: 98
    },
    {
        id: 29,
        name: "Bomber Jacket",
        category: "men",
        price: 159.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic bomber jacket with ribbed collar and cuffs. Water-resistant fabric with modern fit.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Olive", "Burgundy"],
        isNew: true,
        rating: 4.8,
        reviews: 134
    },
    {
        id: 30,
        name: "Denim Jacket",
        category: "women",
        price: 125.99,
        imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Timeless denim jacket with classic styling. Made from premium denim with vintage-inspired details.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Light Wash", "Medium Wash", "Dark Wash"],
        rating: 4.6,
        reviews: 178
    },
    {
        id: 31,
        name: "Sunglasses",
        category: "accessories",
        price: 125.99,
        imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic aviator sunglasses with UV protection. Lightweight titanium frame with polarized lenses.",
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Black"],
        rating: 4.7,
        reviews: 89
    },
    {
        id: 32,
        name: "Track Pants",
        category: "men",
        price: 75.99,
        imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Comfortable track pants with tapered fit. Perfect for workouts or casual wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Grey", "Olive"],
        rating: 4.4,
        reviews: 156
    },
    {
        id: 33,
        name: "Baseball Cap",
        category: "accessories",
        price: 39.99,
        imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic six-panel baseball cap with adjustable strap. Embroidered logo and curved brim.",
        sizes: ["One Size"],
        colors: ["Black", "Navy", "White", "Grey"],
        rating: 4.5,
        reviews: 234
    },
    {
        id: 34,
        name: "Long Sleeve Tee",
        category: "women",
        price: 49.99,
        imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Essential long sleeve tee made from soft cotton blend. Perfect for layering or standalone wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Grey", "Navy"],
        rating: 4.6,
        reviews: 167
    },
    {
        id: 35,
        name: "Hiking Boots",
        category: "men",
        price: 189.99,
        imageUrl: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Durable hiking boots with waterproof construction. Excellent traction and ankle support for outdoor adventures.",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["Brown", "Black", "Tan"],
        rating: 4.8,
        reviews: 123
    },
    {
        id: 36,
        name: "Messenger Bag",
        category: "accessories",
        price: 115.99,
        imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Professional messenger bag with laptop compartment. Water-resistant canvas with leather accents.",
        sizes: ["One Size"],
        colors: ["Charcoal", "Navy", "Olive"],
        rating: 4.7,
        reviews: 145
    },
    {
        id: 37,
        name: "Cardigan Sweater",
        category: "women",
        price: 119.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Elegant cardigan sweater with button closure. Made from soft merino wool blend.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Charcoal", "Navy", "Cream", "Camel"],
        rating: 4.8,
        reviews: 98
    },
    {
        id: 38,
        name: "Scarf",
        category: "accessories",
        price: 55.99,
        imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Soft cashmere blend scarf with fringe details. Lightweight and warm for transitional weather.",
        sizes: ["One Size"],
        colors: ["Charcoal", "Navy", "Cream", "Burgundy"],
        rating: 4.6,
        reviews: 134
    },
    {
        id: 39,
        name: "Henley Shirt",
        category: "men",
        price: 59.99,
        imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Classic henley shirt with three-button placket. Made from premium cotton with vintage-inspired styling.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Grey", "Navy", "Black"],
        rating: 4.7,
        reviews: 189
    },
    {
        id: 40,
        name: "Fleece Jacket",
        category: "women",
        price: 79.99,
        originalPrice: 99.99,
        imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Cozy fleece jacket perfect for outdoor activities. Lightweight yet warm with full-zip closure.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Grey", "Navy", "Black", "Pink"],
        rating: 4.5,
        reviews: 167
    }
];

// Categories for homepage
const categories = [
    {
        id: 1,
        name: "Men's Collection",
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        link: "products.html?category=men"
    },
    {
        id: 2,
        name: "Women's Collection",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        link: "products.html?category=women"
    },
    {
        id: 3,
        name: "Accessories",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        link: "products.html?category=accessories"
    },
    {
        id: 4,
        name: "Sale Items",
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        link: "products.html?sale=true"
    }
];

// Global variables
let currentProducts = [...products];
let cart = JSON.parse(localStorage.getItem('aura-cart')) || [];

// Cart Management Functions
function addToCart(productId, size = 'M', color = 'Black') {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Create a unique key for the cart item
        const itemKey = `${productId}-${size}-${color}`;
        const existingItem = cart.find(item => item.key === itemKey);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                key: itemKey,
                id: productId,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                size: size,
                color: color,
                quantity: 1
            });
        }
        saveCart();
        updateCartCount();
        
        // Show feedback
        const button = document.querySelector(`[data-product-id="${productId}"]`);
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.backgroundColor = '#27AE60';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 1000);
        }
        
        // If we're on the cart page, re-render it
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

function removeFromCart(itemKey) {
    cart = cart.filter(item => item.key !== itemKey);
    saveCart();
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function updateQuantity(itemKey, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemKey);
        return;
    }
    
    const item = cart.find(item => item.key === itemKey);
    
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = getCartItemCount();
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function saveCart() {
    localStorage.setItem('aura-cart', JSON.stringify(cart));
    updateCartCount();
}

// Lazy Loading Implementation
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Product Card Generation
function createProductCard(product) {
    const isOnSale = product.originalPrice && product.originalPrice > product.price;
    const discount = isOnSale ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img class="lazy-image" 
                     data-src="${product.imageUrl}" 
                     alt="${product.name}"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+">
                ${product.isNew ? '<div class="product-badge">New</div>' : ''}
                ${isOnSale ? '<div class="product-badge sale">-' + discount + '%</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">
                    <span class="price-current">$${product.price}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
                </div>
                ${product.rating ? `
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                ` : ''}
                <button class="btn-primary" onclick="addToCart(${product.id})" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Category Card Generation
function createCategoryCard(category) {
    return `
        <a href="${category.link}" class="category-card">
            <img class="lazy-image" 
                 data-src="${category.image}" 
                 alt="${category.name}"
                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+">
            <div class="category-overlay">
                <h3 class="category-name">${category.name}</h3>
            </div>
        </a>
    `;
}

// Search Functionality
function performSearch(query) {
    if (!query.trim()) {
        currentProducts = [...products];
    } else {
        const searchTerm = query.toLowerCase().trim();
        currentProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    if (window.location.pathname.includes('products.html')) {
        renderProducts();
        updatePageInfo();
    }
}

// Debounced search function
const debouncedSearch = debounce(performSearch, 300);

// Sort Products
function sortProducts(sortBy) {
    switch (sortBy) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
        default:
            currentProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
    }
    
    if (window.location.pathname.includes('products.html')) {
        renderProducts();
    }
}

// Filter Products by Category or Sale
function filterProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const sale = urlParams.get('sale');
    
    if (category) {
        currentProducts = products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
    } else if (sale === 'true') {
        currentProducts = products.filter(product => 
            product.originalPrice && product.originalPrice > product.price
        );
    } else {
        currentProducts = [...products];
    }
}

// Render Functions
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!productsGrid) return;
    
    if (currentProducts.length === 0) {
        productsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    // Build HTML string for better performance
    const productsHTML = currentProducts.map(product => createProductCard(product)).join('');
    productsGrid.innerHTML = productsHTML;
    
    // Setup lazy loading for new images
    setTimeout(setupLazyLoading, 100);
}

function renderCart() {
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = '';
        if (emptyCart) emptyCart.style.display = 'block';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    
    // Calculate totals
    const subtotal = getCartTotal();
    const shipping = subtotal >= 75 ? 0 : 9.99;
    const total = subtotal + shipping;
    
    // Generate cart HTML
    const cartHTML = `
        <div class="cart-content">
            <!-- Cart Items -->
            <div class="cart-items">
                <div class="cart-items-header">
                    <h2 class="cart-items-title">Cart Items (${getCartItemCount()})</h2>
                </div>
                ${cart.map(item => `
                    <div class="cart-item">
                        <img class="cart-item-image" 
                             src="${item.imageUrl}" 
                             alt="${item.name}">
                        <div class="cart-item-details">
                            <h3 class="cart-item-name">${item.name}</h3>
                            <p class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</p>
                            <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity('${item.key}', ${item.quantity - 1})">-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity('${item.key}', ${item.quantity + 1})">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart('${item.key}')">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3,6 5,6 21,6"></polyline>
                                    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
                <h2 class="cart-summary-title">Order Summary</h2>
                <div class="summary-row">
                    <span class="summary-label">Subtotal</span>
                    <span class="summary-value">$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Shipping</span>
                    <span class="summary-value">${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Total</span>
                    <span class="summary-value">$${total.toFixed(2)}</span>
                </div>
                <button class="checkout-btn btn-primary">Proceed to Checkout</button>
                <a href="products.html" class="continue-shopping">Continue Shopping</a>
                <button class="btn-primary" onclick="clearCart()" style="background-color: #dc3545; margin-top: 10px;">Clear Cart</button>
            </div>
        </div>
    `;
    
    cartContent.innerHTML = cartHTML;
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    const categoriesHTML = categories.map(category => createCategoryCard(category)).join('');
    categoriesGrid.innerHTML = categoriesHTML;
    
    setTimeout(setupLazyLoading, 100);
}

function renderNewArrivals() {
    const newArrivalsGrid = document.getElementById('newArrivalsGrid');
    if (!newArrivalsGrid) return;
    
    const newProducts = products.filter(product => product.isNew).slice(0, 8);
    const newArrivalsHTML = newProducts.map(product => createProductCard(product)).join('');
    newArrivalsGrid.innerHTML = newArrivalsHTML;
    
    setTimeout(setupLazyLoading, 100);
}

function updatePageInfo() {
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    const resultsCount = document.getElementById('resultsCount');
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const sale = urlParams.get('sale');
    
    if (pageTitle) {
        if (category) {
            pageTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`;
        } else if (sale === 'true') {
            pageTitle.textContent = 'Sale Items';
        } else {
            pageTitle.textContent = 'All Products';
        }
    }
    
    if (pageSubtitle) {
        if (category) {
            pageSubtitle.textContent = `Discover our ${category}'s collection`;
        } else if (sale === 'true') {
            pageSubtitle.textContent = 'Great deals on premium fashion';
        } else {
            pageSubtitle.textContent = 'Discover our complete collection';
        }
    }
    
    if (resultsCount) {
        resultsCount.textContent = `Showing ${currentProducts.length} products`;
    }
}

// Hamburger Menu Toggle
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (hamburger && mobileNav) {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

// Login/Signup Toggle
function toggleAuthForm() {
    const loginTitle = document.getElementById('loginTitle');
    const loginSubtitle = document.getElementById('loginSubtitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleText = document.getElementById('toggleText');
    const toggleBtn = document.getElementById('toggleBtn');
    const nameGroup = document.getElementById('nameGroup');
    const rememberGroup = document.getElementById('rememberGroup');
    const forgotPassword = document.getElementById('forgotPassword');
    
    const isLogin = submitBtn.textContent === 'Sign In';
    
    if (isLogin) {
        // Switch to Sign Up
        loginTitle.textContent = 'Create Account';
        loginSubtitle.textContent = 'Join our community today';
        submitBtn.textContent = 'Create Account';
        toggleText.textContent = 'Already have an account?';
        toggleBtn.textContent = 'Sign In';
        nameGroup.style.display = 'block';
        rememberGroup.style.display = 'none';
        forgotPassword.style.display = 'none';
    } else {
        // Switch to Sign In
        loginTitle.textContent = 'Welcome Back';
        loginSubtitle.textContent = 'Sign in to your account';
        submitBtn.textContent = 'Sign In';
        toggleText.textContent = "Don't have an account?";
        toggleBtn.textContent = 'Sign Up';
        nameGroup.style.display = 'none';
        rememberGroup.style.display = 'flex';
        forgotPassword.style.display = 'block';
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(e.target.value);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) performSearch(searchInput.value);
        });
    }
    
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(e.target.value);
            }
        });
    }
    
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            if (mobileSearchInput) performSearch(mobileSearchInput.value);
        });
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => sortProducts(e.target.value));
    }
    
    // Login/Signup toggle
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAuthForm);
    }
    
    // Form submission (prevent default for demo)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('This is a demo. Form submission is disabled.');
        });
    }
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing! This is a demo.');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileNav = document.getElementById('mobileNav');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        
        if (mobileNav && mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            const hamburger = document.getElementById('hamburgerBtn');
            const mobileNav = document.getElementById('mobileNav');
            
            if (hamburger && mobileNav) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Page Initialization
function initializePage() {
    const currentPage = window.location.pathname;
    
    // Update cart count on all pages
    updateCartCount();
    
    if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '') {
        // Homepage initialization
        renderCategories();
        renderNewArrivals();
    } else if (currentPage.includes('products.html')) {
        // Products page initialization
        filterProducts();
        updatePageInfo();
        renderProducts();
    } else if (currentPage.includes('cart.html')) {
        // Cart page initialization
        renderCart();
    }
    
    // Setup lazy loading for all pages
    setTimeout(setupLazyLoading, 100);
    
    // Setup event listeners
    setupEventListeners();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}
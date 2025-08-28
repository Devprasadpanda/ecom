import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItem, Product } from '../types';

type CartContextValue = {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedSize: string, selectedColor: string, quantity?: number) => void;
  removeFromCart: (productId: string, selectedSize: string, selectedColor: string) => void;
  updateQuantity: (productId: string, selectedSize: string, selectedColor: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('aura-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('aura-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, selectedSize: string, selectedColor: string, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, selectedSize, selectedColor, quantity }];
    });
  };

  const removeFromCart = (productId: string, selectedSize: string, selectedColor: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)));
  };

  const updateQuantity = (productId: string, selectedSize: string, selectedColor: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize, selectedColor);
      return;
    }
    setCartItems(prev => prev.map(item => (
      item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
        ? { ...item, quantity }
        : item
    )));
  };

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const clearCart = () => setCartItems([]);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  }), [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return ctx;
};



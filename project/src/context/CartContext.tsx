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

const defaultCartContext: CartContextValue = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
  clearCart: () => {}
};

const CartContext = createContext<CartContextValue>(defaultCartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const STORAGE_KEY = 'aura-cart-v2';

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      const isValid = Array.isArray(parsed) && parsed.every((it: any) => it && it.product && it.selectedSize !== undefined && it.selectedColor !== undefined && typeof it.quantity === 'number');
      return isValid ? parsed : [];
    } catch {
      // Corrupted storage; reset
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore quota/storage errors
    }
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

export const useCartContext = () => useContext(CartContext);



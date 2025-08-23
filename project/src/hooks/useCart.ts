import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('aura-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aura-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, selectedSize: string, selectedColor: string, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.product.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { product, selectedSize, selectedColor, quantity }];
    });
  };

  const removeFromCart = (productId: string, selectedSize: string, selectedColor: string) => {
    setCartItems(prevItems => 
      prevItems.filter(
        item => !(item.product.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId: string, selectedSize: string, selectedColor: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize, selectedColor);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  };
};
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number; // numeric price
  originalPrice?: number;
  discount?: string;
  quantity: number;
  size?: string;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  addItem: (item: CartItem, qty?: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "curemist_cart";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item: CartItem, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id && p.size === item.size);
      if (found) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + qty }
            : p,
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, qty) } : p)));
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

  const value: CartContextValue = {
    items,
    count: items.reduce((c, it) => c + it.quantity, 0),
    addItem,
    updateQty,
    removeItem,
    clearCart,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

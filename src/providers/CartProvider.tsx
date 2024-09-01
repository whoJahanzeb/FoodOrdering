import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto";
import { createContext, PropsWithChildren, useContext } from "react";
import { useState } from "react";
type CartType = {
  items: CartItem[];
  addCartItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  addCartItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addCartItem = (product: Product, size: CartItem["size"]) => {
    const existingItem = cartItems.find(
      (item) => item.product === product && item.size === size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      size,
      quantity: 1,
      product_id: product.id,
    };
    setCartItems([newCartItem, ...cartItems]);
  };
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, addCartItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
export const useCart = () => useContext(CartContext);

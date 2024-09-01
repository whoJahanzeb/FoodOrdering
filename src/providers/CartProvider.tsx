import { CartItem, Product } from "@/types";
import { createContext, PropsWithChildren, useContext } from "react";
import { useState } from "react";
type CartType = {
  items: CartItem[];
  addCartItem: (product: Product, size: CartItem["size"]) => void;
};

export const CartContext = createContext<CartType>({
  items: [],
  addCartItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addCartItem = (product: Product, size: CartItem["size"]) => {
    const newCartItem: CartItem = {
      id: "1",
      product,
      size,
      quantity: 1,
      product_id: product.id,
    };
    setCartItems([newCartItem, ...cartItems]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
export const useCart = () => useContext(CartContext);

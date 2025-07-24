import { createContext, useContext } from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
};

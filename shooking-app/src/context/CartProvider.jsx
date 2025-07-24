import { useReducer } from "react";
import { CartStateContext, CartDispatchContext } from "./CartContext";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => String(item.productId) !== String(action.payload.productId)
      );
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (productId, imageId, name, price) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId,
        imageId,
        name,
        price,
        amount: 1,
      },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId,
      },
    });
  };

  const clear = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider
        value={{ addToCart, removeFromCart, clear }}
      >
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartProvider;

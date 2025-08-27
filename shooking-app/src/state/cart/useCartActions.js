import { useRecoilCallback } from "recoil";
import { cartState } from "./cartState";
import * as cartService from "./cartService";

export const useCartActions = () => {
  const addItem = useRecoilCallback(({ set, snapshot }) => async (product) => {
    const cart = await snapshot.getPromise(cartState);
    set(cartState, cartService.addItem(cart, product));
  });

  const removeItem = useRecoilCallback(({ set, snapshot }) => async (id) => {
    const cart = await snapshot.getPromise(cartState);
    set(cartState, cartService.removeItem(cart, id));
  });

  const updateItemQuantity = useRecoilCallback(
    ({ set, snapshot }) =>
      async (id, quantity) => {
        const cart = await snapshot.getPromise(cartState);
        set(cartState, cartService.updateItemQuantity(cart, id, quantity));
      }
  );

  return { addItem, removeItem, updateItemQuantity };
};

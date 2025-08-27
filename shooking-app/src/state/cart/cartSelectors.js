import { selector } from "recoil";
import { cartState } from "./cartState";

export const totalPriceSelector = selector({
  key: "totalPriceSelector",
  get: ({ get }) => {
    const cart = get(cartState) || [];
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
});

export const shippingFeeSelector = selector({
  key: "shippingFeeSelector",
  get: ({ get }) => {
    const total = get(totalPriceSelector);
    return total >= 100000 ? 0 : 3000;
  },
});

export const finalAmountSelector = selector({
  key: "finalAmountSelector",
  get: ({ get }) => {
    return get(totalPriceSelector) + get(shippingFeeSelector);
  },
});

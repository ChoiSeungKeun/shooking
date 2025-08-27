import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

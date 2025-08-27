import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MdOutlineShoppingBag } from "react-icons/md";
import { cartState } from "../state/cart/cartState";

import NavItem from "./NavItem";

const CartNavItem = () => {
  const cart = useRecoilValue(cartState);
  const nav = useNavigate();

  return (
    <NavItem
      icon={<MdOutlineShoppingBag />}
      badgeContent={cart.length}
      max={9}
      onClick={() => nav(`/cart`)}
    />
  );
};

export default CartNavItem;

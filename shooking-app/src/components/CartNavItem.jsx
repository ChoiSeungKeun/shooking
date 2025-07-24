import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCartState } from "../context/CartContext";
import NavItem from "./NavItem";

const CartNavItem = () => {
  const cart = useCartState();
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

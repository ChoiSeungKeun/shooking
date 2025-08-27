import { IoCloseOutline } from "react-icons/io5";
import { useCartActions } from "../state/cart/useCartActions";
import "./CartItem.css";
import Button from "./Button";

const CartItem = ({ productId, name, price, quantity, imageUrl }) => {
  const { removeItem, updateItemQuantity } = useCartActions();

  return (
    <div className="CartItem">
      <div className="cart-item__thumbnail">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">{price.toLocaleString()}원</div>
        <div className="cart-item__quantity">
          <Button
            text="-"
            variant="quantity"
            onClick={() => updateItemQuantity(productId, quantity - 1)}
          />
          {quantity}
          <Button
            text={"+"}
            variant="quantity"
            onClick={() => updateItemQuantity(productId, quantity + 1)}
          />
        </div>
      </div>
      <div className="cart-item__etc">
        <Button
          icon={<IoCloseOutline />}
          variant="icon"
          onClick={() => removeItem(productId)}
        />
      </div>
    </div>
  );
};

export default CartItem;

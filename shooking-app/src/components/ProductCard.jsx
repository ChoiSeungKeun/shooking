import { useCartActions } from "../state/cart/useCartActions";
import { usePaymentModal } from "../state/payment/usePaymentModal";
import "./ProductCard.css";
import Button from "./Button";

const ProductCard = ({ id, name, description, price, imageUrl }) => {
  const { addItem } = useCartActions();
  const { openModal } = usePaymentModal();

  return (
    <div className="ProductCard">
      <div className="image_section">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info_section">
        <h4 className="name">{name}</h4>
        <p className="description">{description}</p>
        <p className="price">{price.toLocaleString("ko-KR")}원</p>
        <div className="button_section">
          <Button
            text={"담기"}
            variant={"basic"}
            size={"sm"}
            onClick={() => addItem({ id, name, price, imageUrl })}
          />
          <Button
            text={"구매"}
            variant={"payment"}
            size={"sm"}
            onClick={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

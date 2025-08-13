import { useNavigate } from "react-router-dom";
import { useCartDispatch, useCartState } from "../context/CartContext";
import { getShoesImage } from "./../util/get-shoes-image";
import Button from "./Button";

import "./ProductCard.css";

const ProductCard = ({ id, imageId, name, description, price }) => {
  const cart = useCartState();
  const { addToCart } = useCartDispatch();

  const navigate = useNavigate();

  const isInCart = cart.some((item) => String(item.productId) === String(id));

  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }

    addToCart(id, imageId, name, price);
  };

  const handlePurchase = () => {
    navigate("/payment");
  };

  return (
    <div className="ProductCard">
      <div className="image_section">
        <img src={getShoesImage(imageId)} alt={name} />
      </div>
      <div className="info_section">
        <h4 className="name">{name}</h4>
        <p className="description">{description}</p>
        <p className="price">{price.toLocaleString("ko-KR")}원</p>
        <div className="button_section">
          <Button
            text={isInCart ? "담김!" : "담기"}
            variant={isInCart ? "not-allow" : "basic"}
            size={"sm"}
            disabled={isInCart}
            onClick={handleAddToCart}
          />
          <Button
            text={"구매"}
            variant={"payment"}
            size={"sm"}
            onClick={handlePurchase}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import "./ProductCard.css";
import { useCartDispatch, useCartState } from "../context/CartContext";
import { getShoesImage } from "./../util/get-shoes-image";
import Button from "./Button";

const ProductCard = ({ id, imageId, name, description, price }) => {
  const cart = useCartState();
  const { addToCart } = useCartDispatch();

  const isInCart = cart.some((item) => String(item.productId) === String(id));

  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }

    addToCart(id, imageId, name, price);
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
        <Button
          text={isInCart ? "담김!" : "담기"}
          variant={"added"}
          disabled={isInCart}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;

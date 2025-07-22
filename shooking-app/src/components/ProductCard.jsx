import "./ProductCard.css";
import { getShoesImage } from "./../util/get-shoes-image";

import Button from "./Button";

const ProductCard = ({ shoesId }) => {
  return (
    <div className="ProductCard">
      <div className="image_section">
        <img src={getShoesImage(shoesId)} />
      </div>
      <div className="info_section">
        <h4>브랜드 A</h4>
        <p className="description">편안하고 착용감이 좋은 신발</p>
        <p className="price">35000원</p>
        <Button text={"담기"} variant={"added"} disabled={false} />{" "}
      </div>
    </div>
  );
};

export default ProductCard;

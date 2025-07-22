import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="Product">
      <div className="title_bar">
        <h1>신발 상품 목록</h1>
        <p>현재 개의 상품이 있습니다.</p>
      </div>
      <div className="list_wrapper">
        <ProductCard shoesId={1} />
        <ProductCard shoesId={2} />
        <ProductCard shoesId={3} />
        <ProductCard shoesId={4} />
        <ProductCard shoesId={5} />
        <ProductCard shoesId={6} />
      </div>
    </div>
  );
};

export default ProductList;

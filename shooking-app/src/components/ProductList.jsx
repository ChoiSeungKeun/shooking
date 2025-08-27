import { useRecoilValue } from "recoil";
import { productListState } from "../state/product/productListState";
import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const productList = useRecoilValue(productListState);

  return (
    <div className="Product">
      <div className="title_bar">
        <h1>신발 상품 목록</h1>
        <p>현재 {productList.length}개의 상품이 있습니다.</p>
      </div>
      <div className="list_wrapper">
        {productList.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;

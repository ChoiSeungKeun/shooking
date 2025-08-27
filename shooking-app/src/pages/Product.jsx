import { useEffect } from "react";
import { useProductList } from "../state/product/useProductList";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CartNavItem from "../components/CartNavItem";

const Product = () => {
  const { loadProductList } = useProductList();

  useEffect(() => {
    loadProductList();
  }, []);

  return (
    <div>
      <Header rightArea={<CartNavItem />} theme={"dark"} />
      <ProductList />
    </div>
  );
};

export default Product;

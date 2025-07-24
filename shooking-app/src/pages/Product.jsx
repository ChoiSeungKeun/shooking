import mockProducts from "./../data/mockProducts";
import Header from "./../components/Header";
import ProductList from "../components/ProductList";
import CartNavItem from "../components/CartNavItem";

const Product = () => {
  return (
    <div>
      <Header rightChild={<CartNavItem />} theme={"dark"} />
      <ProductList productList={mockProducts} />
    </div>
  );
};

export default Product;

import { MdOutlineShoppingBag } from "react-icons/md";
import mockProducts from "./../data/mockProducts";
import Header from "./../components/Header";
import Button from "./../components/Button";
import ProductList from "../components/ProductList";

const Product = () => {
  return (
    <div>
      <Header
        rightChild={
          <Button
            icon={<MdOutlineShoppingBag />}
            variant={"dark"}
            disabled={false}
            onClick={() => {
              console.log("장바구니");
            }}
          />
        }
        theme={"dark"}
      />
      <ProductList productList={mockProducts} />
    </div>
  );
};

export default Product;

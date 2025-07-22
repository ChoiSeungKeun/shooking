import { MdOutlineShoppingBag } from "react-icons/md";
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
      <ProductList />
    </div>
  );
};

export default Product;

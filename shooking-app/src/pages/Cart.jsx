import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Header from "../components/Header";
import CartContainer from "../components/CartContainer";
import Button from "../components/Button";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        leftArea={
          <Button
            icon={<IoArrowBack color="#FFFFFF" />}
            variant={"icon"}
            onClick={() => navigate("/product")}
          />
        }
        theme="dark"
      />
      <CartContainer />
    </div>
  );
};

export default Cart;

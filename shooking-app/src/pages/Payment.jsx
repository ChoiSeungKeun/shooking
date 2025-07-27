import Header from "../components/Header";
import AddCard from "./../components/AddCard";

const Payment = () => {
  return (
    <div>
      <Header title={"카드추가"} leftChild={"<"} rightChild={"x"} />
      <AddCard />
    </div>
  );
};

export default Payment;

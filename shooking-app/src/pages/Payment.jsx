import Header from "../components/Header";
import AddCardContainer from "../components/AddCardContainer";

const Payment = () => {
  return (
    <div>
      <Header title={"카드추가"} leftChild={"<"} rightChild={"x"} />
      <AddCardContainer />
    </div>
  );
};

export default Payment;

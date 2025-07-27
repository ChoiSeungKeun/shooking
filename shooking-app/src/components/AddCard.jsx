import "./AddCard.css";
import CardNumberInput from "./CardNumberInput";

const AddCard = () => {
  return (
    <div className="AddCard">
      <div>카드섹션</div>
      <div>
        <CardNumberInput />
      </div>
      <div>버튼섹션</div>
    </div>
  );
};

export default AddCard;

import { usePaymentModal } from "../state/payment/usePaymentModal";
import Modal from "./Modal";
import Payment from "./Payment";

const PaymentModal = () => {
  const { isOpen } = usePaymentModal();

  return (
    <Modal open={isOpen}>
      <Payment />
    </Modal>
  );
};

export default PaymentModal;

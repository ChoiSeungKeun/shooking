import { useRecoilState } from "recoil";
import { openPaymentState } from "./openPaymentState";

export const usePaymentModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(openPaymentState);

  const openModal = () => {
    setIsOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

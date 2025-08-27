import { useRecoilValue } from "recoil";
import { cartState } from "../state/cart/cartState";
import {
  totalPriceSelector,
  shippingFeeSelector,
  finalAmountSelector,
} from "../state/cart/cartSelectors";
import { usePaymentModal } from "../state/payment/usePaymentModal";
import "./CartContainer.css";
import CartItem from "./CartItem";
import Button from "./Button";

const CartContainer = () => {
  const cartItems = useRecoilValue(cartState);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const shippingFee = useRecoilValue(shippingFeeSelector);
  const finalAmount = useRecoilValue(finalAmountSelector);
  const { openModal } = usePaymentModal();

  return (
    <div className="CartContainer">
      <div className="title">
        <h1>장바구니</h1>
        <p>현재 {cartItems.length}개의 상품이 담겨있습니다.</p>
      </div>
      <div className="content">
        <div className="cart-list">
          {cartItems.length === 0 ? (
            <p>장바구니에 담은 상품이 없습니다.</p>
          ) : (
            cartItems.map((item) => <CartItem key={item.productId} {...item} />)
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-payment">
            <div className="total-price">
              <div className="cart-payment__item">
                <span className="cart-payment__item__label">상품금액</span>
                <span className="cart-payment__item__price">
                  {totalPrice.toLocaleString("ko-KR")}원
                </span>
              </div>
              <div className="cart-payment__item">
                <span className="cart-payment__item__label">배송비</span>
                <span className="cart-payment__item__price">
                  {shippingFee.toLocaleString("ko-KR")}원
                </span>
              </div>
            </div>
            <div className="order-price">
              <div className="cart-payment__item">
                <span className="cart-payment__item__label">총 금액</span>
                <span className="cart-payment__item__price">
                  {finalAmount.toLocaleString("ko-KR")}원
                </span>
              </div>
            </div>
            <div>
              <Button
                text="결제하기"
                variant="payment"
                size="lg"
                onClick={openModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductCard from "./../components/ProductCard";

const mockAddItem = jest.fn();
const mockOpenModal = jest.fn();

jest.mock("./../state/cart/useCartActions", () => ({
  useCartActions: () => ({
    addItem: mockAddItem,
  }),
}));

jest.mock("./../state/payment/usePaymentModal", () => ({
  usePaymentModal: () => ({
    openModal: mockOpenModal,
  }),
}));

describe("ProductCard 단위 테스트", () => {
  const defaultProps = {
    id: 1,
    name: "테스트 상품 이름",
    description: "테스트 상품 설명",
    price: 100000,
    imageUrl: "/test-image.jpg",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("컴포넌트 렌더링 확인", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText("테스트 상품 이름")).toBeInTheDocument();
    expect(screen.getByText("테스트 상품 설명")).toBeInTheDocument();
    expect(screen.getByText("100,000원")).toBeInTheDocument();
    expect(screen.getByAltText("테스트 상품 이름")).toHaveAttribute(
      "src",
      "/test-image.jpg"
    );
    expect(screen.getByRole("button", { name: "담기" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "구매" })).toBeInTheDocument();
  });

  test("담기 버튼 클릭 시 장바구니에 추가하는 addItem 호출 확인.", async () => {
    render(<ProductCard {...defaultProps} />);
    const button = screen.getByRole("button", { name: "담기" });
    await userEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledWith({
      id: 1,
      name: "테스트 상품 이름",
      price: 100000,
      imageUrl: "/test-image.jpg",
    });
  });

  test("구매 버튼 클릭 시 모달이 열리는 openModal 호출 확인", async () => {
    render(<ProductCard {...defaultProps} />);
    const button = screen.getByRole("button", { name: "구매" });
    await userEvent.click(button);

    expect(mockOpenModal).toHaveBeenCalled();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./../components/ProductCard";
import {
  CartStateContext,
  CartDispatchContext,
} from "./../context/CartContext";

jest.mock("./../util/get-shoes-image", () => ({
  getShoesImage: jest.fn(() => "/mocked-image.jpg"),
}));

const MockCartProvider = ({
  cartItems = [],
  addToCart = jest.fn(),
  children,
}) => {
  return (
    <CartStateContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={{ addToCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

describe("ProductCard 단위 테스트", () => {
  const mockAddToCart = jest.fn();

  const setup = (cartItems = []) => {
    render(
      <MockCartProvider cartItems={cartItems} addToCart={mockAddToCart}>
        <ProductCard
          id={1}
          imageId={1}
          name="브랜드A"
          description="편안하고 착용감이 좋은 신발"
          price={35000}
        />
      </MockCartProvider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("컴포넌트 렌더링 확인", () => {
    setup();

    expect(screen.getByText("브랜드A")).toBeInTheDocument();
    expect(screen.getByText("편안하고 착용감이 좋은 신발")).toBeInTheDocument();
    expect(screen.getByText("35,000원")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("담기");
    expect(screen.getByAltText("브랜드A")).toHaveAttribute(
      "src",
      "/mocked-image.jpg"
    );
  });

  test("장바구니에 없을 때 담기 버튼 클릭 시 addToCart 호출", async () => {
    setup([]);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith(1, 1, "브랜드A", 35000);
  });

  test("이미 장바구니에 있을 경우 버튼이 비활성화 및 '담김!' 텍스트 표시", () => {
    setup([{ productId: 1 }]);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("담김!");
  });
});

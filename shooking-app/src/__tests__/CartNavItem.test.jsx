import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartStateContext } from "./../context/CartContext";
import CartNavItem from "./../components/CartNavItem";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("CartNavItem 단위테스트", () => {
  const setup = (cartItems = []) => {
    render(
      <CartStateContext.Provider value={cartItems}>
        <CartNavItem />
      </CartStateContext.Provider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("cart.length 개수가 10개 이하일 때 badgeContent 값으로 표시되는지 확인", () => {
    const cartLength = 3;
    const cart = Array.from({ length: cartLength }, (_, i) => ({ id: i }));
    setup(cart);

    expect(screen.getByText(String(cartLength))).toBeInTheDocument();
  });

  test("cart.length 개수가 10개 이상일 때 9+ 값으로 표시되는지 확인", () => {
    const cartLength = 15;
    const cart = Array.from({ length: cartLength }, (_, i) => ({ id: i }));
    setup(cart);

    expect(screen.getByText("9+")).toBeInTheDocument();
  });

  test("CartNavItem 클릭 시 onClick 의해 /cart 이동되는지 확인", async () => {
    setup([{}]);

    const navItem = screen.getByRole("button");
    await userEvent.click(navItem);

    expect(mockNavigate).toHaveBeenCalledWith("/cart");
  });
});

import { addItem } from "./../state/cart/cartService";

describe("cartService.addItem", () => {
  it("새로운 상품이면 cart 추가", () => {
    const cart = [];
    const product = {
      id: 1,
      name: "테스트 상품 이름",
      description: "테스트 상품 설명",
      price: 100000,
      imageUrl: "/test-image.jpg",
    };
    const result = addItem(cart, product);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      productId: 1,
      name: "테스트 상품 이름",
      price: 100000,
      quantity: 1,
      imageUrl: "/test-image.jpg",
    });
  });

  it("이미 장바구니에 있는 상품이면 수량을 증가", () => {
    const cart = [
      {
        productId: 1,
        name: "테스트 상품 이름",
        price: 100000,
        quantity: 1,
        imageUrl: "/test-image.jpg",
      },
    ];
    const product = {
      id: 1,
      name: "테스트 상품 이름",
      description: "테스트 상품 설명",
      price: 100000,
      imageUrl: "/test-image.jpg",
    };
    const result = addItem(cart, product);

    expect(result).toHaveLength(1);
    expect(result[0].quantity).toBe(2);
  });
});

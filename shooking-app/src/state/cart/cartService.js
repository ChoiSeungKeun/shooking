export const addItem = (cart, product) => {
  const exists = cart.find((item) => item.productId === product.id);

  if (exists) {
    return cart.map((item) =>
      item.productId === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [
    {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    },
    ...cart,
  ];
};

export const removeItem = (cart, productId) => {
  return cart.filter((item) => item.productId !== productId);
};

export const updateItemQuantity = (cart, productId, quantity) => {
  return quantity < 1
    ? cart
    : cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
};

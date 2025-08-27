const getProducts = async () => {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("상품을 불러오지 못했습니다.");
  return await res.json();
};

export { getProducts };

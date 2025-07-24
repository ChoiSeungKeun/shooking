const mockProducts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  imageId: i + 1,
  name: `브랜드${String.fromCharCode(65 + i / 2)}`,
  description:
    i % 2 === 0 ? "편안하고 착용감이 좋은 신발" : "힙한 컬러가 매력적인 신발",
  price: i % 2 === 0 ? 35000 : 25000,
}));

export default mockProducts;

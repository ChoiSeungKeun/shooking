import { rest } from "msw";

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "브랜드A",
          description: "편안하고 착용감이 좋은 신발",
          price: 35000,
          imageUrl: `/shooking/images/shoes1.jpg`,
        },
        {
          id: 2,
          name: "브랜드B",
          description: "힙합 컬러가 매력적인 신발",
          price: 25000,
          imageUrl: `/shooking/images/shoes2.jpg`,
        },
        {
          id: 3,
          name: "브랜드A",
          description: "편안하고 착용감이 좋은 신발",
          price: 35000,
          imageUrl: `/shooking/images/shoes3.jpg`,
        },
        {
          id: 4,
          name: "브랜드B",
          description: "힙합 컬러가 매력적인 신발",
          price: 25000,
          imageUrl: `/shooking/images/shoes4.jpg`,
        },
        {
          id: 5,
          name: "브랜드A",
          description: "편안하고 착용감이 좋은 신발",
          price: 35000,
          imageUrl: `/shooking/images/shoes5.jpg`,
        },
        {
          id: 6,
          name: "브랜드B",
          description: "힙합 컬러가 매력적인 신발",
          price: 25000,
          imageUrl: `/shooking/images/shoes6.jpg`,
        },
      ])
    );
  }),
];

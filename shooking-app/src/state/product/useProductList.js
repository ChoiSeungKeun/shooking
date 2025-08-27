import { useSetRecoilState } from "recoil";
import { productListState } from "./productListState";
import { getProducts } from "./../../api/products";

export const useProductList = () => {
  const setProductList = useSetRecoilState(productListState);

  const loadProductList = async () => {
    try {
      const data = await getProducts();
      setProductList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("상품 불러오기 실패:", err);
      setProductList([]);
    }
  };

  return { loadProductList };
};

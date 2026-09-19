import { useQuery } from "@tanstack/react-query";
import http from "../../../services/http";

const useProducts = () => {
  
  const {
    data: productData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await http.get("/admin/products");
      return response.data;
    },
  });
  return {
    productData,
    isLoading,
    isError,
  
}      

}
export default useProducts;
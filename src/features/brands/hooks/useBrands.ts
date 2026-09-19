import { useQuery } from "@tanstack/react-query";
import http from "../../../services/http";

const useBrands = () => {
  
  const {
    data: brandData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await http.get("/admin/brands");
      return response.data;
    },
  });
  return {
    brandData,
    isLoading,
    isError,
  
}      

}
export default useBrands;
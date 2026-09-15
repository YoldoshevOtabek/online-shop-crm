import { useQuery } from "@tanstack/react-query";
import http from "../../../services/http";

const useCategory = () => {
  
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await http.get("/admin/categories");
      return response.data;
    },
  });
  return {
    categoryData,

    isLoading: categoryLoading,
    isError: categoryError,
  
}      

}
export default useCategory;
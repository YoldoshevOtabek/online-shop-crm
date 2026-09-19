import { useQuery } from "@tanstack/react-query";
import http from "../../../services/http";

const useCustomer = () => {
  
  const {
    data: customersData,
    isLoading,
    isError ,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const response = await http.get("/admin/customers");
      return response.data;
    },
  });
  return {
    customersData,
    isLoading,
    isError,
  
}      

}
export default useCustomer;
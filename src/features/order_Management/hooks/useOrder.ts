import { useQuery } from "@tanstack/react-query"
import http from "../../../services/http"


// const useOrders = ()=>{
//   const {data,isLoading, isError} = useQuery({
//     queryKey:["orders"],
//     queryFn:()=>http.get('/admin/orders')
//     .then(res=>res?.data)
   
    
//   })

//   return {data,isLoading, isError}
// }

const useOrders = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {

      try {
        const response = await http.get("/admin/orders");

        return response.data;

      } catch (error: any) {
          throw error;
      }
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export default useOrders
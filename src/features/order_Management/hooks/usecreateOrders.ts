import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";


const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-order"],

    mutationFn: async (data: any) => {
        const response = await http.post("/admin/orders", data);
    
        return response.data;
      },

    onSuccess: () => {
      message.success("Order muvaffaqiyatli qo'shildi");

      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },

    onError: (error: any) => {
      console.error(error);

      message.error(
        error?.response?.data?.message ||
          "Order qo'shishda xatolik yuz berdi"
      );
    },
  });
};

export default useCreateOrder;
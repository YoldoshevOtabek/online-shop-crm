import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-product"],

    mutationFn: async (id: string) => {
      const response = await http.delete(`/admin/products/${id}`);

      return response.data;
    },

    onSuccess: () => {
      message.success("Product deleted");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      message.error("Product o'chirishda xatolik yuz berdi");
    },
  });
};

export default useDeleteProduct;
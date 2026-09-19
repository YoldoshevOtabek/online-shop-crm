import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-product"],

    mutationFn: async (data: any) => {
      const response = await http.post("/admin/products", data);

      return response.data;
    },

    onSuccess: () => {
      message.success("Product successfully added");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      message.error("Product qo'shishda xatolik yuz berdi");
    },
  });
};

export default useCreateProduct;
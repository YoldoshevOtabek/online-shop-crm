import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-product"],

    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) => {
      const response = await http.patch(
        `/admin/products/${id}`,
        data
      );

      return response.data;
    },

    onSuccess: () => {
      message.success("Product successfully updated");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      message.error("Product yangilashda xatolik yuz berdi");
    },
  });
};

export default useUpdateProduct;
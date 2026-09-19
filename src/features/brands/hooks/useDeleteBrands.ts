import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useDeleteBrands = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-brands"],

    mutationFn: async (id: string) => {
      const response = await http.delete(`/admin/brands/${id}`);

      return response.data;
    },

    onSuccess: () => {
      message.success("Brand deleted");

      queryClient.invalidateQueries({
        queryKey: ["brands"],
      });
    },

    onError: () => {
      message.error("Brand o'chirishda xatolik yuz berdi");
    },
  });
};

export default useDeleteBrands;
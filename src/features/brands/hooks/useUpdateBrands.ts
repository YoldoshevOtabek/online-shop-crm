import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useUpdateBrands = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-brands"],

    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) => {
      const response = await http.patch(
        `/admin/brands/${id}`,
        data
      );

      return response.data;
    },

    onSuccess: () => {
      

      queryClient.invalidateQueries({
        queryKey: ["brands"],
      });
    },

    onError: () => {
      message.error("Brand yangilashda xatolik yuz berdi");
    },
  });
};

export default useUpdateBrands;
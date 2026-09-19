import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useCreateBrands = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-brands"],

    mutationFn: async (data: any) => {
      const response = await http.post("/admin/brands", data);

      return response.data;
    },

    onSuccess: () => {
     

      queryClient.invalidateQueries({
        queryKey: ["brands"],
      });
    },

    onError: () => {
      message.error("Brand qo'shishda xatolik yuz berdi");
    },
  });
};

export default useCreateBrands;
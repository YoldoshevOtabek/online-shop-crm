import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";
import type { CategoryForm } from "../types/category";



const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-category"],

    mutationFn: async (data: CategoryForm) => {
      const response = await http.post(
        "/admin/categories",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      message.success("Category successfully created");

      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
    },

    onError: (error: any) => {
        console.log("STATUS:", error?.response?.status);
        console.log("BACKEND ERROR:", error?.response?.data);
        console.log("SENT DATA:", error?.config?.data);

      message.error(
        error?.response?.data?.message ||
          "Category yaratishda xatolik"
      );
    },
  });
};

export default useCreateCategory;
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";
import type { UpdateCategoryData } from "../types/category";



const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-category"],

    mutationFn: async (data: UpdateCategoryData) => {
      const { id, ...payload } = data;

      const response = await http.patch(
        `/admin/categories/${id}`,
        payload
      );

      return response.data;
    },

    onSuccess: () => {
      message.success("Category successfully updated");

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
          "Category yangilashda xatolik"
      );
    },
  });
};

export default useUpdateCategory;
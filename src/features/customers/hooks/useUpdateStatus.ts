import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import http from "../../../services/http";

const useUpdateCustomerStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-customer-status"],

    mutationFn: async ({
      id,
      isActive,
    }: {
      id: string;
      isActive: boolean;
    }) => {
      const response = await http.patch(
        `/admin/customers/${id}/status`,
        {
          isActive,
        }
      );

      return response.data;
    },

    onSuccess: () => {
      message.success("Customer status updated");

      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },

    onError: () => {
      message.error("Status update failed");
    },
  });
};

export default useUpdateCustomerStatus;
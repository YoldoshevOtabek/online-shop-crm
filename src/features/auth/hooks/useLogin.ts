import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import http from "../../../services/http";
import { setToken } from "../utils/authStorage";

const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],

    mutationFn: (data: any) =>
      http
        .post("/admin/auth/login", data)
        .then((res) => res?.data),

    onSuccess: (res) => {
      console.log("LOGIN RESPONSE:", res);

      setToken(res.data.accessToken);
        localStorage.setItem("crmRefreshToken", res.data.refreshToken);

      navigate("/dashboard");

      message.success("Success");
    },

    onError: (error) => {
      console.log("LOGIN ERROR:", error);
      message.error("Error");
    },
  });

  return {
    mutate,
    isPending,
  };
};

export default useLogin;
import { useMutation } from "@tanstack/react-query"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
import http from "../../../services/http"

const useLogin = () => {
      const navigate = useNavigate()
    const { mutate, isPending } = useMutation({
        mutationKey: ["login"],
        mutationFn: (data:any) => http.post("/admin/auth/login", data)
        .then(res=>res?.data),
        onSuccess: (res) => {
            navigate("/dashboard")
            localStorage.setItem("crmAccessToken",res?.data.token||"")
            localStorage.setItem("crmRefreshToken",res?.data.token||"")
            message.success("Success")
        },
        onError: () => {
            message.error("Erorr")
        }
    })

    return { mutate, isPending }
}

export default useLogin

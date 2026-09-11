import { useQuery } from "@tanstack/react-query"
import http from "../../../services/http"


const useMe = ()=>{
  const {data,isLoading} = useQuery({
    queryKey:["me"],
    queryFn:()=>http.get('/admin/auth/me')
    .then(res=>res?.data)
  })

  return {data,isLoading}
}

export default useMe
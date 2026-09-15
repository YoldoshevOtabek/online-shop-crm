import http from "../../../services/http";


export const getProducts = async () => {
  const response = await http.get("/admin/orders");

  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await http.get(`/admin/orders/${id}`);

  return response.data;
};

export const createProduct = async (data: any) => {
  const response = await http.post("/admin/orders", data);

  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await http.delete(`/admin/orders/${id}`);

  return response.data;
};
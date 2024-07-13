import { adminAxiosInstance } from "./axiosInstance";

export const addProduct = async (productFormData) => {
  const data = await adminAxiosInstance.post("/addProduct", productFormData);
  console.log(data);

  return data;
};

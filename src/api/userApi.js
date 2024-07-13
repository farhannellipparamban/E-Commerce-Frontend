import { userAxiosInstance } from "./axiosInstance";

export const allProductList = async () => {
    const data = await userAxiosInstance.get("/productList");
    return data;
  };
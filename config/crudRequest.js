import { dataApi } from "./axios";

export const { data } = async () => await dataApi.get("/products");

export const postTodo = async (payload) => await dataApi.post("/products", payload);

export const patchTodo = async (payload) =>
  await dataApi.patch(`/products/${payload.id}`, payload);

export const deleteTodo = async (id) => await dataApi.post(`/products/${id}`);

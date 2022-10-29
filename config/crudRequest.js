import { usersApi } from "./axios";

export const getUsers = async () => await usersApi.get("/user");

export const postTodo = async (payload) => await usersApi.post("/products", payload);

export const patchTodo = async (payload) =>
  await usersApi.patch(`/products/${payload.id}`, payload);

export const deleteTodo = async (id) => await usersApi.post(`/products/${id}`);

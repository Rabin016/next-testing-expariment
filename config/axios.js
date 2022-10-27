import axios from "axios";

export const dataApi = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const usersApi = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": process.env.NEXT_PUBLIC_APP_ID,
  },
});

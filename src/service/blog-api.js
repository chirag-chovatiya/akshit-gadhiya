import { get } from "./api";
import { API } from "./constant/api-constant";

export const getAllBlog = async (page = 1, category = "") => {
  let endpoint = `${API.blog}?page=${page}`;
  if (category && category !== "All") {
    endpoint += `&category=${category}`;
  }
  return await get(endpoint);
};

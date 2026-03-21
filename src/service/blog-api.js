import { get } from "./api";
import { API } from "./constant/api-constant";

export async function getAllBlog() {
  return await get(API.blog);
}
export async function getBlogById(id) {
  return await get(`${API.blog}/${id}`);
}
export async function getAllCategory() {
  return await get(API.blogcategory);
}

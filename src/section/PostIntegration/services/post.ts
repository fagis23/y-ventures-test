import { POSTS } from "../types";

export const getPosts = (): Promise<POSTS[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  }).then((res) => res.json());
};

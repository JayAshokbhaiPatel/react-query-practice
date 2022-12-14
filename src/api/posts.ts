import axios from "axios";

import { BASE_SERVER_URL } from "../constant";

import { PostResponse } from "../types/api-response.types";

export const fetchPosts = async () => {
  try {
    const res = await axios.get<PostResponse[]>(`${BASE_SERVER_URL}/posts`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

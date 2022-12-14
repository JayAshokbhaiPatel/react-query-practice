import axios from "axios";
import { BASE_SERVER_URL } from "../constant";

import { ResponseData } from "../types/api-response.types";

export const fetchComments = async () => {
  try {
    const res = await axios.get<ResponseData[]>(`${BASE_SERVER_URL}/comments`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

export const fetchSingleComment = async (commentID: string | undefined) => {
  try {
    const res = await axios.get<ResponseData>(
      `${BASE_SERVER_URL}/comments/${commentID}`
    );

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

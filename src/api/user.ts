import axios from "axios";
import { BASE_SERVER_URL } from "../constant";

import { UsersAPIResponse } from "../types/api-response.types";

// fetch all users
export const fetchUsers = async () => {
  try {
    const res = await axios.get<UsersAPIResponse[]>(`${BASE_SERVER_URL}/users`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

// get single users details based on ID
export const fetchSingleUser = async (emailID: string) => {
  try {
    const res = await axios.get<UsersAPIResponse>(
      `${BASE_SERVER_URL}/users/${emailID}`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

import axios from "axios";
import { BASE_SERVER_URL } from "../constant";

import {
  ColorAPIResponse,
  AddColorRequestBody,
} from "../types/api-response.types";

// to fetch all colors
export const fetchColors = async () => {
  try {
    const res = await axios.get<ColorAPIResponse[]>(
      `${BASE_SERVER_URL}/colors`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

// to get paginated response from colors api
export const fetchPaginatedColors = async (currentPage: number) => {
  try {
    const res = await axios.get<ColorAPIResponse[]>(
      `${BASE_SERVER_URL}/colors?_limit=5&_page=${currentPage}`
    );

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

// to add new color
export const addColors = async (body: AddColorRequestBody) => {
  try {
    const res = await axios.post(`${BASE_SERVER_URL}/colors`, body);
    if (res.status === 201 && res.statusText === "Created") {
      console.log("Color added successfully", res.data);
    }
  } catch (err) {
    throw err;
  }
};

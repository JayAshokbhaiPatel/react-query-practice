import axios from "axios";
import { useInfiniteQuery } from "react-query";

import { BASE_SERVER_URL } from "../constant";
import { ColorAPIResponse } from "../types/api-response.types";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get<ColorAPIResponse[]>(
    `${BASE_SERVER_URL}/colors?_limit=3&_page=${pageParam}`
  );
};

function useInfinite() {
  return useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
}

export default useInfinite;

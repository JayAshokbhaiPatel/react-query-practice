import { useQuery } from "react-query";

import { fetchComments } from "../api";

function useComments() {
  return useQuery("comments", fetchComments);
}

export default useComments;

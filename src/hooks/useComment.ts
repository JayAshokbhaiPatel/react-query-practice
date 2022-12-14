import { useQuery } from "react-query";

import { fetchSingleComment } from "../api";

function useComment(commentID: string | undefined) {
  // query key in string and second argument in commentID unique ID
  return useQuery(["comment", commentID], () => fetchSingleComment(commentID));
}

export default useComment;

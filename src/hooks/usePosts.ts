import { useQuery } from "react-query";

import { fetchPosts } from "../api";

function usePosts() {
  return useQuery("posts", fetchPosts);
}

export default usePosts;

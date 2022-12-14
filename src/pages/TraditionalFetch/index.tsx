import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_SERVER_URL } from "../../constant";

import type { ResponseData } from "../../types/api-response.types";

function TraditionalFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setIsData] = useState<ResponseData[]>([]);

  useEffect(() => {
    axios.get(`${BASE_SERVER_URL}/comments`).then((res) => {
      setIsData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <p>Traditional Way to fetch data</p>

      <div>
        {data.map((comment) => (
          <div key={comment.postId}>
            <p>Post No : {comment.postId}</p>
            <p>Post Data : {comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TraditionalFetch;

import { Link } from "react-router-dom";

import { useComments } from "../../hooks";

function Comments() {
  const { data, isError, error } = useComments();

  if (isError) {
    // ! fix this typescript error
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <>
        {data?.map((comment) => (
          <div key={comment.postId}>
            <p>Post No : {comment.postId}</p>
            <p>Post Data : {comment.body}</p>
            <Link to={`/comments/${comment.postId}`}>Go to Comments</Link>
          </div>
        ))}
      </>
    </div>
  );
}
export default Comments;

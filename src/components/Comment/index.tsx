import { useComment } from "../../hooks";
import { useParams } from "react-router-dom";

function Comment() {
  const { id } = useParams();

  const { data, isError, error } = useComment(id);

  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <>
      <p>Single Comments By ID</p>

      <p>Post Id : {data?.postId}</p>
      <p>Post Data : {data?.body}</p>
    </>
  );
}

export default Comment;

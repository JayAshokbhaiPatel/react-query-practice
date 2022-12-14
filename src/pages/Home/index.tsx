import { useComments, usePosts } from "../../hooks";

function Home() {
  // this is the example of parallel queries
  const { data: commentsData } = useComments();
  const { data: postData } = usePosts();

  return (
    <div>
      <p>Posts Data</p>
      {commentsData?.map((comment) => (
        <div key={comment.postId}>
          <p>{comment.postId}</p>
          <p>{comment.body}</p>
        </div>
      ))}

      <p>Post Data</p>
      {postData?.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

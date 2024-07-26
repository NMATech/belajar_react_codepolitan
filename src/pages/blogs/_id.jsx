import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post = useLoaderData();

  return (
    <>
      <h3>{post?.title}</h3>
      <h4>{post?.body}</h4>
    </>
  );
}

export default SinglePost;

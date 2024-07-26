import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const externalPost = useLoaderData();

  return (
    <>
      <h2>My Blog</h2>
      {externalPost.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/blog/${item.id}`}>-- {item.title}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Blog;

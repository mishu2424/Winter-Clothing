import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const { blogs } = useLoaderData();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gen|Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="space-y-3 my-3">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;

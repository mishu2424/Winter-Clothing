import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const {blogs} = useLoaderData();

    return (
        <div className="space-y-3 my-3">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }        
        </div>
    );
};

export default Blogs;
const Blog = ({blog}) => {
    return (
        <div className="group max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="group-hover:scale-115 duration-[1200ms] w-full h-[450px] object-cover object-top"
          />
          <div className="absolute top-2 left-2 bg-transparent text-white px-3 py-1 text-sm font-bold rounded">
            {new Date(blog.date_published).getDate()} /{" "}
            {new Date(blog.date_published).toLocaleString("en-US", {
              month: "short",
            }).toUpperCase()}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <p className="text-gray-600 text-sm">
            By{" "}
            <a href={blog.author.profile_url} className="text-blue-500">
              {blog.author.name}
            </a>{" "}
            | {blog.comments.count} comments
          </p>
          <p className="mt-4 text-gray-700">{blog.description}</p>
          <a
            href={blog.read_more_link}
            className="inline-block mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            READ MORE
          </a>
        </div>
      </div>
    );
};

export default Blog;
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  console.log(blogId)
  const blogCollections = useLoaderData();
  console.log(blogCollections)
  const SelectedCollection = blogCollections.blogs.find(
    (selectedProduct) => selectedProduct.id ===blogId
  );
  console.log(blogId, SelectedCollection)
  return (
    <div className="max-w-5xl my-2 h-[400px] mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left Section - Blog Info */}
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {SelectedCollection?.title}
          </h2>
          <p className="text-gray-700 mt-2">
            {SelectedCollection?.description}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            <strong>Latest Comment:</strong> "
            {SelectedCollection?.comments?.latest_comment}"
          </p>
          <p className="text-gray-500 text-xs mt-2">
            💬 {SelectedCollection?.comments.count} Comments | 👀{" "}
            {SelectedCollection?.views} Views | ❤️ {SelectedCollection?.likes}{" "}
            Likes
          </p>
        </div>
        <a
          href={SelectedCollection?.read_more_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition"
        >
          Read More
        </a>
      </div>

      {/* Right Section - Blog Image */}
      <div className="md:w-1/3">
        <img
          src={SelectedCollection?.featured_image}
          alt={SelectedCollection?.title}
          className="w-full h-48 md:h-full object-cover"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/300?text=Image+Not+Found")
          }
        />
      </div>
    </div>
  );
};

export default BlogDetails;

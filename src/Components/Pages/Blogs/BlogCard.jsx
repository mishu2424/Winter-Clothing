import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
  const [hovered, setHovered] = useState(false)
    return (
        <div 
        onMouseOver={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        className="lg:max-w-sm h-[500px] lg:h-96 rounded-lg overflow-hidden border border-gray-300 bg-white flex flex-col relative">
      {/* Image */}
      <div className="relative">
      <img className={`w-full h-60 lg:h-48 object-cover object-top ${hovered && 'brightness-75'}`} src={blog?.featured_image} alt={blog?.title} />
      {
        hovered && <div className="absolute top-1/2 left-[38%] duration-500">
          <Link to={`/blog/${blog.id}`} className="btn bg-transparent rounded-none text-white border border-white">Details <GoArrowUpRight /></Link>
        </div>
      }
      </div>
      
      {/* Content */}
      <div className="p-4 grow">
        <h2 className="text-lg font-semibold">{blog?.title}</h2>
        <p title={blog?.description} className="text-gray-600 text-sm">{`${blog?.description.substring(1,100)}...`}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-between p-4 border-t text-blue-500 text-sm">
        <a href="#" className="hover:underline">
          SHARE
        </a>
        <a href={blog?.read_more_link} className="hover:underline">
          LEARN MORE
        </a>
      </div>
    </div>
    );
};

export default BlogCard;
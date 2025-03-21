import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Article = ({ article, source }) => {
  const { id, title, image, description } = article;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="group w-auto md:max-w-full rounded-none border border-gray-200 flex flex-col p-2"
    >
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt=""
          className={`group-hover:scale-110 duration-500 object-cover object-center w-full h-60 bg-gray-500 ${
            hovered && "brightness-75"
          }`}
        />
        {hovered && source === "articles" && (
          <div className="absolute top-[40%] left-[35%] duration-500">
            <Link
              to={`/article/${id}`}
              className="btn bg-transparent rounded-none text-white border border-white"
            >
              Article <GoArrowUpRight />
            </Link>
          </div>
        )}
        {hovered && source === "home" && (
          <div className="absolute top-[40%] left-[35%] duration-500">
            <Link
              to={`/product/${id}`}
              className="btn bg-transparent rounded-none text-white border border-white"
            >
              Details <GoArrowUpRight />
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between space-y-8 flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
          <p className="">{description}</p>
        </div>
        {source === "home" && (
          <Link
          to={`/product/${id}`}
            className="btn px-5 py-2.5 relative rounded-none group overflow-hidden font-medium bg-purple-50 text-black inline-block flex items-center justify-center w-full p-3 tracking-wide border"
            fdprocessedid="j5rt65"
          >
            {/* Background Overlay (Moves from Bottom to Top) */}
            <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-full bg-red-600 group-hover:h-full group-hover:translate-y-0 opacity-90"></span>

            {/* Button Text */}
            <span className="relative group-hover:text-white">Shop Now</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Article;

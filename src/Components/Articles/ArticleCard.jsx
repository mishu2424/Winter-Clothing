import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    const {id, title, image, description} = article
  return (
    <div className={`w-full h-[300px] shadow-md relative flex flex-col items-start justify-end`} style={{
        backgroundImage: `url(${image})`,   // Dynamically setting the background image
        backgroundSize: 'cover',            // Ensures the image covers the whole div
        backgroundPosition: 'center',       // Centers the background image
      }}>
        <div className="text-white font-jost flex flex-col p-3 space-y-2">
            <h1 className="text-base font-extrabold text-start">{title}</h1>
            <p className="text-xs font-bold opacity-90 px-0">{description}</p>
            <Link
              to={`/article/${id}`}
              className="btn w-fit px-5 py-2.5 relative rounded-none bg-transparent group overflow-hidden font-medium text-white inline-block"
            >
              {/* Background Overlay (Moves from Bottom to Top) */}
              <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-full bg-red-600 group-hover:h-full group-hover:translate-y-0 opacity-90"></span>

              {/* Button Text */}
              <span className="relative group-hover:text-white">Read Article</span>
            </Link>
        </div>
      {/* <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="mb-0 capitalize text-gray-100"
          >
            {author}
          </a>
        </div>
        <a rel="noopener noreferrer" href="#">
          {publish_date}
        </a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-none h-96 bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>{reading_time}</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-violet-400">
              {title}
            </h3>
          </a>
          <p className="leading-snug text-gray-400">
             {description}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ArticleCard;

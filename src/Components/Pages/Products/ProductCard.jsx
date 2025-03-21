import React, { useState } from "react";
import { FiHeart, FiMaximize, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="w-full rounded-lg overflow-hidden relative bg-white cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <img
            src={hovered ? product.thumbnail_img : product.image}
            alt={product.title}
            className={`w-full h-72 object-cover transition-opacity duration-300 ${
              hovered &&
              "transition duration-300 ease-in-out hover:brightness-75 opacity-95"
            }`}
          />
          {hovered && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white p-1 rounded-lg shadow-md duration-500">
              <button className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FiShoppingBag />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FiHeart />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FiMaximize />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                <FiSearch />
              </button>
            </div>
          )}
          {hovered && (
            <>
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Click to Show Details!"
                className="absolute top-[45%] left-[30%] duration-500"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="btn bg-transparent rounded-none text-white border border-white"
                >
                  Show Details
                </Link>
              </div>
              <Tooltip className="duration-500" id="my-tooltip" />
            </>
          )}
          {product.isSale && (
            <div className="bg-red-500 text-white rounded-full text-xs font-bold px-2 py-1 absolute top-2 left-2">
              -{product.sale}
            </div>
          )}
          {product.is_new && (
            <div className="bg-black text-white rounded-full text-xs font-bold px-2 py-1 absolute top-2 right-2">
              New
            </div>
          )}
        </div>
        <div className="p-4 text-center relative">
          {product.status === "In Stock" && (
            <h6 className="text-xs font-semibold text-start absolute right-2 top-0 text-green-400">
              {product.status}
            </h6>
          )}
          {product.status === "Out of Stock" && (
            <h6 className="text-xs font-semibold text-start absolute right-2 top-0 text-red-400">
              Sold Out
            </h6>
          )}
          {product.status === "Limited Stock" && (
            <h6 className="text-xs font-semibold text-start absolute right-2 top-0 text-yellow-400">
              Limited
            </h6>
          )}
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <div className="flex justify-center space-x-1 text-gray-400 text-xs mt-1">
            <ReactStars
              count={5}
              size={14}
              isHalf={true}
              value={product.rating || 0}
              emptyIcon={
                <FontAwesomeIcon icon={faStar} className="text-gray-400" />
              } // Empty stars
              halfIcon={
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-yellow-400"
                />
              } // Half stars
              filledIcon={
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              } // Full stars
              activeColor="#ffd700"
            />
          </div>
          <div className="mt-2">
            {product.isSale ? (
              <>
                <span className="text-red-500 font-bold text-md">
                  $
                  {(
                    product.price -
                    (product.price *
                      Number(product.sale.split(" ")[0].split("%")[0])) /
                      100
                  ).toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-sm ml-2">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-gray-700 font-bold text-md">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

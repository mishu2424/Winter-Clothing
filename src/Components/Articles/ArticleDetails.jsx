import { FaBook, FaEye, FaUser } from "react-icons/fa";
import { FcLike, FcReading } from "react-icons/fc";
import { MdStarRate } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const ArticleDetails = () => {
  const { articleId } = useParams();
  console.log(articleId);
  const articleCollections = useLoaderData();
  console.log(articleCollections);
  const SelectedCollection = articleCollections.find(
    (selectedArticle) => selectedArticle.id === Number(articleId)
  );
  console.log(SelectedCollection);
  return (
    <div className="grid grid-cols-12 gap-3 max-w-4xl mx-auto">
      <div className="col-span-12 lg:col-span-6 h-[500px]">
        <img
          className="h-full w-full object-cover"
          src={SelectedCollection?.thumbnail_img}
          alt=""
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="p-2 space-y-4">
          <div className="py-2 space-y-3">
            <h2 className="text-xl font-bold">{SelectedCollection?.title}</h2>
            <span className="text-base flex items-center gap-2">
              <span className="font-semibold flex items-center gap-2">
                <FaUser /> By:
              </span>{" "}
              {SelectedCollection?.author}
            </span>
            <p className="text-base">{SelectedCollection?.description}</p>
          </div>
          <hr />
          <div className="">
            <p className="text-base">
              <span className="font-semibold">Published on:</span>{" "}
              {SelectedCollection?.publish_date}
            </p>
            <p className="text-base flex gap-2 items-center">
              <FcReading />{" "}
              <span className="font-semibold"> Reading time:</span>{" "}
              {SelectedCollection?.reading_time}
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <span className="font-semibold">Tags:</span>
            {SelectedCollection?.tags.map((tag, idx) => (
              <span key={idx}>#{tag}</span>
            ))}
          </div>
          <hr />

          <div>
            <p className="text-base flex gap-2 items-center "><FaBook /> <span className="font-bold w-24">Total Pages: </span>{SelectedCollection?.total_pages}</p>
          </div>
          <div>
            <p className="text-base flex gap-2 items-center "><FaEye /><span className="font-bold w-20">Views: </span>{SelectedCollection?.views}</p>
          </div>
          <div>
            <p className="text-base flex gap-2 items-center"><FcLike /><span className="font-bold w-20">Likes: </span>{SelectedCollection?.likes}</p>
          </div>
          <div>
            <p className="text-base flex gap-2 items-center"><MdStarRate /><span className="font-bold w-20">Rating: </span>{SelectedCollection?.rating}
            <ReactStars
                          count={5}
                          size={14}
                          isHalf={true}
                          value={SelectedCollection.rating || 0}
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

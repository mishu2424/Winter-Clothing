import { useEffect, useState } from "react";
import Article from "../Articles/Article";
import { Link } from "react-router-dom";

const ShowCategories = ({ categoryTitle, source }) => {
  const [selectedItems, setItems] = useState([]);
  useEffect(() => {
    fetch("/ClothesDt.JSON")
      .then((res) => res.json())
      .then((items) => {
        const filteredDt = items.filter(
          (item) => item.category.toLowerCase() === categoryTitle.toLowerCase()
        );
        console.log(filteredDt);
        setItems(filteredDt.slice(0, 4));
      });
  }, [categoryTitle]);
  return (
    <div className="max-w-7xl mx-auto my-3 flex flex-col justify-center ">
       <h2 className="text-2xl font-extrabold text-start">{categoryTitle.charAt(0).toUpperCase()+categoryTitle.slice(1).toLowerCase()}</h2> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {selectedItems.map((article) => (
          <Article key={article.id} article={article} source={source}></Article>
        ))}
      </div>
      {
        categoryTitle==='men' && <Link to={`/products/men`} className="btn w-48 mx-auto my-3 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500">See More</Link>
      }
      {
        categoryTitle==='women' && <Link to={`/products/women`} className="btn w-48 mx-auto my-3 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500">See More</Link>
      }
      {
        categoryTitle==='kids' && <Link to={`/products/kids`} className="btn w-48 mx-auto my-3 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500">See More</Link>
      }
    </div>
  );
};

export default ShowCategories;

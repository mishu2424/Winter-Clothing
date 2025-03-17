import { useEffect, useState } from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/ArticlesDt.JSON")
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, 4)));
  }, []);
  return (
    <div className="text-center max-w-7xl mx-auto space-y-3">
      <h2 className="text-2xl font-extrabold text-start">Best Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {articles.map((article) => (
          <Article key={article.id} article={article} source="articles"></Article>
        ))}
      </div>
      <Link to='/articles' className="btn w-48 mx-auto my-3 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500">Read More</Link>
    </div>
  );
};

export default Articles;

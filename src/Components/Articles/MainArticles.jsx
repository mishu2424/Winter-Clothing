
import ArticleCard from "./ArticleCard";
import { useLoaderData } from "react-router-dom";

const MainArticles = () => {
  const articles = useLoaderData();
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch("/ArticlesDt.JSON")
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data));
  // }, []);
  return (
    <div className="text-center max-w-7xl mx-auto space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default MainArticles;

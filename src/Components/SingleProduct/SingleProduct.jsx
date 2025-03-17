import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Pages/Products/ProductCard";

const SingleProduct = () => {
    const {productCategory} = useParams();
    console.log(productCategory)
    const items = useLoaderData();
    const filteredItems = items.filter(item=> item.category.toLowerCase() === productCategory.toLowerCase())
    console.log(filteredItems);
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-3 font-jost">
            {
                filteredItems.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default SingleProduct;
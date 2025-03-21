import { useLoaderData } from "react-router-dom";
import ProductCard from "../Pages/Products/ProductCard";

const AllProducts = () => {
    const products = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-3 font-jost">
            {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;
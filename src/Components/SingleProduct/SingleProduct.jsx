import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Pages/Products/ProductCard";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const SingleProduct = () => {
    const [loading, setLoading] = useState(false);
    const [selectedItems, setItems] = useState([]);
    const {productCategory} = useParams();
    // console.log(productCategory)
    const items = useLoaderData();
    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            let filteredItems=[];
            if(productCategory==='sales'){
                filteredItems= items.filter(item=>item.isSale===true);
            }else{
                filteredItems = items.filter(item=> item.category.toLowerCase() === productCategory.toLowerCase())
            }
            setItems(filteredItems)
            setLoading(false)
        }, 2000);
    },[productCategory])
    // console.log(filteredItems);
    return (
        <div>
            
                {
                    loading && <div className="flex items-center justify-center my-3">
                        <ClipLoader
                    className="mx-auto"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                    </div>
                }
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-3 font-jost">
            {
                !loading && 
                    selectedItems.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                
            }
        </div>
        </div>
    );
};

export default SingleProduct;
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Products from "../Components/Pages/Products/Products";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Donations from "../Components/Pages/Donations/Donations";
import Articles from "../Components/Articles/Articles";
import MainArticles from "../Components/Articles/MainArticles";
import AllProducts from "../Components/AllProducts/AllProducts";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import ArticleDetails from "../Components/Articles/ArticleDetails";
import ProductDetails from "../Components/Pages/Products/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/products',
                element:<Products></Products>,
                children:[
                    {
                        index:true,
                        element:<AllProducts></AllProducts>,
                        loader:()=>fetch('/ClothesDt.JSON'),
                    },
                    {
                        path:':productCategory',
                        element:<SingleProduct></SingleProduct>,
                        loader:()=>fetch('/ClothesDt.JSON'),
                    }
                ]
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
                loader:()=>fetch('/blogsDt.JSON'),
            },
            {
                path:'/donation',
                element:<Donations></Donations>
            },
            {
                path:'/articles',
                element:<MainArticles></MainArticles>,
                loader:()=>fetch('/ArticlesDt.JSON'),
            },
            {
                path:'/article/:articleId',
                element:<ArticleDetails></ArticleDetails>,
                loader:()=>fetch('/ArticlesDt.JSON'),
                
            },
            {
                path:'/product/:productId',
                element:<ProductDetails></ProductDetails>,
                loader:()=>fetch('/ClothesDt.JSON'),
                
            },
        ]
    }
])

export default router;
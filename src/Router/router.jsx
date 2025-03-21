import { createBrowserRouter, Navigate } from "react-router-dom";
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
import BlogDetails from "../Components/Pages/Blogs/BlogDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Authentication/Login";
import Authentication from "../Components/Authentication/Authentication";
import Register from "../Components/Authentication/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ForgetPass from "../Components/Authentication/ForgetPass";
import UserProfile from "../Components/UserProfile/UserProfile";
import UpdateProfile from "../Components/Authentication/UpdateProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRoute><MainArticles></MainArticles></PrivateRoute>,
                loader:()=>fetch('/ArticlesDt.JSON'),
            },
            {
                path:'/article/:articleId',
                element:<PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
                loader:()=>fetch('/ArticlesDt.JSON'),
                
            },
            {
                path:'/product/:productId',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:()=>fetch('/ClothesDt.JSON'),
                
            },
            {
                path:'/blog/:blogId',
                element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader:()=>fetch('/blogsDt.JSON'),
                
            },
        ]
    },
    {
        path:'/auth',
        element:<Authentication></Authentication>,
        children:[
            {
                index:true,
                element:<Navigate to="/auth/login"></Navigate>
            },
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
            {
                path:'/auth/forgetPassword',
                element:<ForgetPass></ForgetPass>
            },
            {
                path:'/auth/profile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/auth/updatedProfile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
])

export default router;
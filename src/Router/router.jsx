import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Products from "../Components/Pages/Products/Products";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Donations from "../Components/Pages/Donations/Donations";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/donation',
                element:<Donations></Donations>
            }
        ]
    }
])

export default router;
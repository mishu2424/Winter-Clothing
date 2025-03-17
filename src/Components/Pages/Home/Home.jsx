import About from "../../About/About";
import Articles from "../../Articles/Articles";
import Banner from "../../Banner/Banner";
import Delivery from "../../Delivery/Delivery";
import Footer from "../../Footer/Footer";
import SaleMarquee from "../../Marquee/SaleMarquee";
import ShowCategories from "../../ShowCategories/ShowCategories";
import Blogs from "../Blogs/Blogs";
import ShowBlogs from "../Blogs/ShowBlogs";

const Home = () => {
    return (
        <div>
            <SaleMarquee></SaleMarquee>
            <Banner></Banner>
            <About></About>
            <Articles></Articles>
            <ShowCategories categoryTitle={'men'} source="home"></ShowCategories>
            <ShowCategories categoryTitle={'women'} source="home"></ShowCategories>
            <ShowCategories categoryTitle={'kids'} source="home"></ShowCategories>
            <ShowBlogs></ShowBlogs>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;
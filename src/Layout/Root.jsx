import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();
  console.log(location)
  useEffect(()=>{
    if(location.pathname==='/') location.pathname='/home';
    // document.title = `Gen|${location.pathname.split('/')[1].charAt(0).toUpperCase()+location.pathname.split('/')[1].slice(1).toLowerCase()}`;
    const str=location.pathname;
    if (str.startsWith('/')) {
      const firstSlashIndex = str.indexOf('/') + 1;  // Find the position after the first slash
      const capitalizedPart = str.charAt(firstSlashIndex).toUpperCase() + str.slice(firstSlashIndex + 1);
      document.title=`Gen|${capitalizedPart}`
    }
  },[location])
  return (
    <div className="font-jost">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-374px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

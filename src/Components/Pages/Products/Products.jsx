import { NavLink, Outlet } from "react-router-dom";
import Delivery from "../../Delivery/Delivery";
import SaleMarquee from "../../Marquee/SaleMarquee";

const Products = () => {
  return (
    <div className="">
      <SaleMarquee></SaleMarquee>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-2">
        <NavLink
          end
          to="/products"
          className={({ isActive }) =>
            `relative px-8 text-sm transition-all ${
              isActive
                ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : ""
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm border border-transparent cursor-pointer">
            All
          </button>
        </NavLink>
        <NavLink
          to="men"
          className={({ isActive, isPending }) =>
            `relative px-8 text-sm transition-all ${
              isPending
                ? "pending"
                : isActive
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : "border-transparent"
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm cursor-pointer">Men</button>
        </NavLink>

        <NavLink
          to="women"
          className={({ isActive, isPending }) =>
            `relative px-8 text-sm transition-all ${
              isPending
                ? "pending"
                : isActive
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : "border-transparent"
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm cursor-pointer">Women</button>
        </NavLink>

        <NavLink
          to="kids"
          className={({ isActive, isPending }) =>
            `relative px-8 text-sm transition-all ${
              isPending
                ? "pending"
                : isActive
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : "border-transparent"
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm cursor-pointer">Kids</button>
        </NavLink>

        <NavLink
          to="unisex"
          className={({ isActive, isPending }) =>
            `relative px-8 text-sm transition-all ${
              isPending
                ? "pending"
                : isActive
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : "border-transparent"
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm cursor-pointer">Unisex</button>
        </NavLink>

        <NavLink
          to="sales"
          className={({ isActive, isPending }) =>
            `relative px-8 text-sm transition-all ${
              isPending
                ? "pending"
                : isActive
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-red-500"
                : "border-transparent"
            }`
          }
        >
          <button className="btn-sm rounded-full px-8 py-2 text-sm cursor-pointer">Sale</button>
        </NavLink>
      </div>
      <Outlet></Outlet>
      <Delivery></Delivery>
    </div>
  );
};

export default Products;

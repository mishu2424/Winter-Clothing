import { NavLink, Outlet } from "react-router-dom";
import Delivery from "../../Delivery/Delivery";

const Products = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
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
          <button className="btn-sm rounded-full px-8 py-2 text-sm border border-transparent">
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
          <button className="btn-sm rounded-full px-8 py-2 text-sm">Men</button>
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
          <button className="btn-sm rounded-full px-8 py-2 text-sm">Women</button>
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
          <button className="btn-sm rounded-full px-8 py-2 text-sm">Kids</button>
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
          <button className="btn-sm rounded-full px-8 py-2 text-sm">Unisex</button>
        </NavLink>
      </div>
      <Outlet></Outlet>
      <Delivery></Delivery>
    </div>
  );
};

export default Products;

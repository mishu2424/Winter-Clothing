import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          } to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          } to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          } to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          } to="/donation">Donation Campaign</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          } to="/articles">Articles</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent md:px-16 lg:px-52 font-jost">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-6" src="/glogo.png" alt="" />
          <a className="btn btn-ghost text-2xl font-extrabold font-bebas">Gen Clothes</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="dropdown dropdown-end navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <FaUserCircle className="w-full h-full" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-28 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

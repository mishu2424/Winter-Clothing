import React, { useContext, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const { user, userSignOut, setTheme, theme } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => console.log(error.page));
  };
  useEffect(() => {
    document.title = "Gen|Home";
  }, [location]);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          }
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
          }
          to="/donation"
        >
          Donation Campaign
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
            }
            to="/articles"
          >
            Articles
          </NavLink>
        </li>
      )}
    </>
  );
  useEffect(() => {
    const LTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", LTheme);
    setTheme(LTheme);
    // Set the toggle switch based on theme
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.checked = LTheme === "night";
    }
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      // console.log(e.target.checked);
      setTheme("night");
      localStorage.setItem("theme", "night");
    } else {
      // console.log(e.target.checked);
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="navbar bg-transparent md:px-16 lg:px-52 font-jost">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gen|Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          <a className="btn btn-ghost text-2xl font-extrabold font-bebas">
            Gen Clothes
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                user?.photoURL ? 
                <img src={user.photoURL}></img> : <FaUserCircle className="w-full h-full" />
              ) : (
                <FaUserCircle className="w-full h-full" />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <Link to={`/auth/profile`} className="justify-between">
                    My Profile
                  </Link>
                </li>
                <li>
                  <a className="justify-between">{user?.email && user.email}</a>
                </li>
                <li>
                  <a className="justify-between">
                    {user?.displayName && user.displayName}
                  </a>
                </li>
                <li>
                  <button onClick={handleSignOut} className="btn rounded-none">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <Link to={`/auth/login`}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <label className="toggle text-base-content">
          <input
            onChange={handleTheme}
            type="checkbox"
            value="synthwave"
            className="theme-controller"
            id="theme-toggle"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

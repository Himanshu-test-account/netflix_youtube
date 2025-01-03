import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

function NavBar() {
  const hoverClass = "hover:text-subMain transitions text-white";

  return (
    <div className="bg-main shadow-md">
      <div className="container bg-dry mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        {/* Logo Section */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="w-full h-12 object-contain" />
          </Link>
        </div>

        {/* Search Form */}
        <div className="col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex justify-between items-center gap-4">
            <button type="submit" className="bg-subMain w-12 flex-colo h-12 rounded text-white">
              <FaSearch size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Search Movie Name from here" 
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black" 
            />
          </form>
        </div>

        {/* Navigation Links */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'text-subMain' : hoverClass)}>
            Movies
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'text-subMain' : hoverClass)}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'text-subMain' : hoverClass)}>
            Contact Us
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-subMain' : hoverClass)}>
            <CgUser className="w-8 h-8" />
          </NavLink>
          <NavLink to="/favourite" className={({ isActive }) => (isActive ? 'text-subMain relative' : `${hoverClass} relative`)}>
            <FaHeart className="w-6 h-6" />
            <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
              3
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

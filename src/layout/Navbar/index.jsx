import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.scss";
import NavbarMobile from "../../components/NavbarComponents/NavbarMobile";

const Navbar = () => {
  
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
    <div id="navbar" className="relative">
      <div className="flex items-center justify-between pt-5 pb-3 wrapper">
        <div>
          <NavLink to={"/"}>
            <h2 className="font-bold tracking-wide text-[25px]">Exclusive</h2>
          </NavLink>
        </div>

        <div className="lg:flex gap-8 hidden">
          <NavLink className="" to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/signUp"}>Sign Up</NavLink>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          <div className="search_inp  sm:bg-gray">
            <input
              type="text"
              className="bg-gray hidden sm:block "
              placeholder="What are you looking for?"
            />
            <IoSearch className="search_icon" size={24} />
          </div>
          <NavLink to={"/wishlist"} className="center">
            <button>
              <GoHeart size={24} />
            </button>
          </NavLink>
          <NavLink to={"/cart"} className="center">
            <button>
              <AiOutlineShoppingCart size={24} />
            </button>
          </NavLink>
          <button>
            <HiMiniBars3 className="lg:hidden" size={24} />
          </button>
        </div>
      </div>
 
      <NavbarMobile isOpen={isOpen} handleOpenSidebar={handleOpenSidebar} />
    </div>
  );
};

export default Navbar;

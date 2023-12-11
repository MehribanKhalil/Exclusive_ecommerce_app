import React from "react";
import { NavLink } from "react-router-dom";
const NavbarMobile = ({handleOpenSidebar, isOpen}) => {
  return (
    <div className={`${isOpen ? 'active': ''} fixed min-h-screen bg-red flex items-center pl-5 w-[300px] right-0 top-0 `}>
      <div className="">
        <div className="nav-close absolute top-2 right-2 cursor-pointer" onClick={handleOpenSidebar}>
            <span>X</span>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/signUp"}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;

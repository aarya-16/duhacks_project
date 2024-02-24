import React from "react";
import Button from "./Button.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src="/vite.svg" alt="Vite" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal text-[16px] mr-10 text-black">
          <NavLink to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="font-poppins font-normal text-[16px] mr-10 text-black">
          <NavLink to="/login" activeClassName="active-link">
            Chat
          </NavLink>
        </li>
        <li className="font-poppins font-normal text-[16px] mr-10 text-black">
          <NavLink to="/resources" activeClassName="active-link">
            Resources
          </NavLink>
        </li>
        <li className="font-poppins font-normal text-[16px] mr-10 text-black">
          <NavLink to="/about" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li className="font-poppins font-normal text-[16px] mr-10 text-black">
          <Button text="Login" styles="mt-0" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

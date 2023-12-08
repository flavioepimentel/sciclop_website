import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import  DropdownComponent  from './DropdownComponent';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar bg-black-gradiente ">
      <a href='/Home'>
      <img src={logo} alt="Sciclope" className="w-40 h-10 ml-6" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <>
          <li
            key={nav.id}
            className={`li__navbar font-poppins font-normal cursor-pointer text-[16px] text-white mr-8`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        </>
        ))}
            <li className={`li__navbar font-poppins font-normal cursor-pointer text-[16px] text-white`}>

            <DropdownComponent />
            </li>

          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mx-6`}>
          <a href="https://frotas-erp.bubbleapps.io/version-test/" >Login</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`li__navbar font-poppins font-medium cursor-pointer text-[16px] text-white
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className={`li__navbar  font-poppins font-normal cursor-pointer text-[16px] text-white`}>

            <DropdownComponent />
            </li>
    
            <li className={`li__navbar font-poppins font-normal cursor-pointer text-[16px] text-white`}>
          <a href="https://frotas-erp.bubbleapps.io/version-test/" >Login</a>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

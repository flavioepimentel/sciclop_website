import { useState } from "react";

import { navLinks } from "../constants";
import MegaMenu from "./MegaMenu";
import LoginButton from "./LoginButton";
import NavButtons from "./NavButtons";
import DropdownMobile from "./DropdownMobile";

const close = `${import.meta.env.VITE_APP_STATIC}/close.webp`
const logo = `${import.meta.env.VITE_APP_STATIC}/siclope_logo.svg`
const menu = `${import.meta.env.VITE_APP_STATIC}/menu.webp`


const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-3 justify-between items-center navbar bg-black-navbar ">
			<a href="/Home">
				<img src={logo} alt="Sciclope" className="w-40 h-10 ml-6" />
			</a>

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				<NavButtons />
				<MegaMenu />
				<LoginButton />
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center mr-6">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] ml-6 object-contain"
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-black-navbar  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar fixed dropdown_mobile z-1001`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col  z-1001">
						<NavButtons />
						<DropdownMobile />
						<li
							key={"login"}
							className={`font-poppins font-normal cursor-pointer text-[1rem] text-white mx-6 `}>
							<a href="https://frotas-erp.bubbleapps.io/version-test/"> Login </a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

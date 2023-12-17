import { useState } from "react";

import { navLinks } from "../constants";
import MegaMenu from "./MegaMenu";
import LoginButton from "./LoginButton";
import NavButtons from "./NavButtons";

const close = `${import.meta.env.VITE_APP_STATIC}/close.webp`
const logo = `${import.meta.env.VITE_APP_STATIC}/siclope_logo.svg`
const menu = `${import.meta.env.VITE_APP_STATIC}/menu.webp`


const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-3 justify-between items-center navbar bg-black-gradiente ">
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
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar absolute z-1001`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col absolute z-1001">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-medium cursor-pointer text-[1rem] text-white absolute z-1001
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`${nav.id}`}>{nav.title}</a>
							</li>
						))}
						<li
							key={"dropdown"}
							className={` font-poppins font-normal cursor-pointer text-[1rem] text-white`}
						>
							{/* <MegaMenu /> */}
						</li>

						<li
							key={"login"}
							className={` font-poppins font-normal cursor-pointer text-[1rem] text-white `}
						>
							<a href="https://frotas-erp.bubbleapps.io/version-test/">Experimente Grátis</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

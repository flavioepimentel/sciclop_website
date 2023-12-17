import { navLinks } from "../constants";


const NavButton = () => {
    return (
        <>
        {navLinks.map((nav) => (
		    <li
		    	key={nav.id}
		    	className={`font-poppins font-normal cursor-pointer text-[1rem] text-white mx-8`}
		    	onClick={() => setActive(nav.title)}
		    >
		    	<a href={`${nav.id}`}>{nav.title}</a>
		    </li>
			))}
        </>
    )
}

export default NavButton;
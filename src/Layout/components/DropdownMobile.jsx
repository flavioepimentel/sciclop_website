import "./DropdownMobile.css"
import "../style.css"
import {dropdownLinksMobile} from '../constants/index'

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


const DropdownMobile= () => {
  
  function myFunction() {
    let x = document.getElementById("myTopnav");
    console.log(x.className)
    if (x.className === "dropdown_mobile") {
      x.className += " responsive";
    } else {
      x.className = "dropdown_mobile";
    }
  }
  
  return (
    <>
    <li className={` dropdown_mobile font-poppins font-normal cursor-pointer text-[1rem] text-white bg-black-navbar px-10 py-5`}>
      <div className="dropdown_mobile bg-black-navbar  z-1000000">
        <button 
        onClick={myFunction} 
        className=" dropbtn_mobile font-poppins font-normal cursor-pointer text-[1rem] bg-black-navbar text-white "> 
        Módulo
    </button>
        <div className="dropdown_mobile-content font-poppins font-normal cursor-pointer text-[1rem] text-white bg-black-navbar z-1000000">
          { dropdownLinksMobile.map((link) => {
            const { id, title } = link
            return(
              <a className="bg-black-navbar " key={`${id}`} href={`/${id}`}>{title}</a>
            )
          })}
        </div>
      </div>  
      </li>  
    </>
  );
}

export default DropdownMobile;

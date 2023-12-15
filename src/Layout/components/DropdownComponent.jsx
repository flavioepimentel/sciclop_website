import "../style.css"
import {dropdownLinks} from '../constants/index'

const DropdownComponent= () => {
  return (
    <div className={`subnav bg-black-gradiente`}>
      <button className={`subnavbtn bg-black-gradiente`}>Módulos</button>
      <div className="subnav-content bg-black-gradiente fixed">
        {dropdownLinks.map((item) => {
        const { id, categoria, title } = item;
        return (
        <a className={`font-poppins font-normal cursor-pointer text-[16px] text-white bg-black-gradiente`} key={`${id}`} href={`/${categoria}/#${id}`}>{title}</a>)
        })}
      </div>
  </div>   
  );
}

export default DropdownComponent;

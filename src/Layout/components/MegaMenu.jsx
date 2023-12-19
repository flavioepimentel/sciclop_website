import "./MegaMenu.css"
import "../style.css"
import {dropdownLinks} from '../constants/index'
import { Fragment } from "react"

const DropdownComponent= () => {
  return (
    <>
    <li
			key={"dropdown"}
			className={`sm:flex hidden font-poppins font-normal cursor-pointer text-[1rem] text-white mx-8`}
		>
    <div className={`dropdown `}>
      <button className={`dropbtn text-[1rem]`}>
        Módulos
        </button>
          <div className="dropdown-content fixed z-100000">
            <div className="  header">
              <h2 className="text-[3rem] ml-2 tracking-wide"> <strong>Módulos</strong></h2>
            </div>
            <div className=" row  z-100000">

            {/* Inicio das Categorias */}

              {dropdownLinks.map((object) => {
                const { id, categoria, item } = object;
                return (
                  <Fragment key={id}>
                    <div className="column flex flex-col z-100000">
                      <a   className="z-100000" href={`/${id}`}>
                        <h3 className="text-left text-[2.3rem]" ><strong>{categoria}</strong></h3>
                      </a>

                      {/* Inicio dos Módulos */}

                      {item.map((value) => {
                        const { _id, title } = value
                        return(
                              <a 
                              className={
                              `font-poppins font-normal 
                              cursor-pointer text-[1.65rem] 
                              text-white 
                               z-100000`} 
                              href={`/${id}/#${_id}`}
                              key={`${_id}`}> 
                              <p className={`text-left`}>
                              {title}
                              </p>
                              </a>
                        )})}

                      {/* Fim dos Módulos */}

                    </div>
                  </Fragment>
                  )})}
              {/* Fim das Categorias */}

                  </div>
                </div>
            </div>  
            </li>         
    </>
  );
}

export default DropdownComponent;

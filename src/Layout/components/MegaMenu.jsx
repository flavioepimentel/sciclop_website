import "../style.css"
import {dropdownLinks} from '../constants/index'
import { Fragment } from "react"

const DropdownComponent= () => {
  return (
    <>
    <li
			key={"dropdown"}
			className={`font-poppins font-normal cursor-pointer text-[1rem] text-white mx-8`}
		>
    <div className={`dropdown bg-black-gradiente`}>
      <button className={`dropbtn bg-black-gradiente text-[1rem]`}>
        Módulos
        </button>
          <div className="dropdown-content bg-black-gradiente fixed z-100000">
            <div className="bg-black-gradiente  header">
              <h2 className="text-[1.65rem] ml-2 tracking-wide"> <strong>Módulos</strong></h2>
            </div>
            <div className="bg-black-gradiente row  z-100000">

            {/* Inicio das Categorias */}

              {dropdownLinks.map((object) => {
                const { id, categoria, item } = object;
                console.log(object)
                return (
                  <Fragment key={id}>
                    <div className="column bg-black-gradiente  z-100000">
                      <a   className="bg-black-gradiente z-100000" href={`/${id}`}>
                        <h3 className="text-[1.2rem]" ><strong>{categoria}</strong></h3>
                      </a>

                      {/* Inicio dos Módulos */}

                      {item.map((value) => {
                        const { _id, title } = value
                        console.log(value)
                        return(
                              <a 
                              className={
                              `font-poppins font-normal 
                              cursor-pointer text-[16px] 
                              text-white bg-black-gradiente
                               z-100000`} 
                              href={`/${id}/#${_id}`}
                              key={`${_id}`}>
                              {title}
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

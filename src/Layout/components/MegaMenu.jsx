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
      <button className={`dropbtn bg-black-gradiente`}>
        Módulos
        </button>
          <div className="dropdown-content fixed z-100000">
            <div className="header">
              <h2>Módulos</h2>
            </div>
            <div className="row fixed">

            {/* Inicio das Categorias */}

              {dropdownLinks.map((object) => {
                const { id, categoria, item } = object;
                console.log(object)
                return (
                  <Fragment key={id}>
                    <div className="column fixed">
                      <a   className="fixed" href={`/${id}`}>
                        <h3 >{categoria}</h3>
                      </a>

                      {/* Inicio dos Módulos */}

                      {item.map((value) => {
                        const { _id, title } = value
                        console.log(value)
                        return(
                            <Fragment key={`${_id}`}>
                              <a 
                              className={
                              `font-poppins font-normal 
                              cursor-pointer text-[16px] 
                              text-white bg-black-gradiente
                              fixed`} 
                              href={`/${categoria}/#${_id}`}>
                              {title}
                              </a>
                            </Fragment>
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

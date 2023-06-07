import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="container-fluid m-0 p-0">
        <ul className="nav-2 m-3">

          <li className="nav-item">
              <NavLink className="nav-link-2" aria-current="page" to={"/Main"}>HOME</NavLink>
          </li>
          
          <div className="dropdown-center">
              <button className="btn nav-link-2 Bijouterie" type="button" data-bs-toggle="dropdown" aria-expanded="false">BIJOUTERIE</button>
              <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={"/Categoria/Aros"}>AROS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Pulseras"}>PULSERAS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Dijes"}>DIJES</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Anillos"}>ANILLOS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Cadenas"}>CADENAS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Collares"}>COLLARES</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
              </ul>
          </div>
            
          <div className="dropdown-center">
              <button className="btn nav-link-2 Accesorios" type="button" data-bs-toggle="dropdown" aria-expanded="false">ACCESORIOS</button>
              <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={"/Categoria/Anteojos"}>ANTEOJOS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Pañuelos"}>PAÑUELOS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Billeteras"}>BILLETERAS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Riñoneras"}>RIÑONERAS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Chalinas"}>CHALINAS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Llaveros"}>LLAVEROS</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Relojes"}>RELOJES</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Cinturones"}>CINTURONES</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                  <li><NavLink className="dropdown-item" to={"/Categoria/Neceser"}>NECESER</NavLink></li>
                  <div className='row divHR'><hr className='hr opacity-50'></hr></div>
              </ul>
          </div>

          <li className="nav-item">
          <NavLink className="nav-link-2" to={"/Contacto"}>CONTACTO</NavLink>
          </li>

      </ul>
  </div> 
  )
};

export default Navbar;
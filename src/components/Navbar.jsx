const Navbar = () => {
  return(
    <div className="container-fluid m-0 p-0">
        <ul className="nav-2 m-3">
          <li className="nav-item">
              <a className="nav-link-2" aria-current="page" href="index.html">HOME</a>
          </li>

          
        <div class="dropdown-center">
            <button className="btn nav-link-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">BIJOUTERIE</button>
            <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="index">AROS</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                <li><a className="dropdown-item" href="index">PULSERAS</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                <li><a className="dropdown-item" href="index">DIJES</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                <li><a className="dropdown-item" href="index">ANILLOS</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                <li><a className="dropdown-item" href="index">CADENAS</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
                <li><a className="dropdown-item" href="index">COLLARES</a></li>
                <div className='row divHR'><hr className='hr opacity-50'></hr></div>
            </ul>
        </div>
          
          <li className="nav-item">
              <a className="nav-link-2" href="index.html">ACCESORIOS</a>
          </li>
          <li className="nav-item">
          <a className="nav-link-2" href="index.html">CONTACTO</a>
          </li>
      </ul>
  </div> 
  )
};

export default Navbar;
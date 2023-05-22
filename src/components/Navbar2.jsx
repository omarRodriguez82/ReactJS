const Navbar2 = () => {
  return (
    <div className="container navbar navbar-expand-lg bg-body-tertiary text-center justify-content-evenly">
      <div className="row">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
              <a className="nav-link-2" aria-current="page" href="index.html">HOME</a>
          </li>
          
          <div className="dropdown-center">
              <button className="btn nav-link-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">BIJOUTERIE</button>
              <ul className="dropdown-menu">
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
      </div>
  </div>
  )
}

export default Navbar2;
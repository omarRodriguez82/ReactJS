import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return(
    <>
      <div className="col-md-3">
        <Link to={"/item/" + producto.id} className="text-decoration-none">        
          <div className="card border border-0 mb-4">
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
            <div className="container-fluid m-0 p-0">
              <p className="nombreCard m-0 p-0">{producto.nombre}</p>
              <p className="precioCard m-0 p-0">${producto.precio}</p>              
            </div>
            <button className="botonComprarCard">Ver artículo</button>
          </div>
        </Link>        
      </div>
    </>
  )
} 

export default Item;
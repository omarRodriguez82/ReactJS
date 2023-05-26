import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return(
    <>
      <div className="col-md-3 my-3">
        <Link to={"/item/" + producto.id}>        
          <div className="card border border-0">
            <img src={producto.Imagen} className="card-img-top" alt={producto.Nombre} />
          </div>
        </Link>        
      </div>
    </>
  )
} 

export default Item;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded] = useState(false);
  const navigate = useNavigate();

  const incrementarStock = () => {
      if (items < itemStock) {
          setItems(items + 1);
      }
  }

  const decrementarStock = () => {
      if (items > 1) {
          setItems(items - 1);
      }
  }

  const addToCart = () => {
      if (items <= itemStock) {
          setItemStock(itemStock - items);
          setItems(1);
          setItemAdded(true);
          onAdd(items);
      }
  }

  const btnVolverAtras = () => {
		navigate(-1);
	}

  useEffect(() => {
      setItemStock(stock);
}, [stock]);

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn" onClick={decrementarStock}>-</button>
            <button type="button" className="btn">{items}</button>
            <button type="button" className="btn" onClick={incrementarStock}>+</button>
          </div>
        </div>      
      </div>
      <div className="row">
        <div className="col">
          {itemAdded ? <div>
          <Link to={"/Cart"} className="btn btn-agregar-carrito m-1">Ir al Carrito</Link>
          <button type="button" title="Go back" onClick={btnVolverAtras} className="btn btn-agregar-carrito m-1">Seguir Comprando!</button>
          </div> : 
          <button type="button" className="btn btn-agregar-carrito" onClick={addToCart}>Agregar al Carrito</button>}
        </div>
      </div>
    </div>
  )
}

export default ItemCount;
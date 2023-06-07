import { Link } from "react-router-dom";
import bag from "./images/carrito.png";

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative m-0 p-0">
            <Link to={"/Cart"}><img src={bag} alt="Carrito" className= "botonCarrito" /></Link>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">1</span>
        </button>
    )
}

export default CartWidget;
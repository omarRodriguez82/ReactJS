import { Link } from "react-router-dom";
import bag from "./images/carrito.png";
import { CartContext } from "./Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        (cartTotal() > 0) ?  
        <button type="button" className="btn position-relative m-0 p-0">
            <Link to={"/Cart"}><img src={bag} alt="Carrito" className= "botonCarrito" /></Link>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">{cartTotal()}</span>
        </button> : ""
    )
}

export default CartWidget;
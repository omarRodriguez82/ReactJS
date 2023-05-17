import bag from "./images/carrito.png";

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            <img src={bag} alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">1</span>
        </button>
    )
}

export default CartWidget;
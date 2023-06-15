import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import trash from "./images/trash.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <div className="alert alerta" role="alert">No existen productos en el Carrito!</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
        <h1 className="tituloCarrito">Carrito de Compras</h1>
        </div>
      </div>
      
      <div className="row">
        <div className="col">

          <table className="table my-3">
          <thead>
              <tr>
                <th className="cabezaTabla text-center" scope="col">#</th>
                <th className="cabezaTabla text-start" scope="col">Producto</th>
                <th className="cabezaTabla text-center" scope="col">Cantidad</th>
                <th className="cabezaTabla text-center" scope="col">Precio</th>
                <th className="cabezaTabla text-center" scope="col">Total</th>
                <th className="cabezaTabla text-center btnVaciarCarrito" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => (
                  <tr key={item.id}>
                    <td className="itemTabla align-middle text-center"><img src={item.imagen} alt={item.nombre} width={100} /></td>
                    <td className="itemTabla align-middle text-start">{item.nombre}</td>
                    <td className="itemTabla align-middle text-center">{item.cantidad}</td>
                    <td className="itemTabla align-middle text-center">${item.precio}</td>
                    <td className="itemTabla align-middle text-center">${item.cantidad * item.precio}</td>
                    <td className="itemTabla align-middle text-center"><button className="botonTrash border-0" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={trash} alt="Eliminar Producto" width={20} /></button></td>
                  </tr>
                ))
              }
              <tr>
                <td colSpan={3} className="cabezaTabla text-end">Total a Pagar</td>
                <td className="text-center cabezaTabla">${sumTotal()}</td>
                <td><Link to={"/Checkout"} className="text-center text-end text-decoration-none btnVaciarCarrito">Finalizar Compra</Link></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Cart;
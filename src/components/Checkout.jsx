import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");
  const {cart, sumTotal, clear} = useContext(CartContext);

    const generarOrden = () => {

      if (nombre.length === 0) {
      return false;
    }

    if (email.length === 0) {
      return false;
    }

    if (telefono.length === 0) {
      return false;
    }
    const buyer = {name:nombre, phone:telefono, email:email};
    const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity}));
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = sumTotal();
    const order = {buyer:buyer, items:items, date:date, total:total};

    const db = getFirestore();
    const OrdersCollection = collection(db, "orders");
    addDoc(OrdersCollection, order).then(resultado => {
      setOrderId(resultado.id);
      clear();
    })
    .catch(resultado => {
      <div className="alert alerta" role="alert">Error! No se pudo completar la Compra</div>
    })
  }

  return(
    <div className="container my-5">      
      <div className="row"> 
        <h1 className="tituloCarrito text-center">Finalizar Compra</h1>    
          
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label contactoTituloInput">Nombre</label>
              <input type="text" className="form-control contactoTituloInput" onInput={(e) => {setNombre(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label className="form-label contactoTituloInput">Email</label>
              <input type="text" className="form-control contactoTituloInput" onInput={(e) => {setEmail(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label className="form-label contactoTituloInput">Teléfono</label>
              <input type="text" className="form-control contactoTituloInput" onInput={(e) => {setTelefono(e.target.value)}} />
            </div>
            <button type="button" className="btn btn-enviar" onClick={generarOrden}>Generar Orden</button>
          </form>
        </div> 

        <div className="col-md-6">
          <table className="table my-3">
            <tbody>
              {
                cart.map(item => (
                  <tr key={item.id}>
                    <td className="itemTabla align-middle text-center"><img src={item.imagen} alt={item.nombre} width={100} /></td>
                    <td className="itemTabla align-middle text-start">{item.nombre}</td>
                    <td className="itemTabla align-middle text-center">{item.quantity}</td>
                    <td className="itemTabla align-middle text-center">${item.precio}</td>
                    <td className="itemTabla align-middle text-center">${item.quantity * item.precio}</td>
                  </tr>
                ))
              }
              <tr>
                <td colSpan={4} className="cabezaTabla text-end">Total a Pagar</td>
                <td className="text-center cabezaTabla">${sumTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>        

        <div className="row">
          <div className="col text-center">
            {orderId ? <Navigate to={"/ThankYou/" + orderId}></Navigate> : ""}
          </div>
        </div>

      </div>
    </div>  
  )
}

export default Checkout;
import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
  const {orderId} = useParams();

  return(
    <div className="container my-5">
      <div className="col alert alerta text-center">
        <h1>Gracias por tu Compra!</h1>
        <h3>Tu Orden de Compra es: <b>{orderId}</b></h3>
        <p className="mt-5"><Link to={"/Main"} className="btn btn-enviar">Volver al Inicio</Link></p>
      </div>
    </div>
  )
}

export default ThankYou;
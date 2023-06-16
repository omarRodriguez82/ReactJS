import Contacto1 from "./images/Contacto1.png";
import Contacto2 from "./images/Contacto2.png";

const Contacto = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 text-center my-5">
          <img src={Contacto1} alt="" />
        </div>        
        
        <div className="contacto col-md-4 offset-1 my-5">
          <h1 className="tituloContacto mb-4 p-0">Contacto</h1>

          <div className="my-4">
            <label for="validationDefault01" className="form-label contactoTituloInput">Nombre</label>
            <input type="text" className="form-control form-nombre rounded-pill contactoPlaceholder" id="validationDefault01" placeholder="Nombre" required />
          </div>
          
          <div className="my-4">
            <label for="exampleFormControlInput1" className="form-label contactoTituloInput">Email</label>
            <input type="email" className="form-control form-email rounded-pill contactoPlaceholder" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div className="my-4">
            <label for="validationDefault01" className="form-label contactoTituloInput">Teléfono</label>
            <input type="text" className="form-control form-telefono rounded-pill contactoPlaceholder" id="validationDefault01" placeholder="Teléfono" required />
          </div>
          
          <div className="my-4">
            <label for="exampleFormControlTextarea1" className="form-label contactoTituloInput">Mensaje</label>
            <textarea className="form-control form-mensaje rounded-4 contactoPlaceholder" id="exampleFormControlTextarea1" rows="12" placeholder="Dejanos tu mensaje"></textarea>
          </div>
            
          <div className="my-4 text-end">
            <button className="btn btn-enviar text-end" type="submit">Enviar</button>
          </div>
        </div>

        <div className="col-md-3 offset-1 text-center my-5">
          <img src={Contacto2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contacto;
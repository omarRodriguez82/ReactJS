import MercadoPago from './images/mercado_pago.png'
import Efectivo from './images/cash.png'
import Transferencia from './images/bank.png'
import Instagram from './images/instagram.png'
import Whatsapp from './images/whatsapp.png'
import Mail from './images/mail.png'
import Facebook from './images/facebook.png'
import CompraSegura from './images/safe_shop.png'
import SitioSeguro from './images/safe_place.png'
import Ubicacion from './images/local.png'

const Footer = () => {
  return(
    <div className="container-fluid">
      <div className="row Footer">
        
        <div className="col-md-4 seccionesFooter">
          <h3 className="titulosFooter">Medios de pago</h3>
            <ul className='p-0'>
              <li className= 'itemsFooter'><img src={MercadoPago} alt={"MercadoPago"} className='botonPagosFooter'/>Mercado Pago</li>            
              <li className= 'itemsFooter'><img src={Efectivo} alt={"Efectivo"} className='botonPagosFooter'/>Efectivo</li>            
              <li className= 'itemsFooter'><img src={Transferencia} alt={"Transferencia"} className='botonPagosFooter'/>Transferencia</li>
            </ul>
        </div>

        <div className="col-md-4 seccionesFooter">
          <h3 className="titulosFooter">Contacto</h3>
          <ul className='ulRedes'>
            <li className= 'itemsFooter'><a href="https://www.instagram.com/kancheras_y_divertidas/" target={"_blank"} rel="noreferrer"><img src={Instagram} alt={"Instagram"} className='botonRedesFooter'/></a>  @kancheras_y_divertidas</li>
            <li className= 'itemsFooter'><a href="index.html" target={"_blank"} rel="noreferrer"><img src={Mail} alt={"Mail"} className='botonRedesFooter'/></a>  kancherasadm@gmail.com</li>
            <li className= 'itemsFooter'><a href="https://api.whatsapp.com/send?phone=1159582209" target={"_blank"} rel="noreferrer"><img src={Whatsapp} alt={"Whatsapp"} className='botonRedesFooter'/></a>  1159582209</li>
            <li className= 'itemsFooter'><a href="https://www.facebook.com/kancheras_y_divertidas" target={"_blank"} rel="noreferrer"><img src={Facebook} alt={"Facebook"} className='botonRedesFooter'/></a>  kancheras_y_divertidas</li>
          </ul>
        </div>

        <div className="col-md-4 divSafe">
          <div>
            <ul className='ulRedes'>
              <ul className='footerSafe p-0 m-0'>
                <li className= 'itemsFooter text-center'><img src={CompraSegura} alt={"CompraSegura"} className='botonRedesFooter2'/>Compra Segura</li>            
                <li className= 'itemsFooter text-center'><img src={SitioSeguro} alt={"SitioSeguro"} className='botonRedesFooter2'/>Sitio Seguro</li>
              </ul> 
              <li className='text-center m-3'><img src={Ubicacion} alt={"Ubicacion"} className='botonRedesFooterLocation'/>Villa de Merlo (San Luis)</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>  
  )
  };

export default Footer;
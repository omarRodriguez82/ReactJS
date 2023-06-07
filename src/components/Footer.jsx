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
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className="container-fluid">
      <div className="row Footer">
        
        <div className="col-md-4 seccionesFooter">
          <h3 className="titulosFooter">Medios de pago</h3>
            <ul className='p-0'>
              <li className= 'itemsFooter'><img src={MercadoPago} alt={"MercadoPago"} className='botonesFooter'/>Mercado Pago</li>            
              <li className= 'itemsFooter'><img src={Efectivo} alt={"Efectivo"} className='botonesFooter'/>Efectivo</li>            
              <li className= 'itemsFooter'><img src={Transferencia} alt={"Transferencia"} className='botonesFooter'/>Transferencia</li>
            </ul>
        </div>

        <div className="col-md-4 seccionesFooter">
          <h3 className="titulosFooter">Contacto</h3>
          <ul className='ulRedes'>
            <li className= 'itemsFooter'><Link to={"https://www.instagram.com/kancheras_y_divertidas/"} target={"_blank"} rel="noreferrer"><img src={Instagram} alt={"Instagram"} className='botonesFooter'/></Link>  @kancheras_y_divertidas</li>
            <li className= 'itemsFooter'><img src={Mail} alt={"Mail"} className='botonesFooter'/>  kancherasadm@gmail.com</li>
            <li className= 'itemsFooter'><Link to={"https://api.whatsapp.com/send?phone=1159582209"} target={"_blank"} rel="noreferrer"><img src={Whatsapp} alt={"Whatsapp"} className='botonesFooter'/></Link>  1159582209</li>
            <li className= 'itemsFooter'><Link to={"https://www.facebook.com/kancheras_y_divertidas"} target={"_blank"} rel="noreferrer"><img src={Facebook} alt={"Facebook"} className='botonesFooter'/></Link>  kancheras_y_divertidas</li>
          </ul>
        </div>

        <div className="col-md-4 seccionesFooter">
        <h3 className="titulosFooter">El Sitio</h3>
          <div>
            <ul className='ulRedes'>
              <li className= 'itemsFooter'><img src={CompraSegura} alt={"CompraSegura"} className='botonesFooter'/>Compra Segura</li>            
              <li className= 'itemsFooter'><img src={SitioSeguro} alt={"SitioSeguro"} className='botonesFooter'/>Sitio Seguro</li>
              <li className= 'itemsFooter'><img src={Ubicacion} alt={"Ubicacion"} className='botonesFooter'/>Villa de Merlo (San Luis)</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>  
  )
  };

export default Footer;
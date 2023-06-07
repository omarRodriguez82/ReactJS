import CartWidget from './Cartwidget';
import Logo from './images/Logo.png';
import Instagram from './images/instagram.png'
import Whatsapp from './images/whatsapp.png'
import Facebook from './images/facebook.png'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return(
    <div className="container-fluid my-2 p-0">
      <div className="row Header">
        <div className="DivTitulo col m-0 p-0"> 

          <ul className="ulRedes col-md-2 text-center">
            <Link to={"/Main"}><img src={Logo} alt={"Logo"} className='Logo'/></Link>
          </ul>

          <ul className='col-md-8 m-0 p-0'>
            <h1 className='tituloMain m-0 p-0'>KANCHERAS & DIVERTIDAS</h1>
          </ul>
          
          <ul className='col-md-1 ulRedes text-end'>
            <li>
              <Link to={"https://www.instagram.com/kancheras_y_divertidas/"} target={"_blank"} rel="noreferrer" className='m-0 p-0'><img src={Instagram} alt={"Instagram"} className='botonRedes m-2'/></Link>            
              <Link to={"https://api.whatsapp.com/send?phone=1159582209"} target={"_blank"} rel="noreferrer" className='m-0 p-0'><img src={Whatsapp} alt={"Whatsapp"} className='botonRedes m-2'/></Link>            
              <Link to={"https://www.facebook.com/kancheras_y_divertidas"} target={"_blank"} rel="noreferrer" className='m-0 p-0'><img src={Facebook} alt={"Instagram"} className='botonRedes m-2'/></Link>
            </li>
          </ul>
        
          <ul className='col-md-1 ulRedes text-center'>
            <li>
              <CartWidget />
            </li>
          </ul>
          
        </div>
      </div>

      <div className='row divHR m-0'>
        <hr className='hr border-1 opacity-75'></hr>
      </div>

      <Navbar />

    </div>
  )
};

export default Header;
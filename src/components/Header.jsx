import CartWidget from './Cartwidget';
import Logo from './images/Logo.png';
import Instagram from './images/instagram.png'
import Whatsapp from './images/whatsapp.png'
import Mail from './images/mail.png'
import Facebook from './images/facebook.png'
import Search from './images/search.svg'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return(
    <div className="container-fluid">
      <div className="row Header mt-2">
        <div className="DivTitulo col text-center"> 

          <ul className="ulRedes">
            <Link to={"/Main"}><img src={Logo} alt={"Logo"} className='Logo'/></Link>
          </ul>

          <ul className='ulRedes'>
            <li>
              <Link to={"https://www.instagram.com/kancheras_y_divertidas/"} target={"_blank"} rel="noreferrer"><img src={Instagram} alt={"Instagram"} className='botonRedes mb-3'/></Link>
            </li>
            <li><p className='nav-link-1'>@kancheras_y_divertidas</p></li>
          </ul>

          <ul className='ulRedes'>
            <li>
              <Link to={"https://api.whatsapp.com/send?phone=1159582209"} target={"_blank"} rel="noreferrer"><img src={Whatsapp} alt={"Whatsapp"} className='botonRedes mb-3'/></Link>
            </li>
            <li><p className='nav-link-1'>1159582209</p></li>
          </ul>

          <ul className='ulRedes'>
            <li><img src={Mail} alt={"Mail"} className='botonRedes mb-3'/></li>
            <li><p className='nav-link-1'>kancherasadm@gmail.com</p></li>
          </ul>

          <ul className='ulRedes'>
            <li>
              <Link to={"https://www.facebook.com/kancheras_y_divertidas"} target={"_blank"} rel="noreferrer"><img src={Facebook} alt={"Instagram"} className='botonRedes mb-3'/></Link>
            </li>
            <li><p className='nav-link-1'>kancheras_y_divertidas</p></li>
          </ul>          

          <ul className='ulRedes'>
            <div className="input-group">
              <input type="text" className="form-control text-center" placeholder="Buscar" aria-label="Input group example" aria-describedby="basic-addon1"/>
              <span className="input-group-text" id="basic-addon1">
              <Link to={"index"}><img src={Search} alt="Search" /></Link>         
              </span>
            </div>
          </ul>
        
          <ul className='ulRedes'>
            <li>
              <CartWidget />
            </li>
          </ul>
          
        </div>
      </div>

      <div className='row divHR'>
        <hr className='hr border-1 opacity-75'></hr>
      </div>

      <Navbar />

    </div>
  )
};

export default Header;
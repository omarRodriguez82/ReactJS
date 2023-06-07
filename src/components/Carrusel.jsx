import Carrusel1 from './images/carrusel1.png'
import Carrusel2 from './images/carrusel2.png'
import Carrusel3 from './images/carrusel3.png'

const Carrusel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide carousel-fade" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={Carrusel1} className="d-block w-100" alt="Carrusel1" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Carrusel2} className="d-block w-100" alt="Carrusel2" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Carrusel3} className="d-block w-100" alt="Carrusel3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrusel;
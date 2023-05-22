const Item = ({producto}) => {
  return(
    <>
      <div className="col-md-4 my-3">
        <div className="col-md-4 my-3">
          <div className="card border border-0">
              <img src={producto.Imagen} className="card-img-top" alt={producto.Nombre} />
              <div className="card-body">
                  <h3>{producto.Edad}</h3>
                  <p className="card-text"><span className="text-secondary">{producto.Sexo}</span><br /><b>${producto.Precio}</b></p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
} 

export default Item;
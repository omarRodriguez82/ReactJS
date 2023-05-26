import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});
    
    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container-fluid divDetalle">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={item.Imagen} alt={item.Nombre} className="img-fluid" />
                </div>
                <div className="col-md-3 text-center">
                    <h1 className="tituloCardDetail my-3">{item.Nombre}</h1>
                    <h3 className="descripcionCardDetail my-3">{item.Descripcion}</h3>
                    <p className="precioCardDetail my-3">${item.Precio}</p>
                    <ItemCount stock={item.Stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
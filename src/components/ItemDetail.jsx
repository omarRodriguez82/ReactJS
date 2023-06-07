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
                    <img src={item.imagen} alt={item.nombre} className="img-fluid imgDetalle" />
                </div>
                <div className="col-md-3 text-center">
                    <h1 className="tituloCardDetail my-3">{item.nombre}</h1>
                    <h3 className="descripcionCardDetail my-3">{item.descripcion}</h3>
                    <p className="precioCardDetail my-3">${item.precio}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
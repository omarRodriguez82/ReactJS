import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});
    
    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.Imagen} alt={item.Nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.Apellido}</h1>
                    <h3>{item.Edad}</h3>
                    <p><b>${item.Precio}</b></p>
                    <ItemCount stock={item.Stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
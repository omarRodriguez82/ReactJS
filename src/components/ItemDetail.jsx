import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }   
    
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
                    <p className="precioCardDetail my-2">${item.precio}</p>
                    <p className="pStock my-2">Cantidad disponible: {item.stock}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
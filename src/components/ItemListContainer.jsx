import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";
import Error404 from "./Error404";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

//Importación de Firebase / se ejecuta solo una vez
/* useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");

  productos.forEach(producto => {
      addDoc(itemsCollection, producto);
  });  
}, []); */

useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
  getDocs(q).then(resultado => {
      if (resultado.size > 0) {
          setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
          setLoading(false);
      } else {
          <Error404 />
      }
  });
}, [id]);

  return(
    <div className="container">
      <div className="row">
        <p className="breadcrumb m-4">{id}</p>
        {loading ? <Loading /> : <ItemList productos={items} />}
      </div>
    </div>
  )
}

export default ItemListContainer;
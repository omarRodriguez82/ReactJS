import { useEffect, useState } from "react";
/* import productos from "./json/productos.json" */
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";
import Error404 from "./Error404";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

 //Acceder a los productos desde Firebase
/*   useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", "r6k8XHK7XgoihEE94j8I");
    getDoc(producto).then(resultado => {
        if (resultado.exists()) {
            setItems({id:resultado.id, ...resultado.data()})
        } else {
            console.error("Error! No se encontró el producto!");
        }
    });
}, []); */

// Acceder a una colección de documentos desde firestore
/* useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  getDocs(itemsCollection).then(resultado => {
      if (resultado.size > 0) {
          setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
      } else {
          console.error("Error! No se encontraron productos en la colección!");
      }
  });
}, []); */

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
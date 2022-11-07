import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../style.css";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idproducto } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
    const ref = doc(coleccionProductos, idproducto);

    getDoc(ref)
      .then((res) => {
        setItem({
          codigo: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => setLoading(true);
  }, [idproducto]);

  return (
    <div>
      {loading === true ? (
        <div style={{ margin: "200px" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="Contenedor-Detail">
          <ItemDetail item={item} />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;

// import { Productos } from "./Productos";

// const traerProducto = () => {
//   const producto = Productos.find(
//     (prod) => prod.codigo === Number(idproducto)
//   );
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(producto);
//     }, 1000);
//   });
// };
// traerProducto()
//   .then((res) => {
//     setItem(res);
//   })

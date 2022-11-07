import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "../style.css";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FirebaseConfig";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { coleccion } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
    const ref = coleccion
      ? query(coleccionProductos, where("coleccion", "==", coleccion))
      : coleccionProductos;

    getDocs(ref)
      .then((res) => {
        const Productos = res.docs.map((prod) => {
          return {
            codigo: prod.id,
            ...prod.data(),
          };
        });
        setItems(Productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);
  }, [coleccion]);

  return (
    <main>
      {loading === true ? (
        <div style={{ margin: "200px" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <div>
          <h1 style={{ color: "grey" }}>{greeting}</h1>
          <ItemList items={items} />
        </div>
      )}
    </main>
  );
}

export default ItemListContainer;

// import { Productos } from "./Productos";

// const traerProductos = () => {
// return new Promise((res, rej) => {
//   const ProdFiltrados = Productos.filter(
//     (prod) => prod.coleccion === coleccion
//   )
// const prod = coleccion ? ProdFiltrados : Productos;
// setTimeout(() => {
//   res(prod);
// }, 1000);
// });
// };
// traerProductos()
// .then((res) => {
// setItems(res);
// })
// .catch((error) => {
// console.log(error);
// })
// .finally(() => {
// setLoading(false);
// });

// return () => setLoading(true);
// }

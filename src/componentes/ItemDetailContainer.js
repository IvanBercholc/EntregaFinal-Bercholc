import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Productos } from "./Productos";
import { useParams } from "react-router-dom";
import "../style.css"

function ItemDetailContainer(props) {
  const [item, setItem] = useState({});
  const { idproducto } = useParams();

  useEffect(() => {
    const traerProducto = () => {
      const producto = Productos.find((prod) => prod.codigo === Number(idproducto));
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(producto);
        }, 1000);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="Contenedor-Detail">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;

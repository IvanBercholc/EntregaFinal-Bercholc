import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Productos } from "./Productos";
import { useParams } from "react-router-dom";

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
    <div>
      <h1 style={{ color: "grey" }}>{props.greeting}</h1>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;

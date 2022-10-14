
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Productos } from "./Productos";

function ItemListContainer({ greeting }) {

    const [items, setItems] = useState ([])

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(Productos);
        }, 2000);
      });
    };
    traerProductos()
    .then((res) => {
        setItems(res);
    })
    .catch((error)=>{
    })
  }, []);

  console.log(items)

  return (
    <div>
      <h1 style={{ color: "grey" }}>{greeting}</h1>
      <ItemList items = {items}/>
    </div>
  );
}

export default ItemListContainer;


import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Productos } from "./Productos";
import '../style.css'
import {useParams} from "react-router-dom";

function ItemListContainer({ greeting }) {

    const [items, setItems] = useState ([])

    const {coleccion}=useParams()

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const ProdFiltrados=Productos.filter((prod)=>prod.coleccion===coleccion);
        const prod= coleccion ? ProdFiltrados : Productos;
        setTimeout(() => {
          res(prod);
        }, 1000);
      });
    };
    traerProductos()
    .then((res) => {
        setItems(res);
    })
    .catch((error)=>{
    })
  }, [coleccion]);

  return (
    <div>
      <h1 style={{ color: "grey" }}>{greeting}</h1>
      <ItemList items = {items}/>
    </div>
  );
}

export default ItemListContainer;

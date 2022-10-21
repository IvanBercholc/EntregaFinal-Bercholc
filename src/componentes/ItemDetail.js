import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>
        <img width="350px" src={item.foto} alt={item.nombre} />
        <h2>{item.nombre}</h2>
      </div>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  );
};

export default ItemDetail;

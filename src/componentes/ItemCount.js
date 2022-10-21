import React, { useState } from "react";
import "../style.css";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
console.log(props)
  const sumar = () => {
    props.stock>count && setCount(count + 1);
  };

  const restar = () => {
    count>props.initial && setCount(count - 1);
  };

  return (
    <div>
      <div>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;

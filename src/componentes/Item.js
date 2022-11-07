import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {

  return (
    <article>
      <img style={{ width: "250px" }} src={prod.foto} alt={prod.nombre} />
      <div>
        <strong>{prod.nombre}</strong>
        <p>${prod.precio}</p>
        <div>
          {prod.stock>0?<Link className="btn-verDetalle" to={`/item/${prod.codigo}`}>
            Ver Detalle
          </Link> : <p className="btn-verDetalle-disabled">Sin Stock</p>}
        </div>
      </div>
    </article>
  );
};

export default Item;

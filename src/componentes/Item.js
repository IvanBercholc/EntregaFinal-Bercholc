import React from "react";
import {Link} from "react-router-dom";

const Item =({prod})=>{
    return (
        <article>
            <img style={{width: "250px"}} src={prod.foto} alt={prod.nombre} />
            <div>
                <strong>{prod.nombre}</strong>
                <p>${prod.precio}</p>
                <div>
                    <Link className="btn-verDetalle" to={`/item/${prod.codigo}`}>Ver Detalle</Link>
                </div>
            </div>
        </article>
    );
};

export default Item;
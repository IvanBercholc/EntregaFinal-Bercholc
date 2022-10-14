import React from "react";

const Item =({prod})=>{
    return (
        <article>
            <img style={{width: "250px"}} src={prod.foto} alt={prod.nombre} />
            <div>
                <strong>{prod.nombre}</strong>
                <p>${prod.precio}</p>
            </div>
        </article>
    );
};

export default Item;
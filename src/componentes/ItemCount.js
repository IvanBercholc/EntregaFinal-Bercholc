import React, { useState } from "react";
import "../style.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const sumar = () => {
    props.stock>count && setCount(count + 1);
  };

  const restar = () => {
    count>props.initial && setCount(count - 1);
  };

  return (
    <div>
      <div className="Contenedor-Contador">
        <ButtonGroup>
        <Button variant="outline-dark" onClick={restar} className={props.initial===count && "boton-contador-inhabilitado"}><strong>-</strong></Button>
        <Button id="Numero-Contador" variant="outline-dark">{count}</Button>
        <Button variant="outline-dark" onClick={sumar} className={props.stock===count && "boton-contador-inhabilitado"}><strong>+</strong></Button>
        </ButtonGroup>
        <Button variant="dark" onClick={()=>props.agregarUnidades(count)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;

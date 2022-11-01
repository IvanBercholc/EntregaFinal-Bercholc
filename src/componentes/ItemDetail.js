import React from "react";
import ItemCount from "./ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width="350px" src={item.foto} alt={item.nombre}/>
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          ${item.precio}
        </Card.Text>
        <ItemCount stock={item.stock} initial={1}/>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;

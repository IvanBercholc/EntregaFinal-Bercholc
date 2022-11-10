import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetail({ item }) {
  const [unidades, setUnidades] = useState(0);

  const { addToCart } = useContext(CartContext);

  const agregarUnidades = (numero) => {
    setUnidades(numero);

    addToCart(item, numero);

    toast.success(`Se han agregado ${numero} ${item.nombre} al carrito`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Card.Img variant="top" width="350px" src={item.foto} alt={item.nombre} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>${item.precio}</Card.Text>
        {unidades === 0 ? (
          <ItemCount
            agregarUnidades={agregarUnidades}
            stock={item.stock}
            initial={1}
          />
        ) : (
          <div>
            <Link className="btn-irACarrito" to="/cart">
              Ir al Carrito
            </Link>
            <Link className="btn-volver-tienda" to="/">
              Volver a tienda
            </Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;

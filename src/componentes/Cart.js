import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "../style.css";

const Cart = () => {
  const { cart, deleteAll, deleteOne } = useContext(CartContext);

  let totalCarrito = 0;

  const copiaCart = [...cart];

  copiaCart.forEach((prod) => (totalCarrito += prod.precio * prod.cantidad));

  if (cart.length === 0) {
    return (
      <div>
        <p className="carrito-vacio">
          <strong>El carrito está vacío ¡Comienza a comprar!</strong>
        </p>
        <Link className="botonTienda" to="/">
          Ir a Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="contenedor-carrito">
      {cart.map((prod) => (
        <div key={prod.codigo} className="item-carrito">
          <img src={prod.foto} alt={prod.nombre} height="70px" />
          <div className="item-carrito-info">
            <p>{prod.nombre}</p>
            <p>$ {prod.precio}</p>
            <p>X {prod.cantidad}</p>
            <p>$ {prod.cantidad * prod.precio}</p>
          </div>
          <p className="boton-borrar" onClick={() => deleteOne(prod.codigo)}>
            <img
              alt="borrar"
              src="https://res.cloudinary.com/dkb1qdwt2/image/upload/v1667757758/rica-assets/delete_tul4om.png"
            />
          </p>
        </div>
      ))}
      <div className="carrito-info">
        <p>Total de la compra: $ {totalCarrito}</p>
        <Button variant="dark" style={{ width: "100px" }} onClick={deleteAll}>
          Borrar todo
        </Button>
        </div>
        <div>
          <Link
            style={{ margin: "10px", borderRadius: "5px" }}
            className="botonTienda"
            to="/"
          >
            Volver a Tienda
          </Link>
          <Link
            style={{ margin: "10px", borderRadius: "5px" }}
            className="botonTienda"
            to="/checkout"
          >
            Confirmar tu Compra
          </Link>
      </div>
    </div>
  );
};

export default Cart;

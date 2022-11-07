
import { useContext } from "react";
import "../style.css";
import { CartContext } from "./CartContext";

function CartWidget() {

    const {cart} =useContext(CartContext)

    const copiaCart= [...cart];

    let unidadesCarrito= 0

    copiaCart.forEach(prod=>{
        unidadesCarrito+=prod.cantidad
    })

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/carrito_zfwb0r.png"
        width="30px" alt="Carrito"
      />
      {unidadesCarrito>0 &&
      <span className="numCarrito">{unidadesCarrito}</span>}
    </div>
  );
}

export default CartWidget;

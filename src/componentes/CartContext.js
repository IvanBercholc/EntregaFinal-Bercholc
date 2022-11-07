import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    const producto = { ...item, cantidad };
    isInCart(producto.codigo)
      ? sumarCantidad(producto)
      : setCart([...cart, producto]);
  };

  const sumarCantidad = (productoAgregado) => {
    const cartActualizado = cart.map((prod) => {
      if (prod.codigo === productoAgregado.codigo) {
        const prodActualizado = {
          ...prod,
          cantidad: productoAgregado.cantidad,
        };
        return prodActualizado;
      } else {
        return prod;
      }
    });
    setCart(cartActualizado);
  };

  const isInCart = (codigo) => cart.some((prod) => prod.codigo === codigo);

  const deleteAll = () => setCart([]);

  const deleteOne = (codigo) => {
    const prodFiltrados = cart.filter((prod) => prod.codigo !== codigo);
    setCart(prodFiltrados);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;

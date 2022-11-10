import { useContext, useState } from "react";
import "../style.css";
import Spinner from "react-bootstrap/esm/Spinner";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig.js";
import { ToastContainer } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, totalCart, deleteAll } = useContext(CartContext);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeMail2 = (e) => {
    setMail2(e.target.value);
  };

  const [orderId, setOrderId] = useState("");

  const handleSubmit = async (e) => {
    if (mail === mail2) {
      setLoading(true);
      e.preventDefault();
      const order = {
        buyer: { name, tel, mail },
        items: cart,
        total: totalCart(),
        date: serverTimestamp(),
      };
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderId(res.id);
          deleteAll();
          toast.success("¡Se ha confirmado tu pedido!")
        })

        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }else{
        e.preventDefault();
        toast.error("Error ¡Los mails ingresados no coinciden!")
    }
  };
  if (orderId) {
    return (
        <div>
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
      <p className="carrito-vacio">
          <strong>¡Tu pedido se ha confirmado! El número de seguimiento es: {orderId}</strong>
        </p>
        <Link className="botonTienda" to="/">
          Volver a la Tienda
        </Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return (
      <div>
        <p className="carrito-vacio">
          <strong>¡No tienes ningún producto en tu carrito!</strong>
        </p>
        <Link className="botonTienda" to="/">
          Ir a Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="contenedor-formulario">
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
      <form action="" onSubmit={handleSubmit} className="formulario">
        <h2 style={{ marginBottom: "10px", borderBottom: "1px solid black" }}>
          Confirmación de Compra
        </h2>
        <input
          type="text"
          onChange={handleChangeName}
          name="nombre"
          placeholder="Nombre y Apellido..."
          value={name}
          required
        />
        <input
          type="tel"
          onChange={handleChangeTel}
          name="tel"
          placeholder="Teléfono..."
          value={tel}
          required
        />
        <input
          type="email"
          onChange={handleChangeMail}
          name="mail"
          placeholder="Mail..."
          value={mail}
          required
        />
        <input
          type="email"
          onChange={handleChangeMail2}
          name="mail2"
          placeholder="Corroborar Mail..."
          value={mail2}
          required
        />
        {loading ? (
          <Spinner style={{ marginTop: "20px" }} animation="border" />
        ) : (
          <Button
            style={{ marginTop: "20px" }}
            type="submit"
            variant="dark"
            onChange={handleSubmit}
          >
            Confirmar
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;

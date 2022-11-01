import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Cart from "./componentes/Cart";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"¡Bienvenidxs a la tienda de Rica!"}
              />
            }
          />
          <Route path="/coleccion/:coleccion" element={<ItemListContainer />} />
          <Route path="/item/:idproducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

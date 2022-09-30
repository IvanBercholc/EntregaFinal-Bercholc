
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer className="Title" greeting={"Bienvenidos a la tienda de Rica!"}/>
    </div>
  );
}

export default App;

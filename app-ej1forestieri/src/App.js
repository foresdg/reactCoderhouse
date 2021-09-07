import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemList from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemList greeting="Hasta nuevo aviso sólo hay un contador" mostrar={<ItemCount nombre="Producto 1" stock="5" contInicial="0" />} />
          
          {/* <ItemCount /> */}
        
        
    
      </header>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemList from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemList greeting="Muy pronto esto se completará con desafíos" />
      </header>
    </div>
  );
}

export default App;

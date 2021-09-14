import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer mostrar={<ItemList />} />

      </header>
    </div>
  );
}

export default App;

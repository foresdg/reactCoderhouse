import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Item from './components/Item/Item.js'
import ItemDetail from './components/ItemDetail/ItemDetail.js'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
            <Switch>
                <Route exact path='/'><ItemListContainer mostrar={<ItemDetailContainer />} /></Route>
                <Route path='category/:id'><Item /></Route>
                <Route path='/item/:id'><ItemDetail /></Route>

            </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

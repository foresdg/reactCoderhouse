import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
//  
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartCacheMask } from './context/cartContext';
import { useContext, useState } from 'react';
import FinCompra from './components/FinCompra/FinCompra';


function App() {


  const [widgetChange, setWidgetChange] = useState()
  
  return (

    <div className="App">
      <header className="App-header">
        <CartCacheMask>
          <BrowserRouter>
            <NavBar widgetChange={widgetChange} setWidgetChange={setWidgetChange}/>              
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer />
                    </Route>
                    <Route path='/item/:itemid'>
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path='/cart'><Cart /></Route>
                    <Route>
                      <FinCompra />
                    </Route>
                </Switch>
          </BrowserRouter>
        </CartCacheMask>
      </header>
    </div>
  );
}

export default App;
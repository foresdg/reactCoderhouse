import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
//  
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetailSingle from './components/ItemDet/ItemDetailSingle.js'
import ItemCategoryTrack from './components/ItemCategoryTrack/ItemCategoryTrack.js';
import ItemCategorySoundFx from './components/ItemCategorySoundFx/ItemCategorySoundFx.js'
import Cart from './components/Cart/Cart'
import { CartCacheMask } from './context/cartContext';
import { useContext, useState } from 'react';

// const tracks = [
//   {id: '1', category: 'song', title: 'Space wrapper', price: 5, pictureUrl:'/img/1.jpg', descripcion: 'Un track de sonidos espaciales producido por XLR', stock: 10},
//   {id: '2', category: 'song', title: 'Sioux', price: 3, pictureUrl:'/img/2.jpg', descripcion: 'El protagonismo ambient con los pads de Brex22', stock: 10},
//   {id: '3', category: 'song', title: 'PFL Track', price: 8, pictureUrl:'/img/3.jpg', descripcion: 'Otra descripción de un track aún mejor de XLR', stock: 10},
//   {id: '4', category: 'soundfx', title: 'Quiet room', price: 2, pictureUrl:'/img/4.jpg', descripcion: 'Sonidos tribales para videos de tonos anaranjados', stock: 10},
//   {id: '5', category: 'soundfx', title: 'DXL flute', price: 4, pictureUrl:'/img/5.jpg', descripcion: 'El nuevo ingreso a la colección de manos de AmbientMST', stock: 10}];


function App() {


  const [widgetChange, setWidgetChange] = useState()
  
  return (

    <div className="App">
      <header className="App-header">
        <CartCacheMask>
          <BrowserRouter>
            <NavBar widgetChange={widgetChange} setWidgetChange={setWidgetChange}/>              
                <Switch>
                    <Route exact path='/'><ItemListContainer mostrar={<ItemDetailContainer />} /></Route>
                    {/* <Route exact path='/item/:id'><ItemListContainer mostrar={<ItemDetailSingle tracks={tracks} />} /></Route>
                    <Route exact path='/categoria/:song'><ItemListContainer mostrar={<ItemCategoryTrack tracks={tracks}/>} /></Route>
                    <Route exact path='/category/:soundfx'><ItemListContainer mostrar={<ItemCategorySoundFx tracks={tracks}/>} /></Route> */}
                    <Route exact path='/cart'><Cart /></Route>
                </Switch>
          </BrowserRouter>
        </CartCacheMask>
      </header>
    </div>
  );
}

export default App;
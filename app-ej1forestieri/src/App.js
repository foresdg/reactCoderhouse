import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetailSingle from './components/ItemDet/ItemDetailSingle.js'
import ItemCategoryTrack from './components/ItemCategoryTrack/ItemCategoryTrack.js';
import ItemCategorySoundFx from './components/ItemCategorySoundFx/ItemCategorySoundFx.js'
import Cart from './components/Cart/Cart'

const tracks = [
  {id: '1', cat: 'song', title: 'Space wrapper', price: 5, pictureUrl:'/img/1.jpg', descripcion: 'Un track de sonidos espaciales producido por XLR'},
  {id: '2', cat: 'song', title: 'Sioux', price: 3, pictureUrl:'/img/2.jpg', descripcion: 'El protagonismo ambient con los pads de Brex22'},
  {id: '3', cat: 'song', title: 'PFL Track', price: 8, pictureUrl:'/img/3.jpg', descripcion: 'Otra descripción de un track aún mejor de XLR'},
  {id: '4', cat: 'soundfx', title: 'Quiet room', price: 2, pictureUrl:'/img/4.jpg', descripcion: 'Sonidos tribales para videos de tonos anaranjados'},
  {id: '5', cat: 'soundfx', title: 'DXL flute', price: 4, pictureUrl:'/img/5.jpg', descripcion: 'El nuevo ingreso a la colección de manos de AmbientMST'}
];

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
            
            <Switch>
            
                <Route exact path='/'><ItemListContainer mostrar={<ItemDetailContainer tracks={tracks}/>} /></Route>
                <Route exact path='/item/:id'><ItemListContainer mostrar={<ItemDetailSingle productos={tracks} />} /></Route>
                <Route exact path='/categoria/:song'><ItemListContainer mostrar={<ItemCategoryTrack tracks={tracks}/>} /></Route>
                <Route exact path='/category/:soundfx'><ItemListContainer mostrar={<ItemCategorySoundFx tracks={tracks}/>} /></Route>
                <Route exact path='/cart'><Cart /></Route>

            </Switch>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;



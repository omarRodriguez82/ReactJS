import './App.css';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Main from './components/Main';
/* import Navbar2 from './components/Navbar2'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}></Route>
            <Route path={"/categoria/:id"} element={<ItemListContainer />}></Route>
            <Route path={"/Item/:id"} element={<ItemDetailContainer />}></Route>
            <Route path={"/Main"} element={<Main />}></Route>
            <Route path={"/Contacto"} element={<Contacto />}></Route>
            <Route path={"/Cart"} element={<Cart />}></Route>
            <Route path={"/*"} element={<Error404 />}></Route>                     
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

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
import CartContextProvider from './components/Context/CartContext';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path={"/"} element={<Main />}></Route>
              <Route path={"/categoria/:id"} element={<ItemListContainer />}></Route>
              <Route path={"/Item/:id"} element={<ItemDetailContainer />}></Route>
              <Route path={"/Main"} element={<Main />}></Route>
              <Route path={"/Contacto"} element={<Contacto />}></Route>
              <Route path={"/Cart"} element={<Cart />}></Route>
              <Route path={"/Checkout"} element={<Checkout />}></Route>
              <Route path={"/ThankYou/:orderId"} element={<ThankYou />}></Route>
              <Route path={"/*"} element={<Error404 />}></Route>                     
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

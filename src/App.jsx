import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import Navbar from './components/Navbar';
/* import Navbar2 from './components/Navbar2'; */

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Navbar2 /> */}
      <Main />
      <ItemListContainer/>
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;

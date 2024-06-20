import {useState} from 'react'
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems,setCartItems] = useState([])
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetail  cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/cart' element={<Cart  cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>

          </div>
        </Router>
     <Footer /> 
    </div>
  );
}

export default App;

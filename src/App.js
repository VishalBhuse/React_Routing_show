import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Home from './component/Home';

function App() {
  return (
    <div className="App">

      <Navbar />
      

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />}/>
      <Route path='/product/:id' element={<Product />}/>
      </Routes>

     
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Inventory from './Inventory';
import ProductDetails from './ProductDetails';

//////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
          <Route path={'/inventory'} element={<Inventory/>}></Route>
          <Route path={'/details'} element={<ProductDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

//////////////////////////////////////////////////

export default App;

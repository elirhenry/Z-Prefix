import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Inventory from './Components/Inventory';
import ProductDetails from './Components/ProductDetails';
import Header from './Components/Header';
import AddItem from './Components/AddItem';

//////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
          <Route path={'/inventory'} element={<Inventory/>}></Route>
          <Route path={'/details'} element={<ProductDetails/>}></Route>
          <Route path={'/add-new-item'} element={<AddItem/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

//////////////////////////////////////////////////

export default App;

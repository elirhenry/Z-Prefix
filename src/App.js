import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import ProductDetails from './Components/ProductDetails';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import Profile from './Components/Profile';

//////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/inventory'} element={<Inventory/>}></Route>
          <Route path={'/details'} element={<ProductDetails/>}></Route>
          <Route path={'/add-item'} element={<AddItem/>}></Route>
          <Route path={'/profile'} element={<Profile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

//////////////////////////////////////////////////

export default App;

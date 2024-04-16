import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
// import Login from '/Login.js';
// import Register from '/Register.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/home'} element={<Home/>}></Route>
          {/* <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//////////////////////////////////////////////////

const Home = () => {
  return (
    <div>
      <Login>
        <Link to={'/login'}>Login</Link>
      </Login>
      <Register>
        <Link to={'/register'}>Register</Link>
      </Register>
      <Visitor>
      <Link to={'/inventory'}>Visitor</Link>
      </Visitor>
    </div>
  )
}

//////////////////////////////////////////////////

const Login =styled.div`
font-size:20px;
color: black;`

const Register =styled.div`
font-size:20px;
color: black;`

const Visitor =styled.div`
font-size:20px;
color: black;`

//////////////////////////////////////////////////

export default Home;
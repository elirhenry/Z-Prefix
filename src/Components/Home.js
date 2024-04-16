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
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 20%;
`

const Register =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 40%;
`

const Visitor =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 60%;
`

//////////////////////////////////////////////////

export default Home;
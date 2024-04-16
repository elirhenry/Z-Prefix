import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//////////////////////////////////////////////////

const Home = () => {
  return (
    <div>
      <Login>
        <LoginLink to={'/login'}>Login</LoginLink>
      </Login>
      <Register>
        <RegisterLink to={'/register'}>Register</RegisterLink>
      </Register>
      <Visitor>
        <VisitorLink to={'/inventory'}>Visitor</VisitorLink>
      </Visitor>
    </div>
  );
}


//////////////////////////////////////////////////

const Login =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 20%;
padding: 10px;
`
const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

////

const Register =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 40%;
padding: 10px;
`
const RegisterLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

////

const Visitor =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 60%;
padding: 10px;
`

const VisitorLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

//////////////////////////////////////////////////

export default Home;
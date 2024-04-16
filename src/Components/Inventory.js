import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

//////////////////////////////////////////////////

//have link to ProductDetails component page

const Inventory = () => {
  return (
    <div>
      <Product>
      <Link to={'/details'}>Product Details</Link>
      </Product>
    </div>


  )
}

//////////////////////////////////////////////////

const Product =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 20%;
`

//////////////////////////////////////////////////

export default Inventory;
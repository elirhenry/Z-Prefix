import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';

//////////////////////////////////////////////////

const Inventory = () => {
  const[data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/items',
    // {
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify(data),
    // }
  )
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err));
  }, [data]);


  return (
    <div className='container'>
      <table className='table'>
        <button className='new-item-button'>Add New Item +</button>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Description</th>
        </tr>
      <tbody>
        {data.map((item, index) => (
          <tr key ={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
      </table>
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
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import AddItem from './AddItem';

//////////////////////////////////////////////////

const Inventory = () => {
  const[data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err));
  }, [data]);

  return (
    <div className='container mt-5'>
      <Link to='/add-new-item' className='new-item-button'>Add Item +</Link>
      <StyledTable className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Product>
        <Link to={'/details'}>Product Details</Link>
      </Product>
    </div>
  );
};

//////////////////////////////////////////////////

const Product =styled.div`
font-size:30px;
color: black;
text-align: left;
position: absolute;
top: 30%;
`

const StyledTable =styled.table`
width: 90%;
border-spacing: 1rem;
`

//////////////////////////////////////////////////

export default Inventory;
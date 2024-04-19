import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//////////////////////////////////////////////////

const Inventory = () => {
  const[data, setData] = useState([])
  const navigate= useNavigate()
  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
  }, [data]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?')
    if (confirmDelete) {
      axios.delete(`http://localhost:8080/items/${id}`)
        .then(res => {
          alert('Item deleted')
          navigate('/my-store')
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='container mt-5'>
      <AddItemLink to={'/add-item'}>New Item +</AddItemLink>
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
                <DetailsLink to={'/details'}>
                  <td>{item.name}</td>
                </DetailsLink>
              <td>{item.stock}</td>
              <td>{item.description}</td>
              <UpdateItemLink to={'/update-item'}>Edit</UpdateItemLink>
              <DeleteItemLink to="#" onClick={() => handleDelete(item.id)}>Delete</DeleteItemLink>
            </tr>
          ))}
        </tbody>
      </StyledTable>

    </div>
  );

};

//////////////////////////////////////////////////

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

const AddItemLink = styled(Link)`
text-decoration: none;
color: white;
background-color: green;
padding: 0.5rem 1rem;
display: inline-block;
margin-top: 10px;
`

const StyledTable =styled.table`
width: 100%;
border-spacing: 1rem;
`

const UpdateItemLink = styled(Link)`
text-decoration: none;
color: white;
background-color: blue;
padding: 0.5rem 1rem;
display: inline-block;
margin-top: 10px;
`

const DeleteItemLink = styled(Link)`
text-decoration: none;
color: white;
background-color: red;
padding: 0.5rem 1rem;
display: inline-block;
margin-top: 10px;
margin-left: 10px;
`

//////////////////////////////////////////////////

export default Inventory;
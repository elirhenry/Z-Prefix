import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//////////////////////////////////////////////////

const UpdateItem = () => {
  const [inputData, setInputData] = useState({
    name: '',
    stock: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/items', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })
      .then(response => {
        if (response.ok) {
          alert('Item updated');
          navigate('/my-store');
        } else {
          throw new Error('Failed to add item');
        }
      })
      .catch(error => {
        console.error('Error adding item:', error);
        alert('Failed to update item');
      });
      console.log(inputData)
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        name='name'
        placeholder='Name'
        className='form-control'
        onChange={e => setInputData({ ...inputData, name: e.target.value })}
      />
      <StyledInput
        type='text'
        name='stock'
        placeholder='Current Stock'
        className='form-control'
        onChange={e => setInputData({ ...inputData, stock: e.target.value })}
      />
      <StyledInput
        type='text'
        name='description'
        placeholder='Description'
        className='form-control'
        onChange={e => setInputData({ ...inputData, description: e.target.value })}
      />
      <StyledButton type='submit'>Submit</StyledButton>
    </StyledForm>
  );
};

//////////////////////////////////////////////////

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 1.5%;
  margin-bottom: 1.5%;
`;

const StyledButton = styled.button`
  background-color: #007bff; /* Use your desired button color */
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`;

//////////////////////////////////////////////////

export default UpdateItem;

import React from 'react';
import styled from 'styled-components';

//////////////////////////////////////////////////

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <HeaderLink href='/'>Database</HeaderLink>
      </HeaderStyle>
    </div>
  );
}

//////////////////////////////////////////////////

const HeaderStyle = styled.div`
  background-color: black;
  font-size: 50px;
  color: white;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;
  flex: 1;
`;

//////////////////////////////////////////////////

export default Header;
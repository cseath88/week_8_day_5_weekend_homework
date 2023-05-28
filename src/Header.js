import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 10px;
  &:first-child {
    margin-right: 20px;
}
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const BasketLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const BasketIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const Header = ({ basketTotal }) => {
  return (
    <HeaderWrapper>
      <Title>Seathies Bike Store</Title>
      <Nav>
        <NavItem>
          <NavLink to="/bikes">Bikes</NavLink>
        </NavItem>
        <NavItem>
          <BasketLink to="/basket">
            <BasketIcon icon={faBasketShopping} size="lg" />
            Basket
          </BasketLink>
        </NavItem>
        <NavItem>(£{basketTotal})</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;




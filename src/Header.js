import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`

const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`

const NavItem = styled.li`
    margin-right: 10px;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
    color: blue;
}
`

const BasketLink = styled(NavLink)`
    margin-left: auto;
`

const Header = ({basketTotal}) => {

    return (

        <HeaderWrapper>
        <Title>Seathies Bike Store</Title>
        <Nav>
            <NavItem>
            <NavLink to="/bikes">Bikes</NavLink>
            </NavItem>
            <NavItem>
            <BasketLink to="/basket">Basket</BasketLink>
            </NavItem>
            <NavItem>(£{basketTotal})</NavItem>
        </Nav>
        </HeaderWrapper>
    )
}

export default Header




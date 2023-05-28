import React from 'react';
import styled from 'styled-components';

const BikeItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const BikeName = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const BikePrice = styled.span`
    margin-right: 10px;
`;

const AddToBasketButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
    background-color: #0056b3;
}
`;

const BikeList = ({ bikes, addToBasket }) => {
    const bikeListItems = bikes.map((bike) => (
        <BikeItem key={bike.id}>
        <BikeName>{bike.name}</BikeName>
        <BikePrice>Price: £{bike.price}</BikePrice>
        <AddToBasketButton onClick={() => handleAddToBasket(bike)}>
            Add to Basket
        </AddToBasketButton>
        </BikeItem>
    ));

    const handleAddToBasket = (bike) => {
    addToBasket(bike);
};

return <ul>{bikeListItems}</ul>;
};

export default BikeList;

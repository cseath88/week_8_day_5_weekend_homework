import React from 'react';
import styled from 'styled-components';

const BasketContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const EmptyBasketMessage = styled.p`
  font-size: 16px;
  color: #999;
`;

const BasketList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BasketItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
  flex: 1;
`;

const ItemPrice = styled.span`
  margin-left: 10px;
`;

const RemoveButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e60000;
  }
`;

const TotalPrice = styled.div`
  margin-top: 10px;
  font-weight: bold;
  text-align: right;
`;

const Basket = ({ basket, removeFromBasket, basketTotal }) => {
  const handleRemoveFromBasket = (bikeId) => {
    removeFromBasket(bikeId);
  };

  return (
    <BasketContainer>
      <Title>Basket</Title>
      {basket.length === 0 ? (
        <EmptyBasketMessage>Your basket is empty.</EmptyBasketMessage>
      ) : (
        <BasketList>
          {basket.map((item, index) => (
            <BasketItem key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>£{item.price.toFixed(2)}</ItemPrice>
              <RemoveButton onClick={() => handleRemoveFromBasket(item.id)}>Remove</RemoveButton>
            </BasketItem>
          ))}
          <TotalPrice>Total: £{basketTotal.toFixed(2)}</TotalPrice>
        </BasketList>
      )}
    </BasketContainer>
  );
};

export default Basket;



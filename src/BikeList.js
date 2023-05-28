import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BikeListContainer = styled.ul`
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BikeItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const BikeName = styled.span`
    font-weight: bold;
    margin-right: 10px;
`

const BikePrice = styled.span`
    margin-right: 10px;
`

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
`

const AddToBasketButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`




const BikeList = ({ bikes, addToBasket }) => {
    const handleAddToBasket = (bike) => {
        addToBasket(bike)
    }

    return (
        <BikeListContainer>
            <Title>Bikes</Title>
            {bikes.map((bike) => (
                <BikeItem key={bike.id}>
                    <Link to={`/bike/${bike.id}`}> 
                        <BikeName>{bike.name}</BikeName>
                    </Link>
                    <BikePrice>Price: £{bike.price}</BikePrice>
                    <AddToBasketButton onClick={() => handleAddToBasket(bike)}>
                        Add to Basket
                    </AddToBasketButton>
                </BikeItem>
            ))}
        </BikeListContainer>
    )
}

export default BikeList

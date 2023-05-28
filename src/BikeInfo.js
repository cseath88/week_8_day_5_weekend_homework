import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const BikeInfoContainer = styled.div`
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

const BikeName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`

const BikeDescription = styled.p`
  margin-bottom: 10px;
`

const BikeDetails = styled.p`
  margin-bottom: 10px;
`




const BikeInfo = ({ bikes, addToBasket }) => {
  const { id } = useParams()
  const bikeId = parseInt(id)

  const bike = bikes.find((bike) => bike.id === bikeId)

  if (!bike) {
    return <div>Bike not found</div>
  }

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

  const handleAddToBasket = () => {
    addToBasket(bike)
}

  return (
    <BikeInfoContainer>
      <BikeName>{bike.name}</BikeName>
      <BikeDescription>Description: {bike.description}</BikeDescription>
      <BikeDetails>Gender: {bike.gender}</BikeDetails>
      <BikeDetails>Price: £{bike.price}</BikeDetails>
      <AddToBasketButton onClick={handleAddToBasket}>
        Add to Basket
      </AddToBasketButton>
    </BikeInfoContainer>
  )
}

export default BikeInfo



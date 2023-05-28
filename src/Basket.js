import styled from 'styled-components'

const Basket = ({basket, removeFromBasket}) => {

    const handleRemoveFromBasket = (bikeId) => {
        removeFromBasket(bikeId)
    }

    const basketTotal = basket.reduce((total, item) => total + item.price, 0)

    return (
        <div>
          <h2>Basket</h2>
          {basket.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            <ul>
              {basket.map((item, index) => (
                <li key={index}>
                  {item.name} - £{item.price}
                  <button onClick={() => handleRemoveFromBasket(item.id)}>Remove</button>
                </li>
              ))}
              Total: £{basketTotal}
            </ul>
          )}
        </div>
        
      )
      
}

export default Basket


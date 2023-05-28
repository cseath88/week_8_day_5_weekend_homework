import React, { useState } from "react"
import BikeList from "./BikeList"
import Header from "./Header"
import Basket from "./Basket"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from 'styled-components'

const BikeContainer = () => {

    const [bikes, setBikes] = useState([
        {id: 1, name: "Voodoo Bizango", description: "Every Voodoo bike is carefully designed to encapsulate the spirit of the trail.", gender: "Male", price: 750.00},
        {id: 2, name: "Carrera Hellcat", description: "Britain’s best selling bikes just got better.", gender: "Female", price: 410.00},
        {id: 3, name: "Boardman SLR", description: "Critically acclaimed for its balance of speed and comfort.", gender: "Male", price: 875.00},
        {id: 4, name: "Quella Nero", description: "A high quality, good-value and dependable commuter bicycle.", gender: "Female", price: 429.00}
    ])
    const [selectedBike, setSelectedBike] = useState(null)
    const [basket, setBasket] = useState([])

    const onBikeSelected = function (bike) {
        setSelectedBike(bike)
    }

    const addToBasket = (bike) => {
        setBasket([...basket, bike])
    }

    const removeFromBasket = (bikeId) => {
        setBasket((prevBasket) => {
            const index = prevBasket.findIndex((item) => item.id === bikeId)
            if (index !== -1) {
                const updatedBasket = [...prevBasket]
                updatedBasket.splice(index, 1)
                return updatedBasket
            }
            return prevBasket
        })
    }

    const basketTotal = basket.reduce((total, item) => total + item.price, 0)

    return (
        <Router>
            <Header basketTotal={basketTotal}/>
            <Routes>
                <Route path="/basket" element={<Basket basket={basket} basketTotal={basketTotal} removeFromBasket={removeFromBasket} />} />
                <Route path="/bikes" element={<BikeList bikes={bikes} addToBasket={addToBasket} />} />
            </Routes>
        </Router>
    )

}

export default BikeContainer



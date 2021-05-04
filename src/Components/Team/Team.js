import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import footballerData from '././../../Data/Data.json'
import "./Team.css"
const Team = () => {
    const [footballers, setFootballer] = useState([])
    const [cart, setCart] = useState([])
    const handler = ((footballer) => {
        const newCart = [...cart, footballer];
        setCart(newCart)
    })

    useEffect(() => {
        setFootballer(footballerData)
    }, [])

    return (
        <div className="team-container">
            <div className="player-container">
                {footballers.map(footballer => <Player footballer={footballer} hand={handler}></Player>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;
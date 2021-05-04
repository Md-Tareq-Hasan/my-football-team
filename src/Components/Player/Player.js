import React from 'react';
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { image, name, salary } = props.footballer;
    return (
        <div className="player bg-success text-white">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="player-info ">
                <h3>{name}</h3>
                <p>Salary: ${salary}</p>
                <button className='add-btn' onClick={() => props.hand(props.footballer)}><FontAwesomeIcon icon={faShoppingCart} /> Buy Player</button>
            </div>
        </div>
    );
};

export default Player;
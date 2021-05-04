import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const budget = cart[i];
        total = total + parseInt(budget.salary);
    }
    return (
        <div>
            {
                cart.map(cartValue =>
                    <div className="card bg-success text-white decorate ">
                        <img src={cartValue.image} alt="" />
                        <p>Selected Player: {cartValue.name}</p>
                        <p>Salary: ${cartValue.salary}</p>
                    </div>)
            }
            <div className="card bg-danger text-white decorate">
                <h5>Total Selected: {cart.length} </h5>
                <h5>Total Budget: ${total}</h5>
            </div>
        </div>
    );
};

export default Cart;
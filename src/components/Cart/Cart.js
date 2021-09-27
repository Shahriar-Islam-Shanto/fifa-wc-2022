import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalSalary = 0;
    let leaderName = [];
    for (const leader of cart) {
        totalSalary = totalSalary + leader.salary;
        leaderName.push(leader.name);
    }
    return (
        <div className="cart rounded-3">
            <h4 className="mb-3 pt-2"><i className="fas fa-user"></i> Leaders Added: {cart.length}</h4>
            {
                leaderName.map(name => <h5 className="cart-name py-1 rounded-3">{name}</h5>)
            }
            <h4 className="mt-3">Total Cost: ${totalSalary}</h4>
            <button className="btn btn-primary border-info px-4 my-2">Buy Now</button>
        </div>
    );
};

export default Cart;
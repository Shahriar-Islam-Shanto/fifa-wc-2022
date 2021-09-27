import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Leader from '../Leader/Leader';
import './Leaders.css';

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./leaders.json')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, []);

    const handleAddToCart = leader => {
        const newCart = [...cart, leader];
        const uniqueCart = [...new Set(newCart)];
        setCart(uniqueCart);
    }

    return (
        <>
            <div className="hr text-success">
                <hr className=" w-75 mx-auto" />
                <hr className=" w-50 mx-auto" />
            </div>
            <div className="leaders-container">
                <div className="leaders">
                    {
                        leaders.map(leader => <Leader leader={leader} key={leader.id} handleAddToCart={handleAddToCart}></Leader>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className="hr text-success">
                <hr className=" w-50 mx-auto" />
                <hr className=" w-75 mx-auto" />
            </div>
        </>
    );
};

export default Leaders;
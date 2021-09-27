import React from 'react';
import './Leader.css';

const Leader = (props) => {
    const { image, name, title, age, country, salary } = props.leader;
    return (
        <div className="card h-100 pt-3 leader">
            <img src={image} className="card-img-top mt-3 mx-auto" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-center"><span className="text-primary">{name}</span></h4>
                <h5 className="card-text">Title: <span className="information">{title}</span></h5>
                <p className="card-text">Age: <span className="information">{age}</span></p>
                <p className="card-text">Country: <span className="information">{country}</span></p>
                <p className="card-text">Salary: <span className="information">${salary}</span></p>
            </div>
            <div className="card-footer text-center">
                <button onClick={() => props.handleAddToCart(props.leader)}
                    className="btn-add-to-cart px-3 py-1 rounded-3"><i className="fas fa-cart-plus"></i> Add to Cart</button>
                <div className="social-icons w-50 mx-auto d-flex justify-content-evenly">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Leader;
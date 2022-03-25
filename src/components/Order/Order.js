import React from 'react';
import './Order.css'

const Order = ({ order }) => {
    return (
        <div className='order-list'>
            <h4>{order.strMeal}</h4>
        </div>
    );
};

export default Order;
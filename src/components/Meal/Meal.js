import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Meal.css'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Meal = ({ meal, order }) => {
    const { strMeal, strCategory, strArea, strInstructions, strTags, strMealThumb, idMeal } = meal;
    return (
        <div className='col-md-6 pt-3 pb-3 mb-5 meal'>
            <img src={strMealThumb} className='img-fluid' alt="" />
            <h5 className='text-warning pb-3'>Name : {strMeal}</h5>
            <p>Description : {strInstructions.slice(0, 350)}</p>
            <h6>Category : {strCategory}</h6>
            <h6><small>Tag : {strTags ? strTags : 'None'}</small></h6>
            <button onClick={() => order(meal)} className='btn btn-warning w-100 mt-4 mb-4'><FontAwesomeIcon className='pe-2' icon={faCartArrowDown}></FontAwesomeIcon>Order Meal</button>
        </div>

    );
};

export default Meal;
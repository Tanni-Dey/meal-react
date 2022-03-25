import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Meals.css'
import Order from '../Order/Order';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const handleOrder = (meal) => {
        const newOrder = [...orders, meal]
        setOrders(newOrder)
        console.log('new : ', newOrder);
    }
    console.log(meals);
    return (
        <div className='container'>
            <div className='row meals'>
                <div className='col-md-9 row'>
                    <h1 className='text-warning m-5'>Foods</h1>
                    {
                        meals.map(meal => <Meal order={handleOrder} key={meal.idMeal} meal={meal}></Meal>)
                    }
                </div>
                <div className='col-md-3 bg-warning ms-4 mt-5 p-3 '>
                    <div className='order'>
                        <h2 >Ordered Meals: {orders.map(order => <Order order={order}></Order>)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;
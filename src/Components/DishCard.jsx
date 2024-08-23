import React from 'react';
import "./Dishcard.css"
const DishCard = ({DishName,DishDescription,Price,Rating}) => {
  return (
    <div className="dish-card">
      <div className="dish-image">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" alt="Pancakes" />
      </div>
      <div className="dish-content">
        <h3 className="dish-title">{DishName}</h3>
        <p className="dish-description">{DishDescription}</p>
        <div className="dish-details">
          <span className="dish-price">${Price}</span>
          <span className="dish-rating">Rating:{Rating}/5</span>
        </div>
        <div className="dish-actions">
          <button className="dish-button">Order Now</button>
          <button className="dish-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
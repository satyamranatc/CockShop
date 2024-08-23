import React,{useState} from 'react';
import "./SideBar.css"

const SideBar = ({DishData,Country,setDishData}) => {

  const [filteredDishes, setFilteredDishes] = useState(DishData);

  return (
    <aside className="sidebar">
      <div className="filter-card">
        <h3 className="filter-card-title">Country</h3>
        <select onChange={(e)=>{
          let selectedCountry = e.target.value;

          //! let filteredDish = DishData.filter(d => d.country == selectedCountry);
          //! setFilteredDishes(filteredDish);
          
        }} 
        
        className="filter-card-dropdown" name="country" id="country">
          {
            Country.map((c, id) => (
              <option key={id} value={c}>{c}</option>
            ))
          }
        </select>
      </div>

      <div className="filter-card">
        <h3 className="filter-card-title">Type of Food</h3>
        <select className="filter-card-dropdown" name="food-type" id="food-type">
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>

        </select>
      </div>

      <div className="filter-card">
        <h3 className="filter-card-title">Price</h3>
        <input className="filter-card-price-range" type="range" min="1" max="1000" id="priceRange" name="priceRange" />
      </div>

      <div className="filter-card">
        <h3 className="filter-card-title">Sort By</h3>
        <div className="filter-card-sort-options">
          <div className="filter-card-sort-option">
            <input type="radio" name="sort" id="sortHighToLow" value="highToLow" />
            <label htmlFor="sortHighToLow">High To Low</label>
          </div>
          <div className="filter-card-sort-option">
            <input type="radio" name="sort" id="sortLowToHigh" value="lowToHigh" />
            <label htmlFor="sortLowToHigh">Low To High</label>
          </div>
          <div className="filter-card-sort-option">
            <input type="radio" name="sort" id="sortByRating" value="rating" />
            <label htmlFor="sortByRating">By Rating</label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
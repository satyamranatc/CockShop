import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


//!------------------------------------

//* NavBar:
import NavBar from './Components/NavBar'

//* Pages
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'


//!------------------------------------

export default function App() {

  const [DishData,setDishData] = useState([
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      name: 'Spaghetti Bolognese',
      description: 'Hearty spaghetti in a rich tomato and beef sauce',
      price: 12.99,
      rating: 4.7,
      country: 'Italy',
      typeOfFood: 'Dinner'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
      name: 'Grilled Salmon',
      description: 'Flavorful grilled salmon served with roasted vegetables',
      price: 18.99,
      rating: 4.5,
      country: 'Australia',
      typeOfFood: 'Lunch'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
      name: 'Chicken Pad Thai',
      description: 'Thai-style rice noodles with chicken, veggies, and a sweet and tangy sauce',
      price: 15.99,
      rating: 4.3,
      country: 'China',
      typeOfFood: 'Dinner'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      name: 'Beef Tacos',
      description: 'Seasoned ground beef with fresh toppings in warm tortillas',
      price: 10.99,
      rating: 4.6,
      country: 'Mexico',
      typeOfFood: 'Lunch'
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
      name: 'Vegetable Stir-Fry',
      description: 'Fresh vegetables sautéed in a flavorful sauce, served over rice',
      price: 13.99,
      rating: 4.4,
      country: 'China',
      typeOfFood: 'Lunch'
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9',
      name: 'Chicken Parmesan',
      description: 'Breaded and fried chicken breast topped with marinara and melted cheese',
      price: 16.99,
      rating: 4.8,
      country: 'Italy',
      typeOfFood: 'Dinner'
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
      name: 'Beef Stroganoff',
      description: 'Tender beef in a creamy mushroom sauce, served over egg noodles',
      price: 14.99,
      rating: 4.2,
      country: 'Russia',
      typeOfFood: 'Dinner'
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      name: 'Shrimp Scampi',
      description: 'Sautéed shrimp in a garlic butter sauce, served over linguine',
      price: 19.99,
      rating: 4.7,
      country: 'Italy',
      typeOfFood: 'Dinner'
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
      name: 'Chicken Enchiladas',
      description: 'Shredded chicken wrapped in tortillas, topped with enchilada sauce and cheese',
      price: 13.99,
      rating: 4.5,
      country: 'Mexico',
      typeOfFood: 'Lunch'
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      name: 'Vegetable Lasagna',
      description: 'Layers of pasta, vegetables, and creamy béchamel sauce',
      price: 15.99,
      rating: 4.6,
      country: 'Italy',
      typeOfFood: 'Dinner'
    },
    // Add more dish objects as needed
  ]);
  



  return (
    <div>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home DishData = {DishData} setDishData = {setDishData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

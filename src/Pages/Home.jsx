import React, { useState,useEffect } from 'react'
import "./Home.css"
import SideBar from "../Components/SideBar.jsx"

import DishCard from "../Components/DishCard.jsx"

export default function Home({DishData,setDishData}) {

  let [Country,setCountry] = useState([]);


  useEffect(()=>{
    let c = []
    for(let i of DishData)
    {
      console.log(i.typeOfFood)
      if (!c.includes(i.country))
      {

        c.push(i.country)
      }
    }
    setCountry(c)

  },[])



  return (
    <div id = "Home">

      <SideBar DishData = {DishData} setDishData = {setDishData} Country = {Country} />

    <div id="DishesGrid">

      {
        DishData.map((dish,id) => (
          <DishCard key={id} DishName={dish.name} DishDescription={dish.description} Price={dish.price} Rating={dish.rating} />
        ))
      }

    
    </div>






    </div>
  )
}

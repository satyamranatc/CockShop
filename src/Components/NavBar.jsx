import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>

        <div id="Logo">
            <img src="https://static.vecteezy.com/system/resources/previews/008/863/243/non_2x/cooking-vegetables-flat-design-healthy-food-logo-free-vector.jpg" alt="" />
        </div>


        <div id="Menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            
            </ul>
            
        </div>
        <div id="UserAcount">
            <ul>
                <li><button id = "AcountButton1" >Notification</button></li>
                <li><Link  to="/cart" id = "AcountButton2" >Cart</Link></li>
            </ul>
        </div>


    </nav>



    

  )
}

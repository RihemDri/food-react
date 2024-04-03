import React from 'react';
import Meal from './Components/Meal';
import './App.css';
import './Components/style.css';
import {Route,Routes} from 'react-router-dom';
import Informations from './Components/Informations';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';

function App() {
  return (
    <>
   <nav className="navbar">
      <div className="logo">
        <img src="food-icon.png" alt="Food Icon" />
        <span>Explore Delicious Recipes</span>
      </div>


   


      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Meal">Recipes</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About Us</Link>
        </li>
        <li className="nav-item">
        <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

     <Routes>
        <Route  path="/home" element={<Home/>}/>  
        <Route  exact path="/Meal" element={<Meal/>}/>
        <Route exact path="/:recipeId" element={<Informations/>}/>
        <Route  exact path="/About" element={<About/>}/>

      </Routes>
      <Footer />
    </> 
        
  );
}

export default App;

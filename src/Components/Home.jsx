import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import './Home.css';
import Item from "./Item";


function Home() {
    const [url, setUrl] = useState(
        "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const [item, setItem] = useState();
  const [show, setShow] = useState(false);

    
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
     
    return (  <>
     <div className="home">
      <section className="section">
        <div className="content">
          <h1 className="title">Welcome to FoodiesHub</h1>
          <p className="info">
            Explore a world of delightful recipes from various cuisines. 
 
            FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine.
             And our service is absolutely free. So start exploring now.
          </p>
          <Link to="/Meal" className="explore-button">
            Explore Recipes
          </Link>
        </div>
        <div className="images">
          <img src="photo5.gif" alt="Food 1" />
          
        </div>
      </section>

      <section className="section">
      {/* <div className="content">
      <div className="container">
      <h2 className="subtitle">Featured Recipes</h2>
      <div className="featured-recipes">
          {
            show ? <Item data={item} /> : "Not Found "
 
          }
            </div>
        </div>
        </div> */}

<div className="content">
          <h2 className="subtitle">Featured Recipes 🍕</h2>
          <div className="featured-recipes">
            <div className="recipe">
              <img src="photo1.png" alt="Recipe 1" />
              <h3 className="recipe-title">Delicious Dish 1</h3>
            </div>
            <div className="recipe">
              <img src="photo3.png" alt="Recipe 2" />
              <h3 className="recipe-title">Tasty Treat 2</h3>
            </div>
            
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="quote-content">
          <p className="quote-text">
          ✔️ "Cooking is an art, and every dish is a masterpiece."
          </p>
          <p className="quote-author">- Chef John Doe</p>
        </div>
        <div className="quote">
  <p className="quote-text">
  ✔️ "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart."
  </p>
  <p className="quote-author">- Wolfgang Puck</p>
</div>

      </section>
      <section className="tips">
        <div className="content">
          <h2 className="section-title">Cooking Tips</h2>
          <div className="tip">
            <h3 className="tip-title"> Équilibre Nutritionnel </h3>
            <p className="tip-text">
               Encouragez l'équilibre entre les macronutriments (glucides, protéines, lipides) dans les repas pour une alimentation saine.
            </p>
          </div>
          <div className="tip">
            <h3 className="tip-title">Portions Contrôlées</h3>
            <p className="tip-text">
               Mettez l'accent sur la taille des portions pour éviter la surconsommation
            </p>
           </div>
           <div className="tip">
            <h3 className="tip-title"> Variété Alimentaire </h3>
            <p className="tip-text">
            Encouragez la consommation d'une grande variété d'aliments pour s'assurer d'obtenir une gamme complète de nutriments.            </p>
          </div>
          <div className="tip">
            <h3 className="tip-title">  Fruits et Légumes </h3>
            <p className="tip-text">
            Recommandez de consommer une grande quantité de fruits et légumes pour leurs vitamines, minéraux et fibres
             </p>
          </div>
          <div className="tip">
            <h3 className="tip-title">    Limitation des Sucres et Gras Saturés  </h3>
            <p className="tip-text">
            Proposez des alternatives plus saines aux sucres raffinés et aux graisses saturées.
             </p>
          </div>
          <div className="tip">
            <h3 className="tip-title">  Hydratation Adequate   </h3>
            <p className="tip-text">
            Rappeler l'importance de rester bien hydraté tout au long de la journée.            </p>
          </div>
         </div>
      </section>
    </div>
    
    
    
    </>);
}

export default Home;
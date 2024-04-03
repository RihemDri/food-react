import React, { useEffect, useState } from "react";
import Item from "./Item";
import RecipeI from "./RecipeI";
function Meal() {
  /*the url hold the data and
     the set update the data
     and we pass (initial value ) */
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  /*useeffect run each time when we render 
   if we pass the empty array it will run only once
   if we pass an item inside the array exp url kol mara he change the useeffect run   */
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
 
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      // Faites quelque chose lorsque la touche "Entrée" est pressée

      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1 style={{ color: '#26474E' }}>
            Unleash Your Inner Chef with Our Recipes
          </h1>

          <h3>Search Your Food Recipe</h3>
        </div>
        <div className="searchBox">
           <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchRecipe}
            placeholder="Enter Your Food Name..."
 
            
          />
          
        </div>
        <div className="container">
          {
            show ? <Item data={item} /> : "Not Found "

            /*ken true affiche eslse not found */
          }
        </div>
        <div className="indexStyle">
          <RecipeI alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
}

export default Meal;

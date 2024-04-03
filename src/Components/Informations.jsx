import React, { useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

var id = "";

function Informations() {
  // const navigate = useNavigate();
  // const handleGoBack = () => {
  //   navigate("/Meal"); // This will navigate back to the Meal component
  // };


  const [item, setItem] = useState();

  const { recipeId } = useParams();
  if (recipeId !== " ") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
        console.log(data.meals);
      });
  }
  if (item) {
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  }

  return (
    <>
      <h3>Find YOur Recipe détails HERE  </h3>

      {!item ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={item.strMealThumb} alt="" />

            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea} Food</h2>
              <h3>Category {item.strCategory}</h3>
            </div>
          </div>

          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <br />
              <h4>
                {item.strIngredient1}:{item.strMeasure1}
              </h4>
              <h4>
                {item.strIngredient2}:{item.strMeasure2}
              </h4>
              <h4>
                {item.strIngredient3}:{item.strMeasure3}
              </h4>
              <h4>
                {item.strIngredient4}:{item.strMeasure4}
              </h4>
              <h4>
                {item.strIngredient5}:{item.strMeasure5}
              </h4>
              <h4>
                {item.strIngredient6}:{item.strMeasure6}
              </h4>
              <h4>
                {item.strIngredient7}:{item.strMeasure7}
              </h4>
              <h4>
                {item.strIngredient8}:{item.strMeasure8}
              </h4>
              <h4>
                {item.strIngredient9}:{item.strMeasure9}
              </h4>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <br />
              <h4>{item.strInstructions}</h4>
            </div>
            <div className="video">


              <iframe
              
                title="recipeVideo"
                src={`https://www.youtube.com/embed/${id}`}
              ></iframe>
            </div>
          </div>
        </>
      )}

{/* <button
  onClick={handleGoBack}
  style={{
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#F7CE76",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center"
  }}
>
  🍔 Go Back to Meals 🍕 
</button> */}

    </>
  );
}

export default Informations;

import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1> <br/>
        <p className="about-text">
        Welcome to Foodies, where passion meets the plate! We're more than just a recipe collection.  </p>
        <p className="about-text">
          Unleash your inner chef and embark on a culinary adventure with FoodiesHub. We're passionate about bringing you the most delightful recipes from around the world.
        </p>
        <p className="about-text">
          From sizzling street food to gourmet delights, our curated collection will tantalize your taste buds and elevate your cooking skills.
        </p> <br/>
       
      </div>
      <div className="tips">
        <h2 className="tips-heading">Cooking Tips from Our Kitchen</h2>
        <ul className="tips-list">
          <li>Experiment with different herbs and spices to create unique flavor profiles.</li>
          <li>Use seasonal ingredients for fresher and more vibrant dishes.</li>
          <li>Master basic techniques to build a strong foundation in cooking.</li>
          <li>Don't be afraid to add your own twist to recipes!</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

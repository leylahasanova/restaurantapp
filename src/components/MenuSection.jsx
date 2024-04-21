import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MenuBox from "./MenuBox";
import menu from "../menu.json";

function MenuSection({ images }) {
  const categories = Array.from(new Set(menu.map(item => item.category)));

   // State to track selected category
   const [selectedCategory, setSelectedCategory] = useState("All");

   // Filter images based on selected category
   const filteredImages = selectedCategory === "All" ? images : images.filter(image => image.category === selectedCategory);
 
 
  return (
    <>
      <article className="menu">
        <div className="container">
          <div className="menuSection">
            <div className="menuHeading">
              <h2>Fresh, Tasty Meals</h2>
              <h3>Discover Our Menu</h3>
              <p>
                Steak In has the perfect place to enjoy fine food and great
                cocktails with excellent service, in comfortable atmospheric
                surroundings. We have a soft dining room, combined with an open
                kitchen, coffee take out bar and alovely awesome on site coffee
                roastery.
              </p>
              <ul>
                <li onClick={() => setSelectedCategory("All")}>All</li>
                {/* <li>{menu.category}</li>
                <li>Dessert</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Lunch</li> */}
                {categories.map(category => (
                  <li key={category} onClick={() => setSelectedCategory(category)}>{category}</li>
                ))}
              </ul>
            </div>
            <div className="menuBox">
             <MenuBox images={filteredImages}/>
            </div>
            <Link to="/menu">
          <button className="menuButton">DICOVER FULL MENU</button>
          </Link>
           
          </div>
        </div>
      </article>
     
    </>
  );
}

export default MenuSection;

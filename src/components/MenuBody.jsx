import React, { useState } from 'react';
import menu from "../menu.json";
import Model from "./Model";

function MenuBody() {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getData = (img, name) => {
    let tempData = [img, name];
    setTempdata(tempData);
    return setModel(true);
  };

  // Extract unique categories from menu items
  const categories = Array.from(new Set(menu.map(item => item.category)));

  // Filter menu items based on selected category
  const filteredMenu = selectedCategory === "All" ? menu : menu.filter(item => item.category === selectedCategory);

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
                {categories.map(category => (
                  <li key={category} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="menuBox">
              {filteredMenu.map((data, index) => (
                <div key={index} className="menuBox__box">
                  <div className="meal__text">
                    <div className="specialBorder"></div>
                    <h2>{data.price}</h2>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                  </div>
                  <div className="mealImg">
                    <img src={data.img} alt={data.name} className="mealImg_img" />
                    <div className="hoverBox">
                      <i
                        className="fa-solid fa-magnifying-glass"
                        onClick={() => getData(data.img, data.name)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {model === true ? (
        <Model
          img={tempdata[0]}
          name={tempdata[1]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MenuBody;


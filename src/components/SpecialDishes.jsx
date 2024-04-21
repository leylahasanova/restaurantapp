import React, { useState } from "react";
import Model from "./Model"
import "bootstrap/dist/css/bootstrap.min.css"

export const SpecialDishes = ({ images }) => {
  
  const limitedImages = images.slice(0, 4).map((item) => ({
    ...item,
    description:
      item.description.length > 80
        ? item.description.slice(0, 80) + "..."
        : item.description,
  }));  
 
  console.log(images.img);

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState ([]);

  const getData = (img, name) => {
    let tempData = [img, name];
    setTempdata(tempData)
    return setModel(true);
  } 

 
  return (
    <>
        <article className="special">
        <div className="special__bck">
          <div className="row-divider-top">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128.125"
              height="13.5"
              viewBox="0 0 128.125 13.5"
            >
              {" "}
              <path
                fill="#fff"
                data-name="Divder Down"
                d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z"
                transform="translate(-735.938 -518)"
              ></path>{" "}
            </svg>
          </div>
          <div className="row-divider-bottom">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128.125"
              height="13.5"
              viewBox="0 0 128.125 13.5"
            >
              {" "}
              <path
                fill="#fff"
                data-name="Divder Top"
                d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z"
                transform="translate(-735.938 -518)"
              ></path>{" "}
            </svg>
          </div>
          <div className="specialBck">
            <div className="specialShadow"></div>
          </div>
          <div className="special__dishes">
            <div className="specialBorder"></div>
            <div className="dish__head">
              <h2>Delicious Recipes</h2>
              <h3>Our Special Dishes</h3>
            </div>
            <div className="dish__box">
              {limitedImages.map((data, index) => (
                <div key={index} className="dish__box__box">                  
                  <div className="dish__img">
                  
                    <img src={data.img} alt={data.name} className="dish__img" />
                    <div className="hoverBox">
                      <i className="fa-solid fa-magnifying-glass fullScreenIcon" 
                     onClick={() => getData(data.img, data.name)}></i>
                    </div>
                  </div>
                  <div className="dish__text">
                    <h3>{data.name}</h3>
                    <h2>{data.price}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
      {
        model ===true ? <Model img={tempdata[0]} name={tempdata[1]} hide={() => setModel(false)}  />: ''
      }
    </>
  );
};

export default SpecialDishes;

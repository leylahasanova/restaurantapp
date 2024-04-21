import React, { useState } from "react";
import Model from "./Model";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuBox({ images }) {
  const limitedImages = images.slice(0, 4).map((desc) => ({
    ...desc,
    description:
      desc.description.length > 80
        ? desc.description.slice(0, 110) + "..."
        : desc.description,
  }));
console.log(images);
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, name) => {
    let tempData = [img, name];
    setTempdata(tempData);
    return setModel(true);
  };

  return (
    <>
      {limitedImages.map((data, index) => ( 
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

export default MenuBox;

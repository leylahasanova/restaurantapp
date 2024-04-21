import React from 'react'
import menuTitle from "../images/menuTitle.jpg"


function MenuTitle() {
  return (
    <>
    <div className="pageTitle">
        <img src={menuTitle} alt="" />
        <div className="titleBck"></div>
        <div className="titleText">
          <h2>Fresh, Tasty Meals</h2>
          <h3>Discover Our Menu</h3>          
        </div>
        <div class="row-divider-bottom"> <svg xmlns="http://www.w3.org/2000/svg" width="128.125" height="13.5" viewBox="0 0 128.125 13.5"> <path fill="#fff" data-name="Divder Top" d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z" transform="translate(-735.938 -518)"></path> </svg></div>
      </div>
      
    </>
  )
}

export default MenuTitle

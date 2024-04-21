import React from 'react'
import MenuTitle from '../components/MenuTitle';
import MenuBody from '../components/MenuBody';
// import images from "../menu.json";



function Menu({images}) {
  
  return (
    <>
    <MenuTitle/>
    <MenuBody images={images}/>
      

      
    </>
    
  )
}

export default Menu

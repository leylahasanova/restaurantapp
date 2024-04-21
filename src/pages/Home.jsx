import React from 'react';
import slides from '../mock.json';
import images from '../menu.json'
import { Slider } from '../components/Slider';
import About from '../components/About';
import SpecialDishes from '../components/SpecialDishes';
import Menusection from '../components/MenuSection';
import BlogSection from '../components/BlogSection';


// import Buttons from "../components/Buttons"

function Home() {
 

  return (
    <> 
    <Slider slides={slides}/>
    <About/>
    <SpecialDishes images={images}/>
    {/* <Buttons menuItems={menuItems}/> */}
    <Menusection images={images}/>
    <BlogSection/>
    
    


    </>
  )
}

export default Home
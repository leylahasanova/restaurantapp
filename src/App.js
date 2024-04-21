import React, { useState, useEffect } from "react";
import "../src/assets/css/main.css";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import FooterSection from "./components/FooterSection";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart"
import Footer from "./components/Footer";
import Reservation from "./pages/Reservation";
import { useLocation } from "react-router-dom";





const App =() => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  // baskete elave olunma
  const handleClick = (item) => {
    // console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
  })
    if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return ;
    }
    
    setCart([...cart, item]);
  }


  // qiymeti
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
      ind = index;

    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
      tempArr[ind].amount =1;
    setCart([...tempArr])
  }
  const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

  return (
    < >
    <Header size={cart.length} setShow={setShow}/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/our-story" element={ <OurStory/> } />
        <Route path="/menu" element={ <Menu /> } />        
        {/* <Route path="/contact" element={ <Contact/> } /> */}
        <Route path="/reservation" element={ <Reservation/> } />
       { show ? ( 
       <Route path="/shop" element={ <Shop handleClick={handleClick} /> } /> ):(
       <Route path="/cart" element={ <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> } /> 
      )}
        
       
      </Routes>
      {
          warning && alert("Meal is already added to your cart!")
        }
      
      <FooterSection/>
      <Footer/>
    </>

  );
}

export default App;

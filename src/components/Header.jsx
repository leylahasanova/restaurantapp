import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header({size, setShow}) {
  //  burger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open)
  };



  // header-in scroll edende gorunmesi
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <header>
        <div className="container">
          <div className={header ? "header active" : "header"}>
            <div className="header__logo">
              <h3>Steak in</h3>
            </div>
            <div className="header__pages">
              <ul className={` ${isOpen ? "is-open" : " "}`}>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/our-story" activeClassName="active">
                    Our Story
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/our-chefs" activeClassName="active">
                    Our Chefs
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/menu" activeClassName="active">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" activeClassName="active" onClick={() => setShow(true)}>
                    Shop
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li> */}
              </ul>
              {/* <NavLink to="/booking" activeClassName="active">
              <button> Book a table</button>
                  </NavLink> */}
            </div>
            <div className="header__menu">
              <ul>
                {/* <li>
                <NavLink to="/search" activeClassName="active">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </NavLink>
                </li> */}

                <li>
                  <Link to="/cart" activeClassName="active" onClick={() => setShow(false)}>
                  
                    <i className="fa-solid fa-cart-shopping" ></i>
                    <span className="basketCount">{size}</span>
                  </Link>
                  
                </li>

                {/* <li>
                <Link to="/bars" activeClassName="active">
                    <i className="fa-solid fa-bars"></i>
                 </Link>
                </li> */}
              </ul>
              <Link to="./menu" className="header__menu__icon" >
                <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

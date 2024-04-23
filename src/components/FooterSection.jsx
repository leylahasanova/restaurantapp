import React from "react";

function FooterSection() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <svg
              className="footer-divider"
              xmlns="http://www.w3.org/2000/svg"
              width="128.125"
              height="13.5"
              viewBox="0 0 128.125 13.5"
            >
              {" "}
              <path
                data-name="Divder Down"
                d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z"
                transform="translate(-735.938 -518)"
              ></path>{" "}
            </svg>
            <div className="iconDiv">
              <h2>FOLLOW US</h2>
              <div className="icon">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div className="footerP">
              <h2>Steak In</h2>
              <p>
                Steak In has the perfect place to enjoy fine food and great
                cocktails with excellent service, in comfortable atmospheric
                surroundings. We have a soft dining room, combined with an open
                kitchen, coffee take out bar.
              </p>
              
            </div>
            <div className="inp">
              <p>NESWLETTER</p>
              <div>
                <input type="text" placeholder="Subscrabe Our Newsletter" />
              </div>
            </div>
          </div>
        </div>
        <div className="adress">
                <p> <i class="fa-solid fa-location-dot"></i>
                <span>   Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.</span>
                    </p>
                <p>
                <i class="fa-solid fa-phone"></i>
                <span>002 01065370701                    
                </span>
                  
                  </p>
                  
                  
                
              </div>
      </footer>
    </>
  );
}

export default FooterSection;

import React from "react";
import about1 from "../images/home1.jpg";
import about2 from "../images/home2.jpg";


function About() {
  return (
    <>
      <article className="booking">
        <div className="container">
          <div className="booking__box">
            <div className="booking__box__text">
              <h2>Hello Dear</h2>
              <h3>We are Steak In!</h3>
              <p>
                Steak In has the perfect place to enjoy fine food and great
                cocktails with excellent service, in comfortable atmospheric
                surroundings. We have a soft dining room, combined with an open
                kitchen, coffee take out bar and alovely awesome on site coffee
                roastery.
              </p>
              <button>BOOK A TABLE</button>
            </div>

            <div className="booking__pic">
              <div
                className="booking1 aos-reveal-ltr"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="700"
                data-aos-duration="700"
              >
                <img
                  src={about1}
                  alt=""
                  className="aos-reveal-ltr"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="1000"
                  data-aos-duration="1000"
                />
                <div className="border1"></div>
              </div>
              <div
                className="booking2 aos-reveal-ltr"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="700"
                data-aos-duration="700"
              >
                <img
                  src={about2}
                  alt=""
                  className="aos-reveal-ltr"
                  data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="1000"
                  data-aos-duration="1000"
                />
                <div className="border2"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default About;

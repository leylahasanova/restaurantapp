import React from 'react'
import storyTitle from "../images/ourStoryTitle.jpg";
import Quote from "../components/Quote";
import story1 from "../images/story1.jpg";
import story2 from "../images/story2.jpg"
import BlogSection from '../components/BlogSection';

function OurStory() {
  return (
    <>
    <div className="pageTitle">
        <img src={storyTitle} alt="" />
        <div className="titleBck"></div>
        <div className="titleText">
          <h2>Our Story</h2>
          <h3>We Are Steak In!</h3>          
        </div>
        <div class="row-divider-bottom"> <svg xmlns="http://www.w3.org/2000/svg" width="128.125" height="13.5" viewBox="0 0 128.125 13.5"> <path fill="#fff" data-name="Divder Top" d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z" transform="translate(-735.938 -518)"></path> </svg></div>
      </div>
      <article class="booking storyBooking">
        <div class="container">
            <div class=" story__box booking__box">
                <div class="booking__box__text story__text">
                    <h2>Hello Dear</h2>
                    <h3>We are Steak In!</h3>
                    <p>Steak In has the perfect place to enjoy fine food and great cocktails with excellent service,
                        in
                        comfortable atmospheric surroundings. We have a soft dining room, combined with an open
                        kitchen,
                        coffee take out bar and alovely awesome on site coffee roastery.</p>
                </div>
                <div class=" aboutStory__pic">
                    <div class="aboutstory1">
                      <img src={story1} alt="" />
                      <div className="storyBorder1"></div>
                    </div>
                    <div class=" aboutstory2">
                      <img src={story2} alt="" />
                      <div className="storyBorder2"></div>
                    </div>

                </div>
            </div>
        </div>
    </article>
    <Quote/>
    <BlogSection/>
    </>
  )
}

export default OurStory
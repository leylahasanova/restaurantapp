import React from "react";
import quoteBck from "../images/quoteBck.jpg";

function Quote() {
  return (
    <>
      {/* <article class="storyQuote">
        <img src={quoteBck} alt="" />
        <div className="quotebck"></div>

        
          <div class="quote">
            <p>
              If you really want to make a friend, go to someone's house and eat
              with him... the people who give you their food give you their
              heart.
            </p>
            <span>- Cesar Chavez</span>
          </div>
        
      </article> */}
      <div className="pageTitle quoteTitle">
      <div class="row-divider-top"> <svg xmlns="http://www.w3.org/2000/svg" width="128.125" height="13.5" viewBox="0 0 128.125 13.5"> <path fill="#fff" data-name="Divder Down" d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z" transform="translate(-735.938 -518)"></path> </svg></div>
        <img src={quoteBck} alt="" />
        <div className="titleBck"></div>
        <div className="quote titleText">
        <p>
              If you really want to make a friend, go to someone's house and eat
              with him... the people who give you their food give you their
              heart.
            </p>
            <span>- Cesar Chavez</span>
                   
        </div>
        <div class="row-divider-bottom"> <svg xmlns="http://www.w3.org/2000/svg" width="128.125" height="13.5" viewBox="0 0 128.125 13.5"> <path fill="#fff" data-name="Divder Top" d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z" transform="translate(-735.938 -518)"></path> </svg></div>
      </div>
    </>
  );
}

export default Quote;

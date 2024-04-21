import React from "react";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <>
      <article className="news">
        <div className="container">
          <div className="latestNews">
            <div className="newsHeading">
              <h2>Stay Updated</h2>
              <h3>Latest News and Events</h3>
            </div>
            <div className="newsBox">
              <div className="newsContent">
                <ul>
                  <li>October 12, 2018 / </li>
                  <li>Flour Monday</li>
                </ul>
                <Link to="/" className="newsContent_heading">The Great Monday Breakfast!</Link>

                <div>
                  <img src={blog2} alt="" className="newsImg" />
                </div>
                <p>
                  Last weekend we enjoyed a wonderful little bike tour in the
                  countryside. the light was simply stunning and even, if it was
                  almost as cold as in winter, it was such a lovely autumn mood.
                  the colors, the
                </p>
                <button>READ MORE</button>
              </div>
              <div className="newsContent">
                <ul>
                  <li>October 12, 2018 / </li>
                  <li>Flour Monday</li>
                </ul>
                <Link to="/" className="newsContent_heading">The Great Monday Breakfast!</Link>
                <div>
                  <img src={blog3} alt="" className="newsImg" />
                </div>
                <p>
                  Last weekend we enjoyed a wonderful little bike tour in the
                  countryside. the light was simply stunning and even, if it was
                  almost as cold as in winter, it was such a lovely autumn mood.
                  the colors, the
                </p>
                <button>READ MORE</button>
              </div>
              <div className="newsContent">
                <ul>
                  <li>October 12, 2018 / </li>
                  <li>Flour Monday</li>
                </ul>
                <Link to="/" className="newsContent_heading">The Great Monday Breakfast!</Link>
                <div>
                  <img src={blog4} alt="" className="newsImg" />
                </div>
                <p>
                  Last weekend we enjoyed a wonderful little bike tour in the
                  countryside. the light was simply stunning and even, if it was
                  almost as cold as in winter, it was such a lovely autumn mood.
                  the colors, the
                </p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogSection;

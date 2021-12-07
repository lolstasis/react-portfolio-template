import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Grandmaster Coach
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a href="https://app.squarespacescheduling.com/schedule.php?owner=24768849"
              className="primary-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              BOOK ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
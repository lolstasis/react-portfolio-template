import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Stasis Coaching
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Reviews</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Rates</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

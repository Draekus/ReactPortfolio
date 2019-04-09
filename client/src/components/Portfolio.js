import React from "react";
import Munchies from "../assets/Munchies.png";
import Neighborly from "../assets/Neighborly.png";
import Divide from "../assets/Divide&Conquer.png";
import Scrapey from "../assets/Scrapey.png";

function Portfolio(props) {
  return (
    <div>
      <a
        href="https://neighbor-app.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          href="github.com"
          src={Neighborly}
          alt="Neighborly"
          className="site-img-row1 site-img-row1-left"
        />
      </a>
      <a
        href="https://bootcamp-phone-home.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Divide}
          alt="Divide and Conquer"
          className="site-img-row1 site-img-row1-middle"
        />
      </a>
      <a
        href="https://pgould94.github.io/Munchies/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Munchies}
          alt="Munchies"
          className="site-img-row1 site-img-row1 site-img-row1-right"
        />
      </a>
      <a
        href="https://scrapey-scrape.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Scrapey}
          alt="Scrapey"
          className="site-img-row2 site-img-row2-left"
        />
      </a>
    </div>
  );
}

export default Portfolio;

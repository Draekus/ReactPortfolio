import React from "react";
import Munchies from "../assets/Munchies.png";
import Neighborly from "../assets/Neighborly.png";
import Divide from "../assets/Divide&Conquer.png";

function Portfolio(props) {
  return (
    <div>
      <a href="https://scrapey-scrape.herokuapp.com/articles-saved">
        <img src={Munchies} alt="Munchies" className="site-img site-img-left" />
      </a>
      <a href="">
        <img
          src={Divide}
          alt="Divide and Conquer"
          className="site-img site-img-middle"
        />
      </a>
      <a href="https://neighbor-app.herokuapp.com/">
        <img
          href="github.com"
          src={Neighborly}
          alt="Neighborly"
          className="site-img site-img-right"
        />
      </a>
    </div>
  );
}

export default Portfolio;

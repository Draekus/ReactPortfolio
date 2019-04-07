import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Laptop from "@material-ui/icons/Laptop";
import github from "../assets/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import linkedin from "../assets/LinkedIn/Logo-White-34px-R.png";
import gmail from "../assets/google-product-logos/logo_gmail_32px.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Patrick Gould</h1>
          <h2 className="subtitle">
            Full Stack Web Developer <Laptop fontSize="default" />
          </h2>
          <div className="divider" />
          <div className="nav">
            <Link to="/" className="nav-item side-nav-item">
              Home
            </Link>
            <Link to="/portfolio" className="nav-item middle-nav-item">
              Portfolio
            </Link>
            <Link to="/contact" className="nav-item side-nav-item">
              Contact
            </Link>
          </div>
          <div className="content" />
          <div className="footer" />
          <div className="footer-item-left">
            <a href="https://www.github.com/pgould94" target="_blank">
              <img src={github} className="" />
            </a>
          </div>
          <div className="footer-item-center">
            <a
              href="https://www.linkedin.com/in/goulddevelopment/"
              target="_blank"
            >
              <img src={linkedin} className="" />
            </a>
          </div>
          <div className="footer-item-right">
            <a href="mailto:patrick.gould94@gmail.com">
              <img src={gmail} className="" />
            </a>
          </div>
          <div className="content">
            <p className="intro-line">
              Welcome to My Site! 
            </p>
            <p className="main-paragraph">I'm a code junky and I love it.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

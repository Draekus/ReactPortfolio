import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Splash from "../components/Splash";
import Portfolio from "../components/Portfolio";
import Laptop from "@material-ui/icons/Laptop";
import github from "../assets/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import linkedin from "../assets/LinkedIn/Logo-White-34px-R.png";
import email from "../assets/white-email-logo.png";

class Home extends Component {
  state = {
    display: "home",
  };

  renderContent = event => {
    let name = event.target.name;
    this.setState({
      display: name,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Patrick Gould</h1>
          <h2 className="subtitle">
            Full Stack Web Developer <Laptop fontSize="default" />
          </h2>
          {/* <div className="divider" /> */}
          <div className="nav">
            <Link
              onClick={this.renderContent}
              name="home"
              to="/"
              className="nav-item side-nav-item"
            >
              Home
            </Link>
            <Link
              onClick={this.renderContent}
              name="portfolio"
              to="/"
              className="nav-item middle-nav-item"
            >
              Portfolio
            </Link>
            <Link
              onClick={this.renderContent}
              name="contact"
              to="/"
              className="nav-item side-nav-item"
            >
              Contact
            </Link>
          </div>
          <div className="content">
            {this.state.display === "home" ? (
              <Splash />
            ) : this.state.display === "portfolio" ? (
              <Portfolio />
            ) : (
              <div />
            )}
          </div>
          <div className="footer" />
          <div className="footer-item-left">
            <a
              href="https://www.github.com/pgould94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="" alt="GitHub" />
            </a>
          </div>
          <div className="footer-item-center">
            <a
              href="https://www.linkedin.com/in/goulddevelopment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="" alt="LinkedIn" />
            </a>
          </div>
          <div className="footer-item-right">
            <a href="mailto:patrick.gould94@gmail.com">
              <img src={email} className="" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

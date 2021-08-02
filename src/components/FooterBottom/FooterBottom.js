import React from "react";
import { Link } from "react-router-dom";
import cards from "../../images/cards.svg";

function FooterBottom() {
  return (
    <div>
      <div
        className="footer-bottom"
        style={{ background: "black", padding: "20px 0" }}
      >
        <div className="container">
          <div className="row clearfix align-items-center">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="card-logo">
                <Link to="/">
                  <img width="200px" src={cards} alt="logo" className="logo" />
                </Link>
              </div>
            </div>
            <div className="column col-lg-4 col-md-12 col-sm-12">
              <ul className="footer-nav">
                <li>
                  <Link to="/home" style={{ fontSize: "12px", color: "white" }}>
                    Copyright 2021, Performance Predictions. All rights
                    reserved. 3423 Piedmont Rd NE, Atlanta, GA 30305, USA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;

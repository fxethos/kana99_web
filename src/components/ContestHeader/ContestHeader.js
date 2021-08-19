import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./ContestHeader.scss";
import m1 from "../../images/matchlist-icons/m1.png";

function ContestHeader() {
  return (
    <div>
      <div className="header">
        <div className="row clearfix align-items-center">
          <div className="col-lg-5 offset-lg-3  col-sm-6 offset-sm-2 col-xs-12">
            <div className="content">
              <div className="content-details">
                <span>
                  <b>RAN</b>
                </span>
                <span className="match-logo-bg-header">
                  <img src={m1} className="match-logo" alt="match-logo" />
                </span>
                <span>
                  <input type="text" placeholder="22h: 30m" />
                </span>
                <span className="match-logo-bg-header">
                  <img src={m1} className="match-logo" alt="match-logo" />
                </span>
                <span>
                  <b>DHA</b>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="row align-items-center">
              <div className="offset-xs-2 col-4 p-1 m-1">
                <Link to="/">
                  <Button buttonStyle="btn--primary">
                    <i className="fas fa-chevron-left"></i> Back
                  </Button>
                </Link>
              </div>
              <div className="col-4 p-1 m-1">
                <Link to="/sign-in">
                  <Button buttonStyle="btn--secondary"> Sign in</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestHeader;

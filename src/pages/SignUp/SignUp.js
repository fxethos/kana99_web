import React from "react";
// import { InfoSection } from '../../components';
// import { homeObjOne } from './Data';
// import "./SignUp.scss";
import { Button } from "../../components/Button/Button";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import FooterBottom from "../../components/FooterBottom/FooterBottom";

function SignUp() {
  return (
    <React.Fragment>
      <div className="full-screen-container">
        <div className="daily_content">
          <p>
            New members get a 100% deposit
            <br /> match up to $100.
          </p>
          <h1>DAILY FANTASY, SIMPLIFIED.</h1>
        </div>
        <div className="login-container login-box">
          <div className="row">
            <div className="col-md-12">
              <img width="200px" src={logo} alt="logo" className="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="login-title">Login</h5>
            </div>
          </div>
          <form>
            <div className="box">
              <input required type="text" />
              <span>Email</span>
            </div>
            <div className="box">
              <input required type="password" />
              <span>Password</span>
            </div>

            <div className="row">
              <div className="col-md-12 text-right mb-5">
                <Link to="">
                  <p>Forgot Password ? </p>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-12 mb-5">
                <Link to="/sign-in">
                  <Button big large fontBig secondary>
                    LOGIN / SIGNIN
                  </Button>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-lg-12 mt-5">
                <div className="line">
                  <h5>NEW TO KANA99</h5>
                </div>
                <Link to="/sign-up">
                  <Button fontBig buttonStyle="btn--outline">
                    SIGNUP
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterBottom />
    </React.Fragment>
  );
}

export default SignUp;

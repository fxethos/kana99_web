import React from "react";
import "./SignIn.scss";
import logo from "../../images/logo.svg";
import { Slide } from "react-awesome-reveal";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignIn = () => {
  return (
    <React.Fragment>
      <Slide direction="right">
        <div className="bg-img">
          <div className="full-screen-container">
            <div className="daily_content">
              <p>
                <b>
                  New members get a 100% deposit
                  <br /> match up to $100.
                </b>
              </p>
              <h1
                style={{ textShadow: "2px -1px 2px white" }}
                className="daily-title"
              >
                DAILY FANTASY, SIMPLIFIED.
              </h1>
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
              <AuthForm mode="signin" />
            </div>
          </div>
        </div>
      </Slide>
      <FooterBottom />
    </React.Fragment>
  );
}

export default SignIn;

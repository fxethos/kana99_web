import React from "react";
// import { InfoSection } from '../../components';
// import { homeObjOne } from './Data';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import "./SignUp.scss";
import { Button } from "../../components/Button/Button";
import FooterBottom from "../../components/FooterBottom/FooterBottom";

const SignUp = () => {
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
                  <h5 className="login-title">Sign Up</h5>
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
                  <div className="col-md-12 text-right mb-2">
                    <Link to="">
                      <p>Forgot Password ? </p>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-12 ">
                    <Link to="/">
                      <Button big large fontBig secondary>
                        SIGNUP
                      </Button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Slide>
      <FooterBottom />
    </React.Fragment>
  );
}

export default SignUp;

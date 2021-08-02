import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <React.Fragment>
      <footer className="main-footer">
        <div className="container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-12 col-md-6 col-sm-12">
                    <div className="footer-widget about-widget">
                      <div className="logo">
                        <Link to="/">
                          <img
                            width="200px"
                            src={logo}
                            alt="logo"
                            className="logo"
                          />
                        </Link>
                      </div>
                      <div className="footer-bottom">
                        <ul className="footer-nav">
                          <li>
                            <Link to="#">Refund Policy</Link>
                          </li>
                          <li>
                            <Link to="#">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="#">Responsible Gaming</Link>
                          </li>
                          <li>
                            <Link to="#">Terms</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p> support@kana99.com </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="big-column col-lg-6 col-md-12 col-sm-12 ">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12 offset-lg-3">
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <Link to="">
                        <i className="fa fa-facebook-f facebook-bg"></i>
                      </Link>
                      <Link to="">
                        <i className="fa fa-twitter twitter-bg"></i>
                      </Link>
                      <Link to="">
                        <i className="fa fa-youtube-play youtube-bg"></i>
                      </Link>
                      <Link to="">
                        <i className="fa fa-instagram instagram-bg"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

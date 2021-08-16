import React from "react";
import { Link } from "react-router-dom";
import "./MatchmenuFooter.scss";
import home from "../../images/matchlist-icons/home4.png";
import cup from "../../images/matchlist-icons/cup.png";
import wallet from "../../images/matchlist-icons/wallet.png";
import profile from "../../images/matchlist-icons/profile1.png";

const navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

function MatchmenuFooter() {
  return (
    <div>
      <div className="menu-header">
        <div className="tab-container">
          <nav className="bottom-nav">
            <div className="bottom-nav-item active">
              <div className="bottom-nav-link">
                <div className="tab-height">
                  <span>
                    <Link to="/sign-in">
                      <img src={home} alt="home-icon" /> Home
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom-nav-item">
              <div className="bottom-nav-link">
                <div className="tab-height">
                  <span>
                    <img src={cup} alt="cup-icon" /> Mycontest
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom-nav-item">
              <div className="bottom-nav-link">
                <div className="tab-height">
                  <span>
                    <img src={wallet} alt="wallet-icon" /> Wallet
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom-nav-item">
              <div className="bottom-nav-link">
                <div className="tab-height">
                  <span>
                    <img src={profile} alt="account-icon" /> My Account
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MatchmenuFooter;

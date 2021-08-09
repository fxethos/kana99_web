import React from "react";
import "./MatchListCricket.scss";
import m1 from "../../images/matchlist-icons/m1.png";

function MatchListCricket() {
  return (
    <div>
      <div className="table-cards left">
        <div className="table-card">
          <div>Jharjhand T20</div>
          <div className="content">
            <div className="content-details">
              <span>RAN</span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>
                <input type="text" placeholder="22h: 30m" />
              </span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>DHA</span>
            </div>
          </div>
          <div>170 Players</div>
        </div>
      </div>
    </div>
  );
}

export default MatchListCricket;

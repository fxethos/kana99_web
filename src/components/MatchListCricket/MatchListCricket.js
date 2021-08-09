import React from "react";
import "./MatchListCricket.scss";
import m1 from "../../images/matchlist-icons/m1.png";

const MatchListCricket = (props) => {
  return (
    <div>
      <div className="table-cards left">
        <div className="table-card">
          <div>{props.matchTitle}</div>
          <div className="content">
            <div className="content-details">
              <span>{props.team1}</span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>
                <input type="text" placeholder="22h: 30m" />
              </span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>{props.team2}</span>
            </div>
          </div>
          <div>{props.playersJoined} Players</div>
        </div>
      </div>
    </div>
  );
};

export default MatchListCricket;

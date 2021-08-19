import React from "react";
import "./MatchListCricket.scss";
import m1 from "../../images/matchlist-icons/m1.png";

const MatchListCricket = (props) => {

  var time = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(props.start_at);

  return (
    <div>
      <div className="table-cards left">
        <div className="table-card">
          <div>{props.tournament.name}</div>
          <div className="content">
            <div className="content-details">
              <span>{props.teams.a.key}</span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>
                <input type="text" placeholder={time} />
              </span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>{props.teams.b.key}</span>
            </div>
          </div>
          <div>170 Players</div>
        </div>
      </div>
    </div>
  );
};

export default MatchListCricket;

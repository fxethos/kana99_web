import React from "react";
import moment from "moment";
import "./MatchListCricket.scss";
import m1 from "../../images/matchlist-icons/m1.png";

const MatchListCricket = (props) => {
  return (
    <div>
      <div className="table-cards left">
        <div className="table-card">
          <div>{props.tournament.name}</div>
          <div className="content">
            <div className="content-details">
              <span>{props.teams.a.name}</span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>
                <input type="text" placeholder={moment.unix(parseInt(props.start_at)).format('DD/MM/YYYY')} />
              </span>
              <span className="match-logo-bg">
                <img src={m1} className="match-logo" alt="match-logo" />
              </span>
              <span>{props.teams.b.name}</span>
            </div>
          </div>
          <div>3 Players</div>
        </div>
      </div>
    </div>
  );
};

export default MatchListCricket;

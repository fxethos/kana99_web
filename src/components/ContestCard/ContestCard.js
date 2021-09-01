import React from "react";
import "./ContestCard.scss";
import { Button} from "../Button/Button";

import { Link } from "react-router-dom";
import cup from "../../images/small-icons/cup.svg";
import group from "../../images/small-icons/group.png";

function ContestCard(props) {
  console.log(props);
  return (
    <div className="wrapper">
      <div className="card3">
        <div className="body">
          <div className="d-flex">
            <span>
              <select className="selectpicker">
                <option>{props.contest && props.contest.contest_value} SOL</option>
              </select>
            </span>
            <span className="ml-auto">40%</span>
          </div>
          <div className="row align-items-center p-1">
            <div className="col-lg-10 col-sm-10 col-md-10 col-8">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ maxWidth: "0%" }}
                >
                  <span className="title">60%</span>
                </div>
              </div>
              <div className="joined">0/3 Joined</div>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2 col-4">
              <div className="ml-auto">
              <Link to={{pathname: "/scoreboard-page", query: {matchKey: props.contest.match_id}}}>
              <Button buttonStyle="btn--primary" >{props.contest && props.contest.entry_fee} SOL</Button>
          </Link>
                
              </div>
            </div>
          </div>

          <div className="meta">
            <div className="shared">
              <img src={group} alt="group" className="pr-1 pb-1" />
              <span>Upto 3 Players</span>
            </div>
            <div className="credits">
              <img src={cup} alt="group" className="pr-1" />
              <span>{props.contest && props.contest.contest_value} SOL Total Pot</span>
            </div>
            <div className="duration">
              <img src={cup} alt="group" className="pr-1" />
              <span>40% Winners</span>
            </div>
            <div className="ml-auto">
              <div className="dropdown">
                <button
                  className="btn c-btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  C<span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span>Edit</span>
                  </li>
                  <li>
                    <span>Delete</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestCard;

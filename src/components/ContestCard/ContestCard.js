import React from "react";
import "./ContestCard.scss";
import { Button } from "../Button/Button";
import cup from "../../images/small-icons/cup.svg";
import group from "../../images/small-icons/group.png";

function ContestCard() {
  return (
    <div className="wrapper">
      <div className="card3">
        {/* <div className="header"></div>
        <div className="icon">
          <i className="fa fa-book"></i>
        </div> */}
        <div className="body">
          <div className="d-flex">
            <span>
              <select className="selectpicker">
                <option>₹ 300</option>
                <option>₹ 400</option>
                <option>₹ 500</option>
              </select>
            </span>
            <span className="ml-auto">40%</span>
          </div>
          <div className="row align-items-center p-1">
            <div className="col-md-10 col-xs-10">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ maxWidth: "60%" }}
                >
                  <span className="title">60%</span>
                </div>
              </div>
              <div className="joined">0 ∞ Joined</div>
            </div>
            <div className="col-md-2 col-xs-2">
              <div className="ml-auto">
                <Button buttonStyle="btn--primary">₹300</Button>
              </div>
            </div>
          </div>

          {/* <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et orci gravida mi placerat consectetur sagittis non ligula. Proin
              sit amet augue a neque sagittis gravida ac ut metus.
            </p>
          </div> */}
          <div className="meta">
            <div className="shared">
              <img src={group} alt="group" className="pr-1 pb-1" />
              <span>Upto 15 Teams</span>
            </div>
            <div className="credits">
              <img src={cup} alt="group" className="pr-1" />
              <span>₹ 300 Top Prize</span>
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
          {/* <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Right-aligned menu
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div> */}
        </div>
        {/* <div className="status">
          <div className="enrollment">
            <i className="far fa-dot-circle"></i>
            <span>Enrolled</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ContestCard;

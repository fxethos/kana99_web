import React from "react";
import "./MatchListPage.scss";
import cricket from "../../images/tab-icons/cricket.svg";
// import { CricketmatchList } from "../CricketmatchList/CricketmatchList";
import MatchListCricket from "../MatchListCricket/MatchListCricket";

function MatchListPage() {
  return (
    <React.Fragment>
      <div className="match-list pt-3">
        <ul id="tabs" className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              id="tab-A"
              href="#pane-A"
              className="nav-link active"
              data-toggle="tab"
              role="tab"
            >
              <img src={cricket} className="" alt="cricket-icon" />
              <br></br>
              <span>Cricket</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="tab-B"
              href="#pane-B"
              className="nav-link"
              data-toggle="tab"
              role="tab"
            >
              <img src={cricket} className="" alt="football-icon" />
              <br></br>
              <span>Football</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="tab-C"
              href="#pane-C"
              className="nav-link"
              data-toggle="tab"
              role="tab"
            >
              <img src={cricket} className="" alt="basketball-icon" />
              <br></br>
              <span>Basketball</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="tab-D"
              href="#pane-D"
              className="nav-link"
              data-toggle="tab"
              role="tab"
            >
              <img src={cricket} className="" alt="baseball-icon" />
              <br></br>
              <span>Baseball</span>
            </a>
          </li>
        </ul>

        <div id="content" className="tab-content" role="tablist">
          <div
            id="pane-A"
            className="card tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="tab-A"
          >
            <div className="card-header" role="tab" id="heading-A">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  href="#collapse-A"
                  aria-expanded="true"
                  aria-controls="collapse-A"
                >
                  <img src={cricket} className="" alt="cricket-icon" />
                  <br></br>
                  <span>Cricket</span>
                </a>
              </h5>
            </div>

            <div
              id="collapse-A"
              className="collapse show"
              data-parent="#content"
              role="tabpanel"
              aria-labelledby="heading-A"
            >
              <div className="card-body">
                <MatchListCricket />
                <MatchListCricket />
                <MatchListCricket />
                <MatchListCricket />
              </div>
            </div>
          </div>

          <div
            id="pane-B"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-B"
          >
            <div className="card-header" role="tab" id="heading-B">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-B"
                  aria-expanded="false"
                  aria-controls="collapse-B"
                >
                  Collapsible Group Item B
                </a>
              </h5>
            </div>
            <div
              id="collapse-B"
              className="collapse"
              data-parent="#content"
              role="tabpanel"
              aria-labelledby="heading-B"
            >
              <div className="card-body">[Tab content B]</div>
            </div>
          </div>

          <div
            id="pane-C"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-C"
          >
            <div className="card-header" role="tab" id="heading-C">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-C"
                  aria-expanded="false"
                  aria-controls="collapse-C"
                >
                  Collapsible Group Item C
                </a>
              </h5>
            </div>
            <div
              id="collapse-C"
              className="collapse"
              role="tabpanel"
              data-parent="#content"
              aria-labelledby="heading-C"
            >
              <div className="card-body">[Tab content C]</div>
            </div>
          </div>

          <div
            id="pane-D"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-D"
          >
            <div className="card-header" role="tab" id="heading-D">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-D"
                  aria-expanded="false"
                  aria-controls="collapse-D"
                >
                  Collapsible Group Item D
                </a>
              </h5>
            </div>
            <div
              id="collapse-D"
              className="collapse"
              role="tabpanel"
              data-parent="#content"
              aria-labelledby="heading-D"
            >
              <div className="card-body">[Tab content D]</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchListPage;

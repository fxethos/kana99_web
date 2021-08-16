import React from "react";
import cricket from "../../images/tab-icons/cricket.svg";
import MatchList from "../MatchList/MatchList";
import MatchListNav from "../MatchListNav/MatchListNav";
import "./MatchListPage.scss";

function MatchListPage() {
  return (
    <React.Fragment>
      <div className="match-list pt-3 pb-5">
        <MatchListNav />

        <div id="content" className="tab-content" role="tablist">
          <div
            id="pane-cricket"
            className="card tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="tab-cricket"
          >
            <div className="card-header" role="tab" id="heading-cricket">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  href="#collapse-cricket"
                  aria-expanded="true"
                  aria-controls="collapse-cricket"
                >
                  <img src={cricket} className="" alt="cricket-icon" />
                  <br></br>
                  <span>Cricket</span>
                </a>
              </h5>
            </div>
            <MatchList />
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

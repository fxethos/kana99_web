import React from "react";
import "./ContestListPage.scss";
import ContestListNav from "../ContestListNav/ContestListNav";
import ContestListAll from "../ContestListAll/ContestListAll";
function ContestListPage(props) {
  return (
    <React.Fragment>
      <div className="contest-list">
        <ContestListNav />

        <div id="content1" className="tab-content" role="tablist">
          <div
            id="pane-all"
            className="card tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="tab-all"
          >
            <div className="card-header" role="tab" id="heading-all">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  href="#collapse-all"
                  aria-expanded="true"
                  aria-controls="collapse-all"
                >
                  <span>AllContest</span>
                </a>
              </h5>
            </div>
            <div
              id="collapse-all"
              className="collapse show"
              data-parent="#content1"
              role="tabpanel"
              aria-labelledby="heading-all"
            >
              <div className="card-body">
                <ContestListAll matchKey={props.matchKey} />
              </div>
            </div>
          </div>

          <div
            id="pane-mega"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-mega"
          >
            <div className="card-header" role="tab" id="heading-mega">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-mega"
                  aria-expanded="false"
                  aria-controls="collapse-mega"
                >
                  MegaContest
                </a>
              </h5>
            </div>
            <div
              id="collapse-mega"
              className="collapse"
              data-parent="#content1"
              role="tabpanel"
              aria-labelledby="heading-mega"
            >
              <div className="card-body">[Tab content mega]</div>
            </div>
          </div>

          <div
            id="pane-h2h"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-h2h"
          >
            <div className="card-header" role="tab" id="heading-h2h">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-h2h"
                  aria-expanded="false"
                  aria-controls="collapse-h2h"
                >
                  Head-2-Head
                </a>
              </h5>
            </div>
            <div
              id="collapse-h2h"
              className="collapse"
              role="tabpanel"
              data-parent="#content1"
              aria-labelledby="heading-h2h"
            >
              <div className="card-body">[Tab content h2h]</div>
            </div>
          </div>

          <div
            id="pane-don"
            className="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-don"
          >
            <div className="card-header" role="tab" id="heading-don">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  href="#collapse-don"
                  aria-expanded="false"
                  aria-controls="collapse-don"
                >
                  DoubleOrNothing
                </a>
              </h5>
            </div>
            <div
              id="collapse-don"
              className="collapse"
              role="tabpanel"
              data-parent="#content1"
              aria-labelledby="heading-don"
            >
              <div className="card-body">[Tab content don]</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContestListPage;

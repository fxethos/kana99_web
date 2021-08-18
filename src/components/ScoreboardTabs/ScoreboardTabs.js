import React from "react";
import "./ScoreboardTabs.scss";
import ScoreboardWK from "../ScoreboardWK/ScoreboardWK";

function ScoreboardTabs() {
  return (
    <div class="scoreboard_block">
      <div class="container">
        <ul id="tabs" class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              id="tab-A"
              href="#pane-A"
              class="nav-link active"
              data-toggle="tab"
              role="tab"
            >
              WK(0)
            </a>
          </li>
          <li class="nav-item">
            <a
              id="tab-B"
              href="#pane-B"
              class="nav-link"
              data-toggle="tab"
              role="tab"
            >
              BAT(0)
            </a>
          </li>
          <li class="nav-item">
            <a
              id="tab-C"
              href="#pane-C"
              class="nav-link"
              data-toggle="tab"
              role="tab"
            >
              AR(0)
            </a>
          </li>
          <li class="nav-item">
            <a
              id="tab-D"
              href="#pane-D"
              class="nav-link"
              data-toggle="tab"
              role="tab"
            >
              BOW(0)
            </a>
          </li>
        </ul>

        <div id="content" class="tab-content" role="tablist">
          <div
            id="pane-A"
            class="card tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="tab-A"
          >
            <div class="card-header" role="tab" id="heading-A">
              <h5 class="mb-0">
                <a
                  data-toggle="collapse"
                  href="#collapse-A"
                  aria-expanded="true"
                  aria-controls="collapse-A"
                >
                  Collapsible Group Item A
                </a>
              </h5>
            </div>
            <div
              id="collapse-A"
              class="collapse show"
              data-parent="#content"
              role="tabpanel"
              aria-labelledby="heading-A"
            >
              <div class="card-body">
                <div class="text_content">
                  <p>Pick 1-4 Wicket-Keeper</p>
                  <div class="ml-auto">
                    <span className="p-1">
                      <i className="fas fa-chevron-down"></i>
                    </span>
                    <div class="switch-button switch-button-xs">
                      <input type="checkbox" name="item1" id="item1" checked />
                      <span>
                        <label for="item1"></label>
                      </span>
                    </div>
                  </div>
                </div>
                <ScoreboardWK />
              </div>
            </div>
          </div>

          <div
            id="pane-B"
            class="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-B"
          >
            <div class="card-header" role="tab" id="heading-B">
              <h5 class="mb-0">
                <a
                  class="collapsed"
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
              class="collapse"
              data-parent="#content"
              role="tabpanel"
              aria-labelledby="heading-B"
            >
              <div class="card-body">[Tab content B]</div>
            </div>
          </div>

          <div
            id="pane-C"
            class="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-C"
          >
            <div class="card-header" role="tab" id="heading-C">
              <h5 class="mb-0">
                <a
                  class="collapsed"
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
              class="collapse"
              role="tabpanel"
              data-parent="#content"
              aria-labelledby="heading-C"
            >
              <div class="card-body">[Tab content C]</div>
            </div>
          </div>

          <div
            id="pane-D"
            class="card tab-pane fade"
            role="tabpanel"
            aria-labelledby="tab-D"
          >
            <div class="card-header" role="tab" id="heading-D">
              <h5 class="mb-0">
                <a
                  class="collapsed"
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
              class="collapse"
              role="tabpanel"
              data-parent="#content"
              aria-labelledby="heading-D"
            >
              <div class="card-body">[Tab content D]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreboardTabs;

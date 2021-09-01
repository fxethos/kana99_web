import React, { useEffect } from "react";
import "./ScoreboardTabs.scss";
import ScoreboardWK from "../ScoreboardWK/ScoreboardWK";

var selectedKeeper;
var selectedBowler;
var selectedAllRounder;
var selectedBatsman;
export default class ScoreboardTabs extends React.Component {
  constructor(props) {
    console.log("Prosp:", props);
    super(props);
    this.state = {
      batsmans: this.props.batsman,
      bowlers: this.props.bowler,
      wicketKeepers: this.props.wicketKeeper,
      allrounders: this.props.allrounder,
      teamA: this.props.teamA,
      teamB: this.props.teamB,
      selectedKeepers : JSON.parse(localStorage.getItem('selectedKeepers')) ? JSON.parse(localStorage.getItem('selectedKeepers')) : 0,
      selectedBowlers : JSON.parse(localStorage.getItem('selectedBowlers')) ? JSON.parse(localStorage.getItem('selectedBowlers')) : 0,
      selectedAllRounders: JSON.parse(localStorage.getItem('selectedAllRounders')) ? JSON.parse(localStorage.getItem('selectedAllRounders')) : 0,
      selectedBatsmans : JSON.parse(localStorage.getItem('selectedBatsmans')) ? JSON.parse(localStorage.getItem('selectedBatsmans')) : 0,

      updatedPlayers: this.props.updatedPlayers
    }

    console.log("Selected Keepers", this.state.selectedKeepers)
  }

  componentDidMount() {
    this.playersLength()
  }
  playersLength = () => {
    selectedKeeper = this.state.selectedKeepers
    selectedBowler = this.state.selectedBowlers
    selectedAllRounder = this.state.selectedAllRounders
    selectedBatsman = this.state.selectedBatsmans
  }
  selectedPlayers = (props) => {
    selectedKeeper = JSON.parse(localStorage.getItem('selectedKeepers')) ? JSON.parse(localStorage.getItem('selectedKeepers')) : 0
    selectedBowler = JSON.parse(localStorage.getItem('selectedBowlers')) ? JSON.parse(localStorage.getItem('selectedBowlers')) : 0
    selectedAllRounder = JSON.parse(localStorage.getItem('selectedAllRounders')) ? JSON.parse(localStorage.getItem('selectedAllRounders')) : 0
    selectedBatsman = JSON.parse(localStorage.getItem('selectedBatsmans')) ? JSON.parse(localStorage.getItem('selectedBatsmans')) : 0
   
    this.setState({selectedKeepers:selectedKeeper})
    this.setState({selectedBowlers:selectedBowler})
  this.setState({selectedAllRounders:selectedAllRounder})
     this.setState({selectedBatsmans:selectedBatsman})


    console.log("Scoreboard Tab", props)

    console.log("SelectedWicketKeeperLength", JSON.parse(localStorage.getItem('selectedKeepers'))?.length)
    this.setState({ selectedKeepers: JSON.parse(localStorage.getItem('selectedKeepers'))?.length })
    this.props.creditPlayers()

  }

  render() {
    return (
      <div class="scoreboard_tabs_block">
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
                WK({selectedKeeper?.length})

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
                BAT({selectedBatsman?.length})
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

                AR({selectedAllRounder?.length})
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

                BOW({selectedBowler?.length})
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
                    WK({selectedKeeper?.length})
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
                  {console.log("Selected Players:", this.state.teamA)}
                  <ScoreboardWK players={this.state.wicketKeepers} teamA={this.state.teamA} teamB={this.state.teamB} updatedPlayers={this.state.updatedPlayers} selectedPlayerss={this.selectedPlayers} />
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
                    BAT({selectedBatsman?.length})
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
                <div class="card-body">
                  <div class="text_content">
                    <p>Pick Batsman</p>
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
                  <ScoreboardWK players={this.state.batsmans} teamA={this.state.teamA} teamB={this.state.teamB} updatedPlayers={this.state.updatedPlayers} selectedPlayerss={this.selectedPlayers} />

                </div>
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
                    AR({selectedAllRounder?.length})
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
                <div class="card-body">
                  <div class="text_content">
                    <p>Pick Allrounder</p>
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
                  <ScoreboardWK players={this.state.allrounders} teamA={this.state.teamA} teamB={this.state.teamB} updatedPlayers={this.state.updatedPlayers} selectedPlayerss={this.selectedPlayers} />

                </div>
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
                    BOW({selectedBowler?.length})
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
                <div class="card-body">
                  <div class="text_content">
                    <p>Pick Bowlers</p>
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
                  <ScoreboardWK players={this.state.bowlers} teamA={this.state.teamA} teamB={this.state.teamB} updatedPlayers={this.state.updatedPlayers} selectedPlayerss={this.selectedPlayers} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

// export default ScoreboardTabs;

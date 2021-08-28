import React, { useEffect } from "react";
import "./ScoreboardTabs.scss";
import ScoreboardWK from "../ScoreboardWK/ScoreboardWK";

export default class ScoreboardTabs extends React.Component {
  constructor(props){
    console.log("Prosp:",props);
    super(props);
    this.state = {
      batsmans:this.props.batsman, 
      bowlers:this.props.bowler, 
      wicketKeepers:this.props.wicketKeeper, 
      allrounders:this.props.allrounder,
      selectedBatsman : this.props.selectedBatsman,
      selectedBowler : this.props.selectedBowler,
      selectedAllRounder : this.props.selectedAllRounder,
      selectedWicketKeeper : this.props.selectedWicketKeeper,
      selectedPlayers : this.props.selectedPlayers,
    }
    console.log("Props in Tabs:",props)
  }
 
  // console.log("Props:",props);
  // useEffect(()=>{
   
  //   setState(props)

  // },[])
  // console.log(props.wicketKeeper)
  render(){
    return (
      <div className="scoreboard_tabs_block">
        <div className="container">
          <ul id="tabs" className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                id="tab-A"
                href="#pane-A"
                className="nav-link active"
                data-toggle="tab"
                role="tab"
              >
              WK({this.state.selectedWicketKeeper})
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
               BAT({this.state.selectedBatsman})
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
                 AR({this.state.selectedAllRounder})
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
                BOW({this.state.selectedBowler})
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
                    WK({this.state.selectedWicketKeeper})
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
                  <div className="text_content">
                    <p>Pick 1-4 Wicket-Keeper</p>
                    <div className="ml-auto">
                      <span className="p-1">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <div className="switch-button switch-button-xs">
                        <input type="checkbox" name="item1" id="item1" defaultChecked />
                        <span>
                          <label htmlFor="item1"></label>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* {console.log("Selected Players:",this.state.wicketKeepers)} */}
                  <ScoreboardWK players={this.state.wicketKeepers}/>
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
                    BAT({this.state.selectedBatsman})
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
               <div className="card-body">
                  <div className="text_content">
                    <p>Pick Batsman</p>
                    <div className="ml-auto">
                      <span className="p-1">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <div className="switch-button switch-button-xs">
                        <input type="checkbox" name="item1" id="item1" defaultChecked />
                        <span>
                          <label htmlFor="item1"></label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ScoreboardWK players={this.state.batsmans}/>
                </div>
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
                    AR({this.state.selectedAllRounder})
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
                <div className="card-body">
                  <div className="text_content">
                    <p>Pick Allrounder</p>
                    <div className="ml-auto">
                      <span className="p-1">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <div className="switch-button switch-button-xs">
                        <input type="checkbox" name="item1" id="item1" defaultChecked />
                        <span>
                          <label htmlFor="item1"></label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ScoreboardWK players={this.state.allrounders}/>
                </div>
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
                    BOW({this.state.selectedBowler})
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
               <div className="card-body">
                  <div className="text_content">
                    <p>Pick Bowlers</p>
                    <div className="ml-auto">
                      <span className="p-1">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                      <div className="switch-button switch-button-xs">
                        <input type="checkbox" name="item1" id="item1" defaultChecked />
                        <span>
                          <label htmlFor="item1"></label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ScoreboardWK players={this.state.bowlers}/>
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

import React, { useEffect } from "react";
import "./ScoreboardTabs.scss";
import ScoreboardWK from "../ScoreboardWK/ScoreboardWK";

var selectedWicketKeepers;
var selectedBowlers;
var selectedAllRounders;
var selectedBatsmans;
export default class ScoreboardTabs extends React.Component {
  constructor(props) {
    console.log("Prosp:", props);
    super(props);
    this.state = {
      players: this.props.players,
      batsmans: this.props.batsman,
      bowlers: this.props.bowler,
      wicketKeepers: this.props.wicketKeeper,
      allrounders: this.props.allrounder,
      selectedBatsman: selectedBatsmans,
      selectedBowler: selectedBowlers,
      selectedAllRounder: selectedAllRounders,
      selectedWicketKeeper: selectedWicketKeepers,
    }
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    //this.changeValue = this.changeValue.bind(this);

  }


  componentDidMount() {
    //console.log("Players: ",this.props.players)
    this.onDidSelectedPlayers();
  }

  onDidSelectedPlayers = () => {

    selectedBatsmans = JSON.parse(localStorage.getItem('selectedBatsmans'))
    this.setState({ selectedBatsman: selectedBatsmans });
    selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers'))
    this.setState({ selectedBowler: selectedBowlers });
    selectedWicketKeepers = JSON.parse(localStorage.getItem('selectedWicketKeepers'))
    this.setState({ selectedWicketKeeper: selectedWicketKeepers });
    selectedAllRounders = JSON.parse(localStorage.getItem('selectedAllRounders'))
    this.setState({ selectedAllRounder: selectedAllRounders });



  }

  onSubmitMessage(message) {
    
   
    switch (message[0].seasonal_role) {
      case 'bowler':  console.log("Message:", message)

      // console.log(message.filter(item => item.playerSelected)) 
      // console.log("Selected Bowlers:",selectedBowlers)
      console.log(selectedBowlers)
      var filterMessage = message.filter(item => item.playerSelected)
      console.log("FilterMessage:",filterMessage)
      selectedBowlers = selectedBowlersfilterMessage;
      this.setState({selectedBowler:selectedBowlers})

        localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowlers));
        //console.log("SelectedBowlers", selectedBowlers)

        //this.setState({ selectedbowler: selectedBowlers.length })
        break;
      case 'keeper':
        selectedWicketKeepers = message.filter(item => item.playerSelected)
        console.log("SelectedWicketKeeper", selectedWicketKeepers)
        localStorage.setItem('selectedWicketKeepers', JSON.stringify(selectedWicketKeepers));
        this.setState({ selectedWicketKeeper: selectedWicketKeepers.length });
        break;
      case 'batsman':
        selectedBatsmans = message.filter(item => item.playerSelected)
        localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsmans));
        console.log("SelectedWicketKeeper", selectedBatsmans)
        this.setState({ selectedBatsman: selectedBatsmans.length });
        break;
      case 'all_rounder':
        selectedAllRounders = message.filter(item => item.playerSelected)
        console.log("SelectedWicketKeeper", selectedAllRounders)
        localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounders));
        this.setState({ selectedAllRounder: selectedAllRounders.length });
        break;
    }


    // var players = message.map((item)=>{
    //   if(item.playerSelected){
    //     console.log("Item: ",item)
    //     switch(item.seasonal_role){
    //       case 'batsman': this.setState({selectedBatsman: this.state.selectedBatsman+1})
    //       break;
    //       case 'bowler': this.setState({selectedBowler: this.state.selectedBowler+1})
    //       break;
    //       case 'keeper': this.setState({selectedWicketKeeper: this.state.selectedWicketKeeper+1})
    //       break;
    //       case 'all_rounder': this.setState({selectedWicketKeeper: + 1})
    //       break;
    //     }
    //   }


    // })

    // this.setState({ message: message });
  }

  // console.log("Props:",props);
  // useEffect(()=>{

  //   setState(props)

  // },[])
  // console.log(props.wicketKeeper)
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
                WK({selectedWicketKeepers?.length})
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
                BAT({selectedBatsmans?.length})
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
                AR({selectedAllRounders?.length})
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
                BOW({selectedBowlers?.length})
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
                    WK({selectedWicketKeepers?.length})
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
                  {/* {console.log("Selected Players:",this.state.wicketKeepers)} */}
                  <ScoreboardWK players={this.state.wicketKeepers} onSubmitMessage={this.onSubmitMessage} />
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
                    BAT({selectedBatsmans?.length})
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
                  <ScoreboardWK players={this.state.batsmans} onSubmitMessage={this.onSubmitMessage} />
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
                    AR({selectedAllRounders?.length})
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
                  <ScoreboardWK players={this.state.allrounders} onSubmitMessage={this.onSubmitMessage} />
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
                    BOW({selectedBowlers?.length})
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
                  <ScoreboardWK players={this.state.bowlers} onSubmitMessage={this.onSubmitMessage} />
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

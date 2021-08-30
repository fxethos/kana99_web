import React from "react";
import "./ScoreboardWK.scss";

var teamAPlayers = [];
var teamBPlayers = [];
var selectedPlayers = [];
var allSelectedPlayers = [];
var selectedCredits;
var credit = 0;


export default class ScoreboardWK extends React.Component {

  constructor(props) {
    console.log("Props:", props)
    super(props);
    this.state = {
      players: this.props.players,
      teamA: this.props.teamA,
      teamB: this.props.teamB,
      allSelectedPlayers: (JSON.parse(localStorage.getItem('allSelectedPlayers'))?.length)>0?JSON.parse(localStorage.getItem('allSelectedPlayers')):[]

    }


  }
  componentDidMount(){
    credit = 0;
    allSelectedPlayers = this.state.allSelectedPlayers;
    teamAPlayers = allSelectedPlayers.filter(element=>element.team_key==this.state.teamA);
    teamBPlayers = allSelectedPlayers.filter(element=>element.team_key==this.state.teamB);
    selectedCredits = allSelectedPlayers.map((index)=>{
     credit =+index.credit;
     return credit 
    })
    console.log("selectedCredits",selectedCredits)
   
    for(var i=0;i<selectedCredits.length;i++){
      credit += selectedCredits[i];
      // credit = credit + credit[i]
    }
    console.log("Credits",credit)
   // selectedCredits = allSelectedPlayers.filter(index=> credit = index.credit)
    //console.log("selected Credits",credit);
  }

  selectPlayers = (player) => {
  
      
    var tes = this.props.players;
    var selectedKeeperLength = (JSON.parse(localStorage.getItem('selectedKeepers'))?.length) > 0 ? (JSON.parse(localStorage.getItem('selectedKeepers')).length) : 0
    var selectedBowlerLength = (JSON.parse(localStorage.getItem('selectedBowlers'))?.length) > 0 ? (JSON.parse(localStorage.getItem('selectedBowlers')).length) : 0
    var selectedAllRounderLength = (JSON.parse(localStorage.getItem('selectedAllRounders'))?.length) > 0 ? (JSON.parse(localStorage.getItem('selectedAllRounders')).length) : 0
    var selectedBatsmanLength = (JSON.parse(localStorage.getItem('selectedBatsmans'))?.length) > 0 ? (JSON.parse(localStorage.getItem('selectedBatsmans')).length) : 0
   
    switch (player.seasonal_role) {
      
      case 'keeper': if (credit<100 && selectedKeeperLength < 3 && selectedBowlerLength<3 && selectedBatsmanLength<3 &&selectedAllRounderLength<1 && allSelectedPlayers.length<11) {
        if (player.playerSelected) {
          this.FiltersUnSelect(player);
        } else {
          this.FiltersSelect(player);
        }
      }
      else if (player.playerSelected) {
        console.log("Player")
        this.FiltersUnSelect(player);
      }
      else{
        alert('Please change the order of selection')
      }
        break;
      case 'bowler': if (credit<100 && selectedBowlerLength < 6 && selectedBatsmanLength < 3 && selectedAllRounderLength < 1 && selectedKeeperLength < 1 && allSelectedPlayers.length<11 ) {
        if (player.playerSelected) {
          this.FiltersUnSelect(player);
        } else {
          this.FiltersSelect(player);
        }
      }
      else if (player.playerSelected) {
        this.FiltersUnSelect(player);
      }
      else{
        alert('Please change the order of selection')
      }
        break;
      case 'all_rounder': if (credit<100 &&  selectedAllRounderLength < 4 && selectedBatsmanLength<3 && selectedBowlerLength<3 && selectedKeeperLength<1 && allSelectedPlayers.length<11) {
        if (player.playerSelected) {
          this.FiltersUnSelect(player);
        } else {
          this.FiltersSelect(player);
        }
      }
      else if (player.playerSelected) {
        this.FiltersUnSelect(player);
      }
      else{
        alert('Please change the order of selection')
      }
        break;
      case 'batsman': if (credit<100 && selectedBatsmanLength < 6 &&selectedBowlerLength <3 &&selectedAllRounderLength<1 &&selectedKeeperLength<1 && allSelectedPlayers.length<11) {
        if (player.playerSelected) {
          this.FiltersUnSelect(player);
        } else {
          this.FiltersSelect(player);
        }
      }
      else if (player.playerSelected) {
        this.FiltersUnSelect(player);
      }
      else{
        alert('Please change the order of selection')
      }
        break;
    }
 
 
  }

  FiltersSelect = (player) => {
   
    if (!player.playerSelected) {

      if (player.team_key == this.state.teamA){
        if((teamAPlayers.length < 7)){
          var allPlayers = this.state.players;
          selectedPlayers = allPlayers.map((index) => {
            if (index.key == player.key) {
              player.playerSelected = true;
              teamAPlayers.push(player);
             allSelectedPlayers.push(player);
              localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
            }
          })
  
          if (player.seasonal_role === 'keeper') {
            localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'all_rounder') {
            localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'batsman') {
            localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'bowler') {
            localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          }
          this.props.selectedPlayerss(allPlayers)
  
        } else{
          alert("Cannot select more than 7 players from one team")
        }
      } 
     
     
      if (player.team_key === this.state.teamB){
        if(teamBPlayers.length < 7) {
          var allPlayers = this.state.players;
          selectedPlayers = allPlayers.map((index) => {
            if (index.key == player.key) {
              player.playerSelected = true;
              teamBPlayers.push(player);
              allSelectedPlayers.push(player);
              localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
            }
          })
          if (player.seasonal_role === 'keeper') {
            localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'all_rounder') {
            localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'batsman') {
            localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          } else if (player.seasonal_role === 'bowler') {
            localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          }
          this.props.selectedPlayerss(allPlayers)
        }
        else{
          alert("Cannot select more than 7 players from one team")
        }
      
      } 
    }

  }

  FiltersUnSelect = (player) => {
    console.log("False")
    if (player.playerSelected) {
      if (player.team_key == this.state.teamA) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key === player.key) {
            player.playerSelected = false;
          }
        })
        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
        }
        teamAPlayers = allPlayers.filter(item => item.playerSelected == true)
        allSelectedPlayers = allSelectedPlayers.filter(item=>item.playerSelected == true)
        localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
        this.props.selectedPlayerss(allPlayers)
      }
      else if (player.team_key === this.state.teamB) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key)
            player.playerSelected = false;
        })
        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
        }
        teamBPlayers = allPlayers.filter(item => item.playerSelected == true)
        allSelectedPlayers = allSelectedPlayers.filter(item=>item.playerSelected == true)
        localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
        this.props.selectedPlayerss(allPlayers)
      }
    }
  }
  render() {
    console.log("AllSelectedPlayers",allSelectedPlayers);
    return (
      <div>
        <table class="rwd-table">
          <thead>
            <tr>
              <th>
                Players
                <span className="p-1">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </th>
              <th>
                Points
                <span className="p-1">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </th>
              <th>
                Credits
                <span className="p-1">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.players?.map((index) => {
                return (
                  <>
                    <tr>
                      <div onClick={() => { this.selectPlayers(index) }}>
                        <td data-th="Players">
                          <div class="info">
                            <div class="avatar">
                              <img src="//via.placeholder.com/200" alt="doc name" />
                            </div>
                            <div class="details">
                              <div class="name">{index.name}</div>
                              <div class="meta-info">
                                <span class="sp">{index.team_key}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-th="Points">
                          <span class="star_bg">
                            <span>
                              <i className="fas fa-star"></i>
                              <span className="star_value"> 0</span>
                            </span>
                          </span>
                        </td>
                        <td data-th="Credits">
                          <div className="credit_value"> {index.credit}</div>
                        </td>
                      </div>
                    </tr>

                  </>
                )
              })
            }

            {/* <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr> */}
          </tbody>
        </table>

        <div classs="row justify-content-center align-items-center">
          <div class="col-6 align-self-center m-auto">
            <button type="button" class="btn btn-primary custom_red_btn">
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

}

// export default ScoreboardWK;

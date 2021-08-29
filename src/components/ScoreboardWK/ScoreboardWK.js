import React from "react";
import "./ScoreboardWK.scss";

var teamAPlayers = [];
var teamBPlayers = [];
var selectedPlayers = [];


export default class ScoreboardWK extends React.Component {

  constructor(props) {
    console.log("Props:", props)
    super(props);
    this.state = {
      players: this.props.players,
      teamA: this.props.teamA,
      teamB: this.props.teamB

    }


  }

  selectPlayers = (player) => {
    console.log("Player",player)
    var tes = this.props.players;
    var selectedKeeperLength = JSON.parse(localStorage.getItem('selectedKeepers'))?.length
    var selectedBowlerLength = JSON.parse(localStorage.getItem('selectedBowlers'))?.length
    var selectedAllRounderLength = JSON.parse(localStorage.getItem('selectedAllRounders'))?.length
    var selectedBatsmanLength = JSON.parse(localStorage.getItem('selectedBowlers'))?.length
    switch (player.seasonal_role) {
      case 'keeper': if (selectedKeeperLength < 3) {
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
        break;
      case 'bowler': if (selectedBowlerLength <6) {
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
        break;
        case 'all_rounder': if (selectedAllRounderLength <4) {
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
          break;
          case 'batsman': if (selectedBatsmanLength <6) {
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
            break;
    }
  }

  FiltersSelect = (player) => {
    if (!player.playerSelected) {

      if (((player.team_key == this.state.teamA) && (teamAPlayers.length < 7))) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key) {
            player.playerSelected = true;
            teamAPlayers.push(player)
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
      else if ((player.team_key === this.state.teamB) && (teamBPlayers.length < 7)) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key) {
            player.playerSelected = true;
            teamBPlayers.push(player)
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
        this.props.selectedPlayerss(allPlayers)
      }
    }
  }
  render() {
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

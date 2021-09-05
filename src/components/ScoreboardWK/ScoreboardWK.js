import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ScoreboardWK.scss";
import { postStandings } from '../../Helpers/APIHelpers';
import send from "../../Helpers/WalletHelpers";

var teamAPlayers = [];
var teamBPlayers = [];
var selectedPlayers = [];
var allSelectedPlayers = [];
var selectedCredits;
var credit = 100;
var credits;
var x;
var selectedKeeper = [];
var selectedBowler = [];
var selectedAllRounder = [];
var selectedBatsman = [];
var selectedKeeperLength;
var selectedBowlerLength;
var selectedAllRounderLength;
var selectedBatsmanLength;
var teamAPlayerLength;
var teamBPlayerLength;


export default class ScoreboardWK extends React.Component {

  state = {
    players: this.props.players,
    teamA: this.props.teamA,
    teamB: this.props.teamB,
    allSelectedPlayers: (JSON.parse(localStorage.getItem('allSelectedPlayers'))?.length) > 0 ? JSON.parse(localStorage.getItem('allSelectedPlayers')) : [],
    selectedKeeper: (JSON.parse(localStorage.getItem('selectedKeepers'))) ? (JSON.parse(localStorage.getItem('selectedKeepers'))) : [],
    selectedBowler: (JSON.parse(localStorage.getItem('selectedBowlers'))) ? (JSON.parse(localStorage.getItem('selectedBowlers'))) : [],
    selectedAllRounder: (JSON.parse(localStorage.getItem('selectedAllRounders'))) ? (JSON.parse(localStorage.getItem('selectedAllRounders'))) : [],
    selectedBatsman: (JSON.parse(localStorage.getItem('selectedBatsmans'))) ? (JSON.parse(localStorage.getItem('selectedBatsmans'))) : [],
    contest_id: this.props.contest_id
  }

  componentDidMount() {
    console.log(this.props);
    credit = localStorage.getItem('credit');

    console.log("Creditttt", credit)
    // credit = (credit === null ? 100 : credit)
    // console.log("Credittttttttttt",credit)
    allSelectedPlayers = this.state.allSelectedPlayers;
    selectedKeeper = this.state.selectedKeeper;
    selectedBowler = this.state.selectedBowler;
    selectedAllRounder = this.state.selectedAllRounder;
    selectedBatsman = this.state.selectedBatsman;
    this.categoryUpdate();
  }

  categoryUpdate = () => {
    console.log('CAtegory Update')
    teamAPlayers = (JSON.parse(localStorage.getItem('teamAPlayers'))) ? (JSON.parse(localStorage.getItem('teamAPlayers'))) : [];
    teamBPlayers = (JSON.parse(localStorage.getItem('teamBPlayers'))) ? (JSON.parse(localStorage.getItem('teamBPlayers'))) : [];
    // this.creditsCalculate()
    teamAPlayerLength = teamAPlayers ? teamAPlayers.length : 0;
    teamBPlayerLength = teamBPlayers ? teamBPlayers.length : 0;
  }


  // creditsCalculate = (allSelectedPlayer) => {

    creditsCalculate = (allSelectedPlayer) => {
      selectedCredits = allSelectedPlayer.map((index) => {
        credit = +index.credit;
        return credit
      })

      credit = selectedCredits.reduce(function (acc, val) { return acc + val; }, 0)

      console.log("selectedCredits", credit)
      localStorage.setItem('credit', credit);


      //   console.log("Credits",credit)

      // credits = localStorage.getItem('credit');
      //  credit = credits - selectedCredit;
      //  localStorage.setItem('credit',credit);

    }
  // }

    creditsSubtract = (selectedCredit) => {
      credits = localStorage.getItem('credit');
      credit = credits + selectedCredit.credit;
      localStorage.setItem('credit', credit);
    }

    selectionQualifier = (player) => {
      console.log("selected players:", allSelectedPlayers);
      if (!(selectedBowler.length <6 && (selectedBowler.length === 5 && (player.seasonal_role === 'bowler'))) ) {
        if (!(selectedBatsman.length <6 && (selectedBatsman.length === 5 && (player.seasonal_role === 'batsman'))) ){
          if (!(selectedAllRounder.length <4 && (selectedAllRounder.length === 3 && (player.seasonal_role === 'all_rounder'))) ) {
            console.log("selectedKeeper.length < 4 && (player.seasonal_role !== 'keeper'", selectedKeeper.length < 4 && (player.seasonal_role !== 'keeper'))
            if (!(selectedKeeper.length <4 && (selectedKeeper.length === 3 && (player.seasonal_role === 'keeper'))) ) {
              console.log("Team A", this.state.teamA);
              console.log("Team B", this.state.teamB);
              console.log("(player.team_key === this.state.teamA && teamAPlayerLength < 7) || (player.team_key === this.state.teamB && teamBPlayerLength < 7)", player.team_key, this.state.teamA, teamAPlayerLength < 7, player.team_key, this.state.teamB, teamBPlayerLength < 7)
              if ((player.team_key === this.state.teamA && teamAPlayerLength < 7) || (player.team_key === this.state.teamB && teamBPlayerLength < 7)) {
                console.log(player.team_key === this.state.teamA && teamAPlayerLength < 7,
                    player.team_key === this.state.teamB && teamBPlayerLength < 7
                  );
                if (allSelectedPlayers.length < 11) {
                  console.log("Player.credit", player.credit)
                  if (player.credit + credit < 100) {
                    this.FiltersSelect(player)
                  } else {
                    toast.error('Canot select players more than 100 credit');
                  }
                } else {
                  toast.error('Cannot select more than 11 players')
                }
              } else {
                toast.error('canot select more than 6 players from each team')
              }
            } else {
              toast.error('canot select more than 3 Wicket Keeper')
            }
          } else {
            toast.error('canot select more than 3 All Rounder')
          }

        } else {
          toast.error('canot select more than 5 batsman')
        }
      } else {
        toast.error('canot select more than 5 bowlers')
      }

    }

    submissionQualifier = (player) => {
      console.log('selectedBowlerLength',selectedBowlerLength)
      if (selectedBowler?.length >= 3) {
        if (selectedBatsman?.length >= 3 ) {
          console.log("Selected Wicket keeeper length", selectedKeeper.length)
          if (selectedKeeper?.length >= 1  ) {
            if (selectedAllRounder?.length >= 1 ) {
              toast.success('Everything Fine')
              // this.FiltersSelect(player)
              send('59254ca8-a5c8-4029-ae2d-2e1056f7b9b4')
              postStandings(allSelectedPlayers, '59254ca8-a5c8-4029-ae2d-2e1056f7b9b4');
            } else {
              toast.error('Please select minimum of 1 All Rounder')
            }
          } else {
            toast.error('Please select minimum of 1 Wicket Keeper')
          }
        } else {
          toast.error('Please select minimum of 3 Batsmans')
        }
      } else {
        toast.error('Please select minimum of 3 Bowlers')
      }
    }


    selectPlayers = (player) => {
      console.log("Player", player)
      if (player.playerSelected) {
        console.log("Filters unselect")
        this.FiltersUnSelect(player)
      } else {
        console.log("Selection Qualifier")
        this.selectionQualifier(player)
      }

    }


    FiltersSelect = (player) => {
      console.log("Player");
      // if (!player.playerSelected) {

      if (player.team_key == this.state.teamA) {

        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key) {
            player.playerSelected = true;
            teamAPlayers.push(player);
            allSelectedPlayers.push(player);

            this.creditsCalculate(allSelectedPlayers);

            localStorage.setItem('teamAPlayers', JSON.stringify(teamAPlayers))
            localStorage.setItem('allSelectedPlayers', JSON.stringify(allSelectedPlayers))
          }
        })

        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          selectedKeeper.push(player);
          localStorage.setItem('selectedKeepers', JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          selectedAllRounder.push(player);
          localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          selectedBatsman.push(player);
          localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          selectedBowler.push(player);
          localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowler))
        }
        this.props.selectedPlayerss(allPlayers)
        this.categoryUpdate()

      }


      if (player.team_key === this.state.teamB) {

        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key) {
            player.playerSelected = true;
            teamBPlayers.push(player);
            allSelectedPlayers.push(player);
            this.creditsCalculate(allSelectedPlayers);
            localStorage.setItem('teamBPlayers', JSON.stringify(teamBPlayers))
            localStorage.setItem('allSelectedPlayers', JSON.stringify(allSelectedPlayers))
          }
        })
        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          selectedKeeper.push(player);
          localStorage.setItem('selectedKeepers', JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          selectedAllRounder.push(player);
          localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          selectedBatsman.push(player);
          localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          selectedBowler.push(player);
          localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowler))
        }
        this.props.selectedPlayerss(allPlayers)
        this.categoryUpdate()


      }
      // }

    }

    FiltersUnSelect = (player) => {
      console.log("False")
      // if (player.playerSelected) {
      if (player.team_key == this.state.teamA) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key === player.key) {
            player.playerSelected = false;
          }
        })
        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedKeepers'))
          selectedKeeper = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedKeepers', JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedAllRounders'))
          selectedAllRounder = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBatsmans'))
          selectedBatsman = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBowlers'))
          selectedBowler = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowler))
        }
        var tempPlayers = JSON.parse(localStorage.getItem('teamAPlayers'))
        teamAPlayers = tempPlayers.filter(item => (item.playerSelected === true) && (item.key !== player.key))
        var allPlayers = JSON.parse(localStorage.getItem('allSelectedPlayers'))
        allSelectedPlayers = allPlayers.filter(item => (item.playerSelected === true) && (item.key !== player.key))
        this.creditsCalculate(allSelectedPlayers)
        localStorage.setItem('teamAPlayers', JSON.stringify(teamAPlayers))
        localStorage.setItem('allSelectedPlayers', JSON.stringify(allSelectedPlayers))
        this.props.selectedPlayerss(allPlayers)
        this.categoryUpdate()
      }

      else if (player.team_key === this.state.teamB) {
        var allPlayers = this.state.players;
        selectedPlayers = allPlayers.map((index) => {
          if (index.key == player.key)
            player.playerSelected = false;
        })
        if (player.seasonal_role === 'keeper') {
          localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedKeepers'))
          selectedKeeper = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedKeepers', JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedAllRounders'))
          selectedAllRounder = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBatsmans'))
          selectedBatsman = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBowlers'))
          selectedBowler = temp.filter(item => (item.playerSelected === true) && (item.key !== player.key))
          localStorage.setItem('selectedBowlers', JSON.stringify(selectedBowler))
        }
        var tempPlayers = JSON.parse(localStorage.getItem('teamBPlayers'))
        teamBPlayers = tempPlayers.filter(item => (item.playerSelected === true) && (item.key !== player.key))

        var allPlayers = JSON.parse(localStorage.getItem('allSelectedPlayers'))
        allSelectedPlayers = allPlayers.filter(item => (item.playerSelected === true) && (item.key !== player.key))
        this.creditsCalculate(allSelectedPlayers)
        localStorage.setItem('teamBPlayers', JSON.stringify(teamBPlayers))
        localStorage.setItem('allSelectedPlayers', JSON.stringify(allSelectedPlayers))
        this.props.selectedPlayerss(allPlayers)
        this.categoryUpdate()
      }
      // }
    }
    render() {
      // console.log("AllSelectedPlayers", allSelectedPlayers);
      return (
        <div>
          <ToastContainer />
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
                            {
                              index.playerSelected ? <span class="star_bg_selected">
                                <span>
                                  <i className="fas fa-star"></i>
                                  <span className="star_value"> {index.performance[0]?.points ? index.performance[0]?.points : 0}</span>
                                  {/* <span className="star_value"> {index.performance[0]?.points}</span> */}
                                </span>
                              </span> :
                                <span class="star_bg">
                                  <span>
                                    <i className="fas fa-star"></i>
                                    <span className="star_value"> {index.performance[0]?.points ? index.performance[0]?.points : 0}</span>
                                    {/* <span className="star_value"> {index.performance[0]?.points}</span> */}
                                  </span>
                                </span>
                            }

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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <div className="info">
                <div className="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div className="details">
                  <div className="name">MS Wade</div>
                  <div className="meta-info">
                    <span className="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span className="star_bg">
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
              <button type="button" class="btn btn-primary custom_red_btn"
                onClick={this.submissionQualifier}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )
    }

  }

// export default ScoreboardWK;

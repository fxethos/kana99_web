import React from "react";
import "./ScoreboardWK.scss";

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

  constructor(props) {
    console.log("Props:", props)
    super(props);
    this.state = {
      players: this.props.players,
      teamA: this.props.teamA,
      teamB: this.props.teamB,
      allSelectedPlayers: (JSON.parse(localStorage.getItem('allSelectedPlayers'))?.length)>0?JSON.parse(localStorage.getItem('allSelectedPlayers')):[],
      selectedKeeper : (JSON.parse(localStorage.getItem('selectedKeepers'))) ? (JSON.parse(localStorage.getItem('selectedKeepers'))) : [],
      selectedBowler : (JSON.parse(localStorage.getItem('selectedBowlers'))) ? (JSON.parse(localStorage.getItem('selectedBowlers'))) : [],
      selectedAllRounder : (JSON.parse(localStorage.getItem('selectedAllRounders'))) ? (JSON.parse(localStorage.getItem('selectedAllRounders'))) : [],
      selectedBatsman : (JSON.parse(localStorage.getItem('selectedBatsmans'))) ? (JSON.parse(localStorage.getItem('selectedBatsmans'))) : []
    }


  }
  componentDidMount(){
    credit = localStorage.getItem('credit');
    console.log("Creditttt",credit)
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
    teamAPlayers = (JSON.parse(localStorage.getItem('teamAPlayers'))) ?   (JSON.parse(localStorage.getItem('teamAPlayers'))) : [] ;
    teamBPlayers = (JSON.parse(localStorage.getItem('teamBPlayers')))  ? (JSON.parse(localStorage.getItem('teamBPlayers'))) : [] ;
  // this.creditsCalculate()
   teamAPlayerLength = teamAPlayers ? teamAPlayers.length : 0;
   teamBPlayerLength = teamBPlayers ? teamBPlayers.length : 0;
  }


 creditsCalculate = (selectedCredit) =>{
  credits = localStorage.getItem('credit');
   credit = credits - selectedCredit;
   localStorage.setItem('credit',credit);
  
 }

 creditsSubtract = (selectedCredit) =>{
   credits = localStorage.getItem('credit');
   credit = credits + selectedCredit.credit;
   localStorage.setItem('credit',credit); 
 }

 selectionQualifier = (player) =>{
  if((selectedBowler.length<6)){
    if(selectedBatsman.length < 6){
      if(selectedAllRounder.length < 4){
        if(selectedKeeper.length < 4){
            if((player.team_key === this.state.teamA && teamAPlayerLength < 7) || (player.team_key === this.state.teamB && teamBPlayerLength < 7)){
             if(allSelectedPlayers.length < 11){
               console.log("Player.credit",player.credit)
               if(player.credit < credit ){
                 this.FiltersSelect(player)
               }else{
                 alert('Canot select players more than 100 credit')
               }

             }else{
               alert('Cannot select more than 11 players')
             }
            }else{
              alert('canot select more than 7 players from each team')
            }
        }else{
          alert('canot select more than 4 Wicket Keeper')
        }
      }else{
        alert('canot select more than 4 All Rounder')
      }

    }else{
      alert('canot select more than 6 batsman')
    }
  } else{
    alert('canot select more than 6 bowlers')
  }

  }

  submissionQualifier = (player) =>{
    if(selectedBowlerLength <= 3){
      if(selectedBatsmanLength <=3){
        console.log("Selected Wicket keeeper length",selectedKeeperLength)
        if(selectedKeeperLength <=1){
          if(selectedAllRounderLength <=1){
            alert('Everything Fine')
            // this.FiltersSelect(player)
          }else{
            alert('Please select minimum of 1 All Rounder')
          }
        }else{
          alert('Please select minimum of 1 Wicket Keeper')
        }
      }else{
        alert('Please select minimum of 3 Batsmans')
      }
    }else{
      alert('Please select minimum of 3 Bowlers')
    }
  }


selectPlayers = (player) =>{
  console.log("Player",player)
  if(player.playerSelected){
    console.log("Filters unselect")
    this.FiltersUnSelect(player)
  }else{
    console.log("Selection Qualifier")
    this.selectionQualifier(player)
  }

}


  FiltersSelect = (player) => {
   console.log("Player");
    // if (!player.playerSelected) {

      if (player.team_key == this.state.teamA){
      
          var allPlayers = this.state.players;
          selectedPlayers = allPlayers.map((index) => {
            if (index.key == player.key) {
              player.playerSelected = true;
              teamAPlayers.push(player);
             allSelectedPlayers.push(player);

             this.creditsCalculate(player.credit);
             
             localStorage.setItem('teamAPlayers',JSON.stringify(teamAPlayers))
             localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
            }
          })
  
          if (player.seasonal_role === 'keeper') {
            localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
            selectedKeeper.push(player);
            localStorage.setItem('selectedKeepers',JSON.stringify(selectedKeeper))
          } else if (player.seasonal_role === 'all_rounder') {
            localStorage.setItem('allrounders', JSON.stringify(allPlayers))
            selectedAllRounder.push(player);
            localStorage.setItem('selectedAllRounders',JSON.stringify(selectedAllRounder))
          } else if (player.seasonal_role === 'batsman') {
            localStorage.setItem('batsmans', JSON.stringify(allPlayers))
            selectedBatsman.push(player);
            localStorage.setItem('selectedBatsmans',JSON.stringify(selectedBatsman))
          } else if (player.seasonal_role === 'bowler') {
            localStorage.setItem('bowlers', JSON.stringify(allPlayers))
            selectedBowler.push(player);
            localStorage.setItem('selectedBowlers',JSON.stringify(selectedBowler))
          }
          this.props.selectedPlayerss(allPlayers)
          this.categoryUpdate()
  
      } 
     
     
      if (player.team_key === this.state.teamB){
     
          var allPlayers = this.state.players;
          selectedPlayers = allPlayers.map((index) => {
            if (index.key == player.key) {
              player.playerSelected = true;
              teamBPlayers.push(player);
             allSelectedPlayers.push(player);
             this.creditsCalculate(player.credit);
             localStorage.setItem('teamBPlayers',JSON.stringify(teamBPlayers))
             localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
            }
          })
          if (player.seasonal_role === 'keeper') {
            localStorage.setItem('wicketKeepers', JSON.stringify(allPlayers))
            selectedKeeper.push(player);
            localStorage.setItem('selectedKeepers',JSON.stringify(selectedKeeper))
          } else if (player.seasonal_role === 'all_rounder') {
            localStorage.setItem('allrounders', JSON.stringify(allPlayers))
            selectedAllRounder.push(player);
            localStorage.setItem('selectedAllRounders',JSON.stringify(selectedAllRounder))
          } else if (player.seasonal_role === 'batsman') {
            localStorage.setItem('batsmans', JSON.stringify(allPlayers))
            selectedBatsman.push(player);
            localStorage.setItem('selectedBatsmans',JSON.stringify(selectedBatsman))
          } else if (player.seasonal_role === 'bowler') {
            localStorage.setItem('bowlers', JSON.stringify(allPlayers))
            selectedBowler.push(player);
            localStorage.setItem('selectedBowlers',JSON.stringify(selectedBowler))
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
          selectedKeeper = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedKeepers',JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedAllRounders'))
          selectedAllRounder = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedAllRounders',JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBatsmans'))
          selectedBatsman = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedBatsmans',JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBowlers'))
          selectedBowler = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedBowlers',JSON.stringify(selectedBowler))
        }
       var tempPlayers = JSON.parse(localStorage.getItem('teamAPlayers'))
        teamAPlayers = tempPlayers.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
        var allPlayers = JSON.parse(localStorage.getItem('allSelectedPlayers'))
        allSelectedPlayers = allPlayers.filter(item=> (item.playerSelected  === true) && (item.key !== player.key))
        this.creditsSubtract(player)
        localStorage.setItem('teamAPlayers',JSON.stringify(teamAPlayers))
        localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
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
          selectedKeeper = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedKeepers',JSON.stringify(selectedKeeper))
        } else if (player.seasonal_role === 'all_rounder') {
          localStorage.setItem('allrounders', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedAllRounders'))
          selectedAllRounder = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedAllRounders',JSON.stringify(selectedAllRounder))
        } else if (player.seasonal_role === 'batsman') {
          localStorage.setItem('batsmans', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBatsmans'))
          selectedBatsman = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedBatsmans',JSON.stringify(selectedBatsman))
        } else if (player.seasonal_role === 'bowler') {
          localStorage.setItem('bowlers', JSON.stringify(allPlayers))
          var temp = JSON.parse(localStorage.getItem('selectedBowlers'))
          selectedBowler = temp.filter(item => (item.playerSelected  === true) && (item.key !== player.key))
          localStorage.setItem('selectedBowlers',JSON.stringify(selectedBowler))
        }
      var tempPlayers = JSON.parse(localStorage.getItem('teamBPlayers'))
        teamBPlayers = tempPlayers.filter(item => (item.playerSelected  === true) && (item.key !== player.key))

        var allPlayers = JSON.parse(localStorage.getItem('allSelectedPlayers'))
        allSelectedPlayers = allPlayers.filter(item=> (item.playerSelected  === true) && (item.key !== player.key))
        this.creditsSubtract(player)
        localStorage.setItem('teamBPlayers',JSON.stringify(teamBPlayers))
        localStorage.setItem('allSelectedPlayers',JSON.stringify(allSelectedPlayers))
        this.props.selectedPlayerss(allPlayers)
        this.categoryUpdate()
      }
    // }
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
                              <span className="star_value"> {index.performance[0]?.points}</span>
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
            onClick = {this.submissionQualifier}>
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

}

// export default ScoreboardWK;

import React from "react";
import "./ScoreboardWK.scss";


var selectedBowlers=[];
var selectedBatsmans=[];
var selectedWicketKeepers=[];
var selectedAllRounders=[];
var selectedBowlersLength = 0;


export default class ScoreboardWK extends React.Component{

  constructor(props){
    console.log("Props:",props)
    super(props);
    this.state = {
      players : this.props.players,
      // selectedBowler:null,
      // selectedBatsman:null,
      // selectedAllRounder:null,
      // selectedWicketKeeper:null,
      teamA:null,
      teamB:null,
    }
    this.selectPlayers = this.selectPlayers.bind(this);
    console.log("Players in wk:",props)
  }

  setItem(){
    selectedBatsmans = JSON.parse(localStorage.getItem('selectedBatsmans'))
    //this.setState({ selectedBatsman: selectedBatsmans });
    selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers'))
    //this.setState({ selectedBowler: selectedBowlers });
    selectedWicketKeepers = JSON.parse(localStorage.getItem('selectedWicketKeepers'))
    //this.setState({ selectedWicketKeeper: selectedWicketKeepers });
    selectedAllRounders = JSON.parse(localStorage.getItem('selectedAllRounders'))
    //this.setState({ selectedAllRounder: selectedAllRounders });
  }
  componentDidMount(){
    
    this.setItem()
  }
  // ccompon(){
  //   this.setItem()
  // }
   selectPlayers = (player) => {
     console.log("Player: ",player)
    

    const filter = this.state.players.map(item => {
      if(item.key === player.key){
          switch(player.seasonal_role){
            case 'bowler': 
            if(!player.playerSelected){
            if(selectedBowlersLength < 6){
              player.playerSelected = true;
              selectedBowlersLength = selectedBowlersLength + 1 ;
              
              console.log("selectedBowlersLength",selectedBowlersLength)
              // selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers'));
              // this.setState({selectedBowler:selectedBowlers});
            }
            else{
            
            }
          }
             else{
            player.playerSelected = false;
            selectedBowlersLength = selectedBowlersLength - 1 ;
            selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers'));
           // this.setState({selectedBowler:selectedBowlers});
          }
   
            
            // (this.state.selectedBowlers?.filter(item=> player.team_key === item.team_key).length<7) 
            
            break;
          // case 'keeper':
          //   selectedWicketKeepers = message.filter(item => item.playerSelected)
          //   console.log("SelectedWicketKeeper", selectedWicketKeepers)
          //   localStorage.setItem('selectedWicketKeepers', JSON.stringify(selectedWicketKeepers));
          //   this.setState({ selectedWicketKeeper: selectedWicketKeepers.length });
          //   break;
          // case 'batsman':
          //   selectedBatsmans = message.filter(item => item.playerSelected)
          //   localStorage.setItem('selectedBatsmans', JSON.stringify(selectedBatsmans));
          //   console.log("SelectedWicketKeeper", selectedBatsmans)
          //   this.setState({ selectedBatsman: selectedBatsmans.length });
          //   break;
          // case 'all_rounder':
          //   selectedAllRounders = message.filter(item => item.playerSelected)
          //   console.log("SelectedWicketKeeper", selectedAllRounders)
          //   localStorage.setItem('selectedAllRounders', JSON.stringify(selectedAllRounders));
          //   this.setState({ selectedAllRounder: selectedAllRounders.length });
          //   break;
          }

          
        }
      // } 
      // else{
      //       player.playerSelected = false;
      //       selectedBowlers = JSON.parse(localStorage.getItem('selectedBowlers'));
      //       this.setState({selectedBowler:selectedBowlers});
      //     }
   

    })

    this.props.onSubmitMessage(this.state.players);
   
  }

  render(){
    return(
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
          this.state.players?.map((index)=>{
            return(
              <>
               <tr>
                 <div onClick={()=>{console.log("Selected")}}>
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

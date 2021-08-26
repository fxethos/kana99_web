import React from "react";
import "./ScoreboardWK.scss";


var bowlers=[];
var batsmans=[];
var wicketKeepers=[];
var allrounders=[];
var allPlayers=[];

export default class ScoreboardWK extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      players : this.props.players
      // batsmans:this.props.batsmans, 
      // bowlers:this.props.bowlers, 
      // wicketKeepers:this.props.wicketKeepers, 
      // allrounders:this.props.allrounders,
      // selectedBatsman : this.props.selectedBatsman,
      // selectedBowler : this.props.selectedBowler,
      // selectedAllRounder : this.props.selectedAllRounder,
      // selectedWicketKeeper : this.props.selectedWicketKeeper,
      // selectedPlayers : this.props.selectedPlayers,
    }
  }

   selectPlayers = (name) => {

    // name.map(element => {
     name.playerSelected = name.playerSelected === false ? true : false;
      if(name.playerSelected){
        allPlayers.push(name)
        switch(name.seasonal_role){
          case "batsman":batsmans.push(name)
          //this.setState({batsmans:batsman});
          
                          break;
          case "bowler":bowlers.push(name)
          // this.setState({bowlers:bowler})
                          break;
          case "keeper":wicketKeepers.push(name)
          // this.setState({wicketKeepers:wicketKeeper})
                          break;
          case "all_rounder":allrounders.push(name)
          // this.setState({allrounders:allrounder})
                          break;      
          default:console.log("Error")
                  break;
                      
        }
      } 
      const noOfPlayers = allPlayers.filter(topic => topic.key != name.key)

   
      
    // });
console.log("All Players: ",this.state.players)
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

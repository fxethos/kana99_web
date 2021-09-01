import React, { useEffect } from "react";

import "./ScoreBoardPage.scss";
import { ScoreboardTabs } from "../../components";
// import Navbar from "../../components/Navbar/Navbar";
// import MatchmenuFooter from "../../components/MatchmenuFooter/MatchmenuFooter";
import kanalogo from "../../images/logo_grey.svg";
import wallet from "../../images/scoreboard_icons/wallet.png";
import VS from "../../images/scoreboard_icons/VS.png";
import clogo1 from "../../images/scoreboard_icons/c1.png";
import clogo2 from "../../images/scoreboard_icons/c2.png";
import { fetchlisting } from "../../Helpers/APIHelpers";


var bowlers;
var response = false;
var bowlers;
var batsmans;
var allrounders;
var wicketKeepers;
var players;
var match_key;
var teamA;
var teamB;
var creditsLeft;
var allSelectedPlayers = [];
class ScoreBoardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bowlers: [],
      batsmans: [],
      allrounders: [],
      wicketKeepers: [],
      players: [],
      matchKey:props.location.query?.matchKey ,
      creditsLeft:100,
      allSelectedPlayers:null
    }
  }

  componentDidMount() {
    console.log("This.state.matchKey",this.state.matchKey);
    match_key = this.state.matchKey ? localStorage.setItem('match_Key',JSON.stringify(this.state.matchKey)) : JSON.parse(localStorage.getItem('match_Key')) ? JSON.parse(localStorage.getItem('match_Key')) : '';
    console.log('Match Key check',match_key);
   
    (this.state.matchKey) ? 
   fetchlisting(this.state.matchKey).then(res => {
      if (res) {
        response = true
        bowlers = res.bowlers;
        batsmans = res.batsmans;
        allrounders = res.allRounders;
        wicketKeepers = res.wicketKeepers;
        teamA = res.teamA;
        teamB = res.teamB;
        localStorage.setItem('bowlers', JSON.stringify(res.bowlers));
        localStorage.setItem('batsmans', JSON.stringify(res.batsmans));
        localStorage.setItem('allrounders', JSON.stringify(res.allRounders));
        localStorage.setItem('wicketKeepers', JSON.stringify(res.wicketKeepers));
        localStorage.setItem('teamA', res.teamA);
        localStorage.setItem('teamB', res.teamB);
        localStorage.setItem('selectedKeepers', null)
        localStorage.setItem('selectedBowlers', null)
        localStorage.setItem('selectedAllRounders', null)
        localStorage.setItem('selectedBatsmans', null)
        localStorage.setItem('teamAPlayers',null);
        localStorage.setItem('teamBPlayers',null);
        localStorage.setItem('credit',100);
        // localStorage.setItem('credit',null);
        localStorage.setItem('allSelectedPlayers',null);
        
        //localStorage.setItem('players',JSON.stringify(res.players))
        this.setState({ bowlers: res.Bowlers, batsmans: res.Batsmans, wicketKeepers: res.wicket_Keepers, allrounders: res.all_Rounders, players: res.players, teamA: res.teamA, teamB: res.teamB, selectedKeepers: null }, () => this.forceUpdate())
      }
    }):this.creditPlayers()
  }

  creditPlayers = () => {
    console.log("State")
    response = true
    // bowlers = res.bowlers;
    // batsmans = res.batsmans;
    // allrounders = res.allRounders;
    // wicketKeepers = res.wicketKeepers;
    bowlers = JSON.parse(localStorage.getItem('bowlers'))
    batsmans = JSON.parse(localStorage.getItem('batsmans'))
    allrounders =JSON.parse(localStorage.getItem('allrounders'))
    wicketKeepers = JSON.parse(localStorage.getItem('wicketKeepers'))
    creditsLeft = localStorage.getItem('credit')
    allSelectedPlayers = (JSON.parse(localStorage.getItem('allSelectedPlayers'))?.length)>0?JSON.parse(localStorage.getItem('allSelectedPlayers')):[]
     console.log("all selected plauers",allSelectedPlayers)
    
    this.setState({ bowlers, batsmans, wicketKeepers, allrounders, players, teamA: localStorage.getItem('teamA'), teamB:localStorage.getItem('teamB') }, () => this.forceUpdate())
 
  }

  // creditPlayers = () => {
  // }

  render() {

    console.log("Render Values", teamB)
    return (

      <React.Fragment>
        {/* { console.log("Batsman",batsman)} */}
        <div className="scoreboard-block">
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-6 col-md-7">
              <div className="board_bg">
                <div className="row p-3">
                  <div className="col-lg-8 col-sm-8 col-8">
                    <div className="text_back">
                      <div className="back_btn">
                        <span className="p-1">
                          <i className="fas fa-chevron-left"></i>
                        </span>
                      </div>
                      {response && 
                      <div className="comp_time">
                        <p>{this.state.teamA} vs {this.state.teamB}</p>
                        <p>00h : 13m :13s</p>
                      </div>}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-4 ml-auto text-right">
                    <img src={wallet} alt="wallet logo" />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 d-flex">
                    <div className="player_logo">
                      <div className="logo_circle">
                        <img src={clogo1} alt="clogo1" />
                      </div>
                    </div>
                    <div className="rectangle">
                      <span className="score_box_one">
                        <span className="number_box">1</span> {this.state.teamA}
                      </span>
                      <div className="circle">
                        <span>
                          <img src={VS} alt="VS" />
                        </span>
                      </div>
                      <span className="score_box_two">
                        {this.state.teamB} <span className="number_box">1</span>
                      </span>
                      <div className="credit_score">Credits Left {creditsLeft}</div>
                    </div>
                    <div className="player_logo">
                      <div
                        style={{ backgroundColor: "pink" }}
                        className="logo_circle"
                      >
                        <img src={clogo2} alt="clogo2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="select_player mt-3">
                      <h6 className="pt-2">
                        You can select only 7 from each team
                      </h6>
                      <div className="d-flex justify-content-center align-items-center">
                       {allSelectedPlayers[0]?.key ? <span className="select_red_box">1</span> :<span className="select_box">1</span> } 
                       {allSelectedPlayers[1]?.key ? <span className="select_red_box">2</span> :<span className="select_box">2</span> } 
                       {allSelectedPlayers[2]?.key ? <span className="select_red_box">3</span> :<span className="select_box">3</span> } 
                       {allSelectedPlayers[3]?.key ? <span className="select_red_box">4</span> :<span className="select_box">4</span> } 
                       {allSelectedPlayers[4]?.key ? <span className="select_red_box">5</span> :<span className="select_box">5</span> } 
                       {allSelectedPlayers[5]?.key ? <span className="select_red_box">6</span> :<span className="select_box">6</span> } 
                       {allSelectedPlayers[6]?.key ? <span className="select_red_box">7</span> :<span className="select_box">7</span> } 
                       {allSelectedPlayers[7]?.key ? <span className="select_red_box">8</span> :<span className="select_box">8</span> } 
                       {allSelectedPlayers[8]?.key ? <span className="select_red_box">9</span> :<span className="select_box">9</span> } 
                       {allSelectedPlayers[9]?.key ? <span className="select_red_box">10</span> :<span className="select_box">10</span> } 
                       {allSelectedPlayers[10]?.key ? <span className="select_red_box">11</span> :<span className="select_box">11</span> } 
                      
                        <span className="select_red_box">{allSelectedPlayers?.length}/11</span>
                      </div>
                      {
                        response &&
                        <ScoreboardTabs batsman={batsmans}
                          bowler={bowlers}
                          wicketKeeper={wicketKeepers}
                          allrounder={allrounders}
                          players={this.state.players}
                          teamA={this.state.teamA}
                          teamB={this.state.teamB}
                          selectedKeepers={this.state.selectedKeepers}
                          selectedBowlers={this.state.selectedBowlers}
                          selectedAllRounders={this.state.selectedAllRounders}
                          selectedBatsmans={this.state.selectedBatsmans}
                          creditPlayers={this.creditPlayers}
                          updatedPlayers={this.state.updatedPlayers}

                        />
                      }

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-6 align-self-center justify-content-center text-center">
              <div className="kana_logo_align">
                <img src={kanalogo} alt="kana logo" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const ScoreBoardPage = () => {
//   host.pathname = endpoints.fantacyMatchCredits;
//   const[bowlers,setBowler] = React.useState([]);
//   const[batsmans,setBatsman] = React.useState([]);
//   const[wicketKeepers,setwicketKeeper] = React.useState([]);
//   const[allrounders,setallrounder] = React.useState([]);

//   useEffect(async()=>{
//     const body = {
//       "match_key": "tnplt20_2021_g24"
//   }
//   try {
//        fantacyCreditResponse = await axios.post(host.href,body);
//        console.log(fantacyCreditResponse);
//        players = fantacyCreditResponse.data.data[0].players;
//        credits =  fantacyCreditResponse.data.data[0].credits


//        credits.map(function(x){ 
//         var result=players.filter(a1=> a1.key==x.player_key);
//         if(result) {  result[0].credit= x.value }
//         return x })



//        players.map(element => {

//         switch(element.seasonal_role){
//           case "batsman":batsman.push(element)
//           setBatsman(batsman);

//                           break;
//           case "bowler":bowler.push(element)
//           setBowler(bowler)
//                           break;
//           case "keeper":wicketKeeper.push(element)
//           setwicketKeeper(wicketKeeper)
//                           break;
//           case "all_rounder":allrounder.push(element)
//           setallrounder(allrounder)
//                           break;      
//           default:console.log("Error")
//                   break;

//         }

//       });
//        console.log("Batsman",batsman);

//   } catch (err) {
//       console.log(err);
//   }



//   },[])
//   return (
//     <React.Fragment>
//       { console.log("Batsman",batsman)}
//       <div className="scoreboard-block">
//         <div className="row align-items-center">
//           <div className="col-lg-5 col-sm-6 col-md-7">
//             <div className="board_bg">
//               <div className="row p-3">
//                 <div className="col-lg-8 col-sm-8 col-8">
//                   <div className="text_back">
//                     <div className="back_btn">
//                       <span className="p-1">
//                         <i className="fas fa-chevron-left"></i>
//                       </span>
//                     </div>
//                     <div className="comp_time">
//                       <p>BOK vs DUM</p>
//                       <p>00h : 13m :13s</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-sm-4 col-4 ml-auto text-right">
//                   <img src={wallet} alt="wallet logo" />
//                 </div>
//               </div>
//               <div className="row align-items-center">
//                 <div className="col-lg-12 d-flex">
//                   <div className="player_logo">
//                     <div className="logo_circle">
//                       <img src={clogo1} alt="clogo1" />
//                     </div>
//                   </div>
//                   <div className="rectangle">
//                     <span className="score_box_one">
//                       <span className="number_box">1</span> BOK
//                     </span>
//                     <div className="circle">
//                       <span>
//                         <img src={VS} alt="VS" />
//                       </span>
//                     </div>
//                     <span className="score_box_two">
//                       DUM <span className="number_box">1</span>
//                     </span>
//                     <div className="credit_score">Credits Left 100</div>
//                   </div>
//                   <div className="player_logo">
//                     <div
//                       style={{ backgroundColor: "pink" }}
//                       className="logo_circle"
//                     >
//                       <img src={clogo2} alt="clogo2" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="select_player mt-3">
//                     <h6 className="pt-2">
//                       You can select only 7 from each team
//                     </h6>
//                     <div className="d-flex justify-content-center align-items-center">
//                       <span className="select_box">1</span>
//                       <span className="select_box">2</span>
//                       <span className="select_box">3</span>
//                       <span className="select_box">4</span>
//                       <span className="select_box">5</span>
//                       <span className="select_box">6</span>
//                       <span className="select_box">7</span>
//                       <span className="select_box">8</span>
//                       <span className="select_box">9</span>
//                       <span className="select_box">10</span>
//                       <span className="select_box">11</span>
//                       <span className="select_red_box">0/11</span>
//                     </div>
//                     {/* {console.log("Batsmans:",batsmans)} */}
//                     <ScoreboardTabs batsman={batsmans} bowler={bowlers} allrounder={allrounders} wicketKeeper={wicketKeepers}/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-7 col-sm-6 align-self-center justify-content-center text-center">
//             <div className="kana_logo_align">
//               <img src={kanalogo} alt="kana logo" />
//             </div>
//           </div>  
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

export default ScoreBoardPage;

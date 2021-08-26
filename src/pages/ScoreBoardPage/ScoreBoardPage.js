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
import fetchlist from "../../Helpers/APIHelpers";

const axios = require('axios');

var response;

const host = new URL('http://35.154.51.112:3000');
const endpoints = {
    staticData:'/api/getstaticdata',
    fantacyMatchCredits:'/api/fantasy_match_credits/db',
    signup: '/api/user/signup', // POST - uuid, username, email, wallet_address (optional)
    getUser: '/api/user/info', // POST - uuid
    getContests: '/api/getcontest', // GET - match_id
    postContests: '/api/postcontest' // POST - contest_id, match_id, contest_name, contest_value, max_contest_size, entry_fee
}
var fantacyCreditResponse;
var seasonalRole;
var players;
var credits;
var batsman = [];
var bowler = [];
var allrounder = [];
var wicketKeeper = [];

class ScoreBoardPage extends React.Component {

  constructor(props){  
    super(props);  

    this.state = {
      batsmans: [],
      bowlers: [],
      allrounders : [],
      wicketKeepers : [],
      selectedBatsman:0,
      selectedBowler:0,
      selectedAllRounder:0,
      selectedWicketKeeper:0,
      selectedPlayers:0

    }
}  

  componentDidMount(){
    this.fetchAPI();
   
  }
fetchAPI = async()=>{
  const host = new URL('http://35.154.51.112:3000');
  host.pathname = endpoints.fantacyMatchCredits;
  const body = {
    "match_key": "tnplt20_2021_g24"
}
try {
     fantacyCreditResponse = await axios.post(host.href,body);
     console.log(fantacyCreditResponse);
     players = fantacyCreditResponse.data.data[0].players;
     credits =  fantacyCreditResponse.data.data[0].credits


     credits.map(function(x){ 
      var result=players.filter(a1=> a1.key==x.player_key);
      if(result) {  result[0].credit= x.value; result[0].playerSelected=false }
      return x })

    

     players.map(element => {
      
      switch(element.seasonal_role){
        case "batsman":batsman.push(element)
        this.setState({batsmans:batsman});
        
                        break;
        case "bowler":bowler.push(element)
        this.setState({bowlers:bowler})
                        break;
        case "keeper":wicketKeeper.push(element)
        this.setState({wicketKeepers:wicketKeeper})
                        break;
        case "all_rounder":allrounder.push(element)
        this.setState({allrounders:allrounder})
                        break;      
        default:console.log("Error")
                break;
                    
      }
      
    });
    //  console.log("Batsman",batsman);
   
} catch (err) {
    console.log(err);
}
}
  render() {
   
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
                    <div className="comp_time">
                      <p>BOK vs DUM</p>
                      <p>00h : 13m :13s</p>
                    </div>
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
                      <span className="number_box">1</span> BOK
                    </span>
                    <div className="circle">
                      <span>
                        <img src={VS} alt="VS" />
                      </span>
                    </div>
                    <span className="score_box_two">
                      DUM <span className="number_box">1</span>
                    </span>
                    <div className="credit_score">Credits Left 100</div>
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
                      <span className="select_box">1</span>
                      <span className="select_box">2</span>
                      <span className="select_box">3</span>
                      <span className="select_box">4</span>
                      <span className="select_box">5</span>
                      <span className="select_box">6</span>
                      <span className="select_box">7</span>
                      <span className="select_box">8</span>
                      <span className="select_box">9</span>
                      <span className="select_box">10</span>
                      <span className="select_box">11</span>
                      <span className="select_red_box">0/11</span>
                    </div>
                    {/* {console.log("Batsmans:",batsmans)} */}
                    <ScoreboardTabs batsman={this.state.batsmans} 
                    bowler={this.state.bowlers} 
                    wicketKeeper={this.state.wicketKeepers} 
                    allrounder={this.state.allrounders}
                    selectedBatsman = {this.state.selectedBatsman}
                    selectedBowler = {this.state.selectedBowler}
                    selectedAllRounder = {this.state.selectedAllRounder}
                    selectedWicketKeeper = {this.state.selectedWicketKeeper}
                    selectedPlayers = {this.state.selectedPlayers}
                    />
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

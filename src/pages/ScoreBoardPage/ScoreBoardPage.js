import React from "react";
import "./ScoreBoardPage.scss";
import { ScoreboardTabs } from "../../components";
// import Navbar from "../../components/Navbar/Navbar";
// import MatchmenuFooter from "../../components/MatchmenuFooter/MatchmenuFooter";
import kanalogo from "../../images/logo_grey.svg";
import wallet from "../../images/scoreboard_icons/wallet.png";
import VS from "../../images/scoreboard_icons/VS.png";
import clogo1 from "../../images/scoreboard_icons/c1.png";
import clogo2 from "../../images/scoreboard_icons/c2.png";
const ScoreBoardPage = () => {
  return (
    <React.Fragment>
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
                    <ScoreboardTabs />
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
};

export default ScoreBoardPage;

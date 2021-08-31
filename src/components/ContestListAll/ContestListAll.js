import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContestListAll.scss";
import ContestCard from "../ContestCard/ContestCard";
import { getContests } from "../../Helpers/APIHelpers";
import medal from "../../images/small-icons/medal.svg";
import winner from "../../images/small-icons/winner.svg";

class ContestListAll extends React.Component {

  state = {
    contests: []
  }

  componentDidMount() {
    getContests(this.props.matchKey).then(res => {
      this.setState(() => ({
        contests: res.data.data
      }));
    });
  }

  render() {
    return (
      <div>
        <div className="list_block">
          <div className="row align-items-center">
            <div className="col-lg-9 col-sm-8 col-6">
              <div className="logo-text">
                <span className="pr-2">
                  <img src={medal} className="medal-logo" alt="match-logo" />
                </span>
                <div className="contest-text">
                  Double Or Nothing
                  <br />
                  <span className="small-text">Double your Entry!</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6">
              <div className="stage">
                <Link to="/">More Contests</Link>
              </div>
            </div>
          </div>
          {/*<ContestCard />
          <ContestCard />
          <ContestCard />*/}
          {this.state.contests.map(contest => {
            return <ContestCard contest={contest} />;
          })}
        </div>
        {/*<div className="list_block">
          <div className="row align-items-center">
            <div className="col-lg-9 col-sm-8 col-6">
              <div className="logo-text">
                <span className="pr-2">
                  <img src={winner} alt="winner-logo" />
                </span>
                <div className="contest-text">
                  Top-X-Winners
                  <br />
                  <span className="small-text">Be on top- to be on top!</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6">
              <div className="stage">
                <Link to="/">More Contests</Link>
              </div>
            </div>
          </div>
          <ContestCard />
        </div>*/}
      </div>
    );
  }
}

export default ContestListAll;

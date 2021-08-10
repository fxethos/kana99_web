import React from "react";
import { Link } from "react-router-dom";
import "./ContestListAll.scss";
import ContestCard from "../ContestCard/ContestCard";
import medal from "../../images/small-icons/medal.svg";
import winner from "../../images/small-icons/winner.svg";

function ContestListAll() {
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
        <ContestCard />
        <ContestCard />
        <ContestCard />
      </div>
      <div className="list_block">
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
      </div>
    </div>
  );
}

export default ContestListAll;

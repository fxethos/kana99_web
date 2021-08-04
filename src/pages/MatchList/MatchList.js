import React from "react";
import "./MatchList.scss";
import { MatchListPage } from "../../components";
import Navbar from "../../components/Navbar/Navbar";
import MatchmenuFooter from "../../components/MatchmenuFooter/MatchmenuFooter";

const MatchList = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="matchlist-block">
        <div className="container-fluid">
          <div className="match-background">
            <div className="container">
              <MatchListPage />
            </div>
          </div>
        </div>
      </div>
      <MatchmenuFooter />
    </React.Fragment>
  );
};

export default MatchList;

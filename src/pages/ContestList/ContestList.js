import React from "react";
import "./ContestList.scss";
import { ContestListPage } from "../../components";
import ContestHeader from "../../components/ContestHeader/ContestHeader";
import ContestFooter from "../../components/ContestFooter/ContestFooter";

const ContestList = () => {
  return (
    <React.Fragment>
      <ContestHeader />
      <div className="matchlist-block">
        <div className="container-fluid">
          <div className="match-background">
            <div className="container">
              <ContestListPage />
            </div>
          </div>
        </div>
      </div>
      <ContestFooter />
    </React.Fragment>
  );
};

export default ContestList;

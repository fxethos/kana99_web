import React from "react";
import "./ContestList.scss";
import { ContestListPage } from "../../components";
import ContestHeader from "../../components/ContestHeader/ContestHeader";
import ContestFooter from "../../components/ContestFooter/ContestFooter";

const ContestList = () => {
  return (
    <React.Fragment>
      <ContestHeader />
      <div className="contest-block">
        <div className="container-fluid pl-0 pr-0">
          <ContestListPage />
        </div>
      </div>
      <ContestFooter />
    </React.Fragment>
  );
};

export default ContestList;

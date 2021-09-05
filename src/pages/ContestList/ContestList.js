import React, { useContext, useState, useEffect } from "react";
import "./ContestList.scss";
import { ContestListPage } from "../../components";
import ContestHeader from "../../components/ContestHeader/ContestHeader";
import ContestFooter from "../../components/ContestFooter/ContestFooter";
import { AuthContext } from '../../Helpers/AuthHelpers';

const ContestList = (props) => {
  console.log(props);
  const [authStatus, setAuthStatus] = useState(false);
  const { getSession, logout } = useContext(AuthContext);
  useEffect(() => {
    getSession().then(session => {
      setAuthStatus(true);
    });
  }, []);
  return (
    <React.Fragment>
      <ContestHeader
        authStatus={authStatus} 
        onLogout={logout}
        codeTeamA={props.location.query && props.location.query.codeTeamA}
        codeTeamB={props.location.query && props.location.query.codeTeamB}
      />
      <div className="contest-block">
        <div className="container-fluid pl-0 pr-0">
          <ContestListPage 
            matchKey={props.location.query && props.location.query.matchKey}
          />
        </div>
      </div>
      {/*<ContestFooter />*/}
    </React.Fragment>
  );
};

export default ContestList;

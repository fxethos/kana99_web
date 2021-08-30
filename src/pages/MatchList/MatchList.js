import React, { useContext, useEffect, useState } from "react";
import "./MatchList.scss";
import { MatchListPage } from "../../components";
import Navbar from "../../components/Navbar/Navbar";
import MatchmenuFooter from "../../components/MatchmenuFooter/MatchmenuFooter";
import { AuthContext } from '../../Helpers/AuthHelpers'

const MatchList = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const { getSession, logout } = useContext(AuthContext);
  useEffect(() => {
    getSession().then(session => {
      setAuthStatus(true);
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar authStatus={authStatus} onLogout={logout} />
      <div className="matchlist-block">
        <div className="match-background">
          <div className="container">
            <MatchListPage />
          </div>
        </div>
      </div>
      <MatchmenuFooter />
    </React.Fragment>
  );
};

export default MatchList;

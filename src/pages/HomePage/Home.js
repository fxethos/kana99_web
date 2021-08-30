import React, { useContext, useEffect, useState } from "react";
import {
  InfoSection,
  JoinFantacy,
  Navbar,
  Footer,
} from "../../components";
import { AuthContext } from "../../Helpers/AuthHelpers";

const Home = () => {
  const { getSession, logout } = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState(false);
  if (!authStatus) {
    getSession().then(session => {
      console.log("Session:", session);
      setAuthStatus(true);
    })
  }
  return (
    <React.Fragment>
      <Navbar authStatus={authStatus} onLogout={logout} />
      <InfoSection />
      <JoinFantacy />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

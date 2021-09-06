import React, { useContext, useState } from "react";
import { InfoSection, JoinFantacy, Navbar, Footer } from "../../components";
import { AuthContext } from "../../Helpers/AuthHelpers";
import { connect } from "react-redux";

const Home = (props) => {
  const { getSession } = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState(false);
  if (!authStatus) {
    getSession().then(session => {
      console.log("Session:", session);
      setAuthStatus(true);
    })
  }
  return (
    <React.Fragment>
      <Navbar authStatus={authStatus} />
      <InfoSection />
      <JoinFantacy />
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state
});

export default connect(mapStateToProps)(Home);

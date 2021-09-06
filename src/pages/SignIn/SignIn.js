import React, { useContext } from "react";
import { connect } from "react-redux";
import "./SignIn.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";
import { AuthContext } from "../../Helpers/AuthHelpers";
import { login } from "../../actions/auth";


const SignIn = (props) => {
  const { authenticate } = useContext(AuthContext);
  const onSignIn = ({username, password}) => {
    authenticate(username, password).then(data => {
      console.log('Logged in:', data.accessToken.payload.sub);
      props.dispatch(login(data.accessToken.payload.sub));
      props.history.push('/');
    });
  }
  return (
    <AuthFragment mode="signin" onSubmit={onSignIn} />
  );
}

export default connect()(SignIn);

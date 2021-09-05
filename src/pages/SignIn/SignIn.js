import React, { useContext } from "react";
import "./SignIn.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";
import { AuthContext } from "../../Helpers/AuthHelpers";


const SignIn = (props) => {
  const { authenticate, getUser } = useContext(AuthContext);
  const onSignIn = ({username, password}) => {
    authenticate(username, password).then(data => {
      console.log('Logged in:', data);
      props.history.push('/');
    });
  }
  return (
    <AuthFragment mode="signin" onSubmit={onSignIn} />
  );
}

export default SignIn;

import React from "react";
import "./SignIn.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";
import UserPool from '../../UserPool';
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const SignIn = () => {
  const onSignIn = (creds) => {
    console.log("signin:", creds);
    
    const user = new CognitoUser({
      Username: creds.username,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: creds.username,
      Password: creds.password
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.log("onFailure:", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired", data);
      }
    })
  }
  return (
    <AuthFragment mode="signin" onSubmit={onSignIn} />
  );
}

export default SignIn;

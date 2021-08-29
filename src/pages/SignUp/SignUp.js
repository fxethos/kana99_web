import React from "react";
import "./SignUp.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";
import UserPool from '../../UserPool';
import { saveSignupInfo } from "../../Helpers/APIHelpers";

const SignUp = (props) => {
  const onSignUp = (creds) => {
    console.log("signup:", creds);
    UserPool.signUp(
      creds.username, 
      creds.password, 
      [{"Name": "email", "Value": creds.email}], 
      null, 
      (err, signupResponse) => {
        if (err) {
          console.log(err);
        } else {
          creds.uuid = signupResponse.userSub;
          saveSignupInfo(creds);
          props.history.push('/sign-in');
        }
      });
  }
  return (
    <AuthFragment mode="signup" onSubmit={onSignUp} />
  );
}

export default SignUp;

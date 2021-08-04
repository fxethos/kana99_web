import React from "react";
import "./SignUp.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";
import UserPool from '../../UserPool';

const SignUp = () => {
  const onSignUp = (creds) => {
    console.log("signup:", creds);
    UserPool.signUp(
      creds.username, 
      creds.password, 
      [{"Name": "email", "Value": creds.email}], 
      null, 
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
  }
  return (
    <AuthFragment mode="signup" onSubmit={onSignUp} />
  );
}

export default SignUp;

import React from "react";
import "./SignUp.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";

const SignUp = () => {
  const onSignUp = (creds) => {
    console.log("signup:", creds);
  }
  return (
    <AuthFragment mode="signup" onSubmit={onSignUp} />
  );
}

export default SignUp;

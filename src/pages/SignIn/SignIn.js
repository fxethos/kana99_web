import React from "react";
import "./SignIn.scss";
import AuthFragment from "../../components/AuthFragment/AuthFragment";

const SignIn = () => {
  const onSignIn = (creds) => {
    console.log("signin:", creds);
  }
  return (
    <AuthFragment mode="signin" onSubmit={onSignIn} />
  );
}

export default SignIn;

import React from 'react';
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

class AuthForm extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        action: this.props.mode.toUpperCase()
    }
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const isSignup = this.props.mode === "signup";
        return (
            <form onSubmit={this.onSubmit}>
                {isSignup && <div className="box">
                  <input required type="text" value={this.state.email} onChange={this.onEmailChange} />
                  <span>Email</span>
                </div>}
                <div className="box">
                  <input required type="username" value={this.state.username} onChange={this.onUsernameChange} />
                  <span>Username</span>
                </div>
                <div className="box">
                  <input required type="password" value={this.state.password} onChange={this.onPasswordChange} />
                  <span>Password</span>
                </div>
                {!isSignup && 
                <div className="row">
                  <div className="col-md-12 text-right mb-2">
                    <Link to="">
                      <p>Forgot Password ? </p>
                    </Link>
                  </div>
                </div>}
                <div className="row">
                  <div className="col-sm-12 col-lg-12 ">
                      <Button big large fontBig secondary>
                        {this.state.action}
                      </Button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-lg-12 mt-5">
                    <div className="line">
                      <h5>{isSignup ? "ALREADY HAVE AN ACCOUNT?" : "NEW TO KANA99?"}</h5>
                    </div>
                    <Link to={!isSignup ? "/sign-up" : "/sign-in"}>
                      <Button fontBig buttonStyle="btn--outline">
                        {!isSignup ? "SIGNUP" : "SIGNIN"}
                      </Button>
                    </Link>
                  </div>
                </div>
            </form>
        );
    }
}

export default AuthForm;
import React, { createContext } from 'react';
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import Pool from '../UserPool';

const AuthContext = createContext();

const Authenticator = (props) => {

    const authenticate = async (Username, Password) => {
        return new Promise((resolve, reject) => {
            const user = new CognitoUser({Username, Pool});
            const authDetails = new AuthenticationDetails({Username, Password});
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    resolve(data);
                },
                onFailure: (err) => {
                    console.log("onFailure:", err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    resolve(data);
                }
            });
        });
    }

    const getSession = async () => {
        return new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                })
            }
        })
    }

    const logout = () => {
        console.log("logout called");
        const user = Pool.getCurrentUser();
        if(user) {
            user.signOut();
        }
    }

    return (
        <AuthContext.Provider value={{authenticate, getSession, logout}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export {AuthContext, Authenticator};
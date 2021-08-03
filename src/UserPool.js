import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-2_az0KhqCFg',
    ClientId: '3ol3ffe3bequ48nsauinodpvq6'
};

export default new CognitoUserPool(poolData);
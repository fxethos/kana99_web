const path = require('path');
const axios = require('axios');

class APIHelper {

    host = '35.154.51.112:3000'
    endpoints = {
        auth: '/api/auth',
        associationList: 'api/association/list',
        cBoard: 'api/association/c_board',
        fixtures: '/api/tournament/fixtures',
        fantasyCredits: '/api/fantasy_match_credits',
        signup: '/user/signup'
    }

    saveSignupInfo = async (userInfo) => {
        const endpoint = path.join(this.host, this.endpoints.signup);
        try {
            const response = await axios.post('http://35.154.51.112:3000/api/user/signup', userInfo);
            return response;
        } catch(err) {
            console.log(err.response.data);
        }
    }
}

const helper = new APIHelper();

helper.saveSignupInfo({uuid: 'abc123'});

// export default new APIHelper();
const axios = require('axios');

const host = 'https://35.154.51.112:3000'
const endpoints = {
    auth: '/api/auth',
    associationList: '/api/association/list',
    cBoard: '/api/association/c_board',
    fixtures: '/api/tournament/fixtures',
    fantasyCredits: '/api/fantasy_match_credits',
    signup: 'api/user/signup', // POST - uuid, username, email, wallet_address (optional)
    getUser: 'api/user/info', // POST - uuid
    getContests: '/api/getcontest', // GET - match_id
    postContests: '/api/postcontest' // POST - contest_id, match_id, contest_name, contest_value, max_contest_size, entry_fee
}

var association;
var tournaments;

async function authenticationToken() {

    const body = {
        "api_key": "RS5:7ca04571e349f24371cc6692c80c64ac"
    }
    try {

        const response = await axios.post(host + endpoints.auth, body);
        localStorage.setItem('authCricket', response.data.data.token);
        associationList();
    } catch (err) {
        console.log("Error:", err);
    }

}

async function associationList() {
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken
    }
    try {
        const response = await axios.post(host + endpoints.associationList, body);
        association = response.data.data.associations[3].key;
        tournamentList();
    } catch (err) {
        console.log("Error:", err);
    }
}

async function tournamentList() {
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken,
        "page_key": association
    }
    try {
        const response = await axios.post(host + endpoints.cBoard, body);
        tournaments = response.data.data.tournaments[3].key;
        schedule();
    } catch (err) {
        console.log("Error:", err);
    }
}

async function schedule() {
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken,
        "page_key": tournaments
    }
    try {
        const response = await axios.post(host + endpoints.fixtures, body);
        localStorage.setItem('schedule', JSON.stringify(response.data.data.matches));

    } catch (err) {
        console.log("Error:", err);
    }
}

// saveSignupInfo = async (userInfo) => {
//     const endpoint = path.join(this.host, this.endpoints.signup);
//     try {
//         const response = await axios.post('http://35.154.51.112:3000/api/user/signup', userInfo);
//         return response;
//     } catch (err) {
//         console.log(err.response.data);
//     }
// }

export default authenticationToken;
const axios = require('axios');

const host = new URL('https://35.154.51.112:3000');
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
    host.pathname = endpoints.auth;
    const body = {
        "api_key": "RS5:7ca04571e349f24371cc6692c80c64ac"
    }
    try {

        const response = await axios.post(host.href, body);
        localStorage.setItem('authCricket', response.data.data.token);
        associationList();
    } catch (err) {
        console.log("Error:", err);
    }

}

async function associationList() {
    host.pathname = endpoints.associationList;
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken
    }
    try {
        const response = await axios.post(host.href, body);
        association = response.data.data.associations[3].key;
        tournamentList();
    } catch (err) {
        console.log("Error:", err);
    }
}

async function tournamentList() {
    host.pathname = endpoints.cBoard;
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken,
        "page_key": association
    }
    try {
        const response = await axios.post(host.href, body);
        tournaments = response.data.data.tournaments[3].key;
        schedule();
    } catch (err) {
        console.log("Error:", err);
    }
}

async function schedule() {
    host.pathname = endpoints.fixtures;
    const authToken = localStorage.getItem('authCricket');
    const body = {
        "rs_token": authToken,
        "page_key": tournaments
    }
    try {
        const response = await axios.post(host.href, body);
        localStorage.setItem('schedule', JSON.stringify(response.data.data.matches));

    } catch (err) {
        console.log("Error:", err);
    }
}

export const saveSignupInfo = async (userInfo) => {
    host.pathname = endpoints.signup;
    try {
        const response = await axios.post(host.href, userInfo);
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const getContests = async (match_id) => {
    host.pathname = endpoints.getContests;
    try {
        const response = await axios.get(host.href, {match_id});
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

export default authenticationToken;
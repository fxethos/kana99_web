import moment from 'moment';
// const path = require('path');
const axios = require('axios');


// class APIHelper {

const host = 'http://35.154.51.112:3000/api'
const endpoints = {
    staticData:'/getstaticdata',
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
const date = moment().add(15, 'days').calendar();
console.log("Date",date);
var association;
var tournaments;
const matches = [] ;

// saveSignupInfo = async (userInfo) => {
//     const endpoint = path.join(this.host, this.endpoints.signup);
//     try {
//         const response = await axios.post('http://35.154.51.112:3000/api/user/signup', userInfo);
//         return response;
//     } catch (err) {
//         console.log(err.response.data);
//     }
// }


async function upcomingMatches(){
    try{
        const response = await axios.get(host+endpoints.staticData);
        const upcomingList = response.data.data.matcheslist;
       
        upcomingList.forEach(element => {
            var startDate = moment.unix(element.start_at).format("MM/DD/YYYY");
            (element.status !== 'completed' && startDate <= date ) && matches.push(element);
        });
        localStorage.setItem('upcomingMatches', JSON.stringify(matches));
    }catch(err){
        console.log("Err",err)
    }
}

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

//}

// const helper = new APIHelper();

// helper.saveSignupInfo({ uuid: 'abc123' });


// export {
//     authenticationToken
// }

export default upcomingMatches;

export default authenticationToken;
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
    signup: '/user/signup'
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


//}

// const helper = new APIHelper();

// helper.saveSignupInfo({ uuid: 'abc123' });


// export {
//     authenticationToken
// }

export default upcomingMatches;

// export default new APIHelper();
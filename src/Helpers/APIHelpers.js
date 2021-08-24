import moment from 'moment';
// const path = require('path');
const axios = require('axios');


// class APIHelper {

const host = new URL('http://35.154.51.112:3000');
const endpoints = {
    staticData:'/api/getstaticdata',
    fantacyMatchCredits:'/api/fantasy_match_credits/db',
    signup: '/api/user/signup', // POST - uuid, username, email, wallet_address (optional)
    getUser: '/api/user/info', // POST - uuid
    getContests: '/api/getcontest', // GET - match_id
    postContests: '/api/postcontest' // POST - contest_id, match_id, contest_name, contest_value, max_contest_size, entry_fee
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




    const lastDate = moment().add(20, 'days').calendar();
    var endDate = moment(lastDate).format('DD/MM/YYYY');
    var todayDate = moment().format('l'); 
    const matches = [] ;
    const fantacyMatchCreditForEachMatch = [];

    async function upcomingMatches(){
        host.pathname = endpoints.staticData;
        try{
            const response = await axios.get(host.href);
            const upcomingList = response.data.data.matcheslist;
            upcomingList.forEach(element => {
                var startDate = moment.unix(element.start_at).format("DD/MM/YYYY");
                let newStartDate = moment(startDate,'DD/MM/YYYY');
                let newEndDate = moment(endDate,'DD/MM/YYYY');
                element.start_at = startDate;
                if((element.status === 'not_started' && newStartDate.isBefore(newEndDate) ) && newStartDate.isAfter(todayDate)){
                    var ret = fetchlist(element);
                    }
            });
        }catch(err){
        console.log("Err",err)
        }
    }

    async function fetchlist(props) {
        host.pathname = endpoints.fantacyMatchCredits;
            const body = {
                "match_key": props.key
            }
            try{
            const fantacyCreditResponse = await axios.post(host.href,body);
                if(fantacyCreditResponse.data.data.length>0){
                    matches.push(props);
                    fantacyMatchCreditForEachMatch.push(fantacyCreditResponse);
                }
            }catch(err){
                console.log("Error",err);
            }
            localStorage.setItem('upcomingMatches', JSON.stringify(matches));
            localStorage.setItem('fantacyMatchCreditForEachMatch', JSON.stringify(fantacyMatchCreditForEachMatch));
    }

  

// async function authenticationToken() {
//     host.pathname = endpoints.auth;
//     const body = {
//         "api_key": "RS5:7ca04571e349f24371cc6692c80c64ac"
//     }
//     try {

//         const response = await axios.post(host.href, body);
//         localStorage.setItem('authCricket', response.data.data.token);
//         associationList();
//     } catch (err) {
//         console.log("Error:", err);
//     }

// }

// async function associationList() {
//     host.pathname = endpoints.associationList;
//     const authToken = localStorage.getItem('authCricket');
//     const body = {
//         "rs_token": authToken
//     }
//     try {
//         const response = await axios.post(host.href, body);
//         association = response.data.data.associations[3].key;
//         tournamentList();
//     } catch (err) {
//         console.log("Error:", err);
//     }
// }

// async function tournamentList() {
//     host.pathname = endpoints.cBoard;
//     const authToken = localStorage.getItem('authCricket');
//     const body = {
//         "rs_token": authToken,
//         "page_key": association
//     }
//     try {
//         const response = await axios.post(host.href, body);
//         tournaments = response.data.data.tournaments[3].key;
//         schedule();
//     } catch (err) {
//         console.log("Error:", err);
//     }
// }

// async function schedule() {
//     host.pathname = endpoints.fixtures;
//     const authToken = localStorage.getItem('authCricket');
//     const body = {
//         "rs_token": authToken,
//         "page_key": tournaments
//     }
//     try {
//         const response = await axios.post(host.href, body);
//         localStorage.setItem('schedule', JSON.stringify(response.data.data.matches));

//     } catch (err) {
//         console.log("Error:", err);
//     }
// }

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
    host.search = `?match_id=${match_id}`;
    try {
        const response = await axios.get(host.href);
        return response;
    } catch (err) {
        console.log(err);
    }
}

export default upcomingMatches;
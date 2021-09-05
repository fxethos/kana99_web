import moment from 'moment';
import { useContext } from 'react';
import {v4 as uuid} from 'uuid';
// const path = require('path');
const axios = require('axios');



// class APIHelper {

const host = new URL('http://localhost:3000');
// const host = new URL('http://35.154.51.112:3000');
const endpoints = {
    staticData: '/api/getstaticdata',
    fantacyMatchCredits: '/api/fantasy_match_credits/db',
    signup: '/api/user/signup', // POST - uuid, username, email, wallet_address (optional)
    getUser: '/api/user/info', // POST - uuid
    getContests: '/api/getcontest', // GET - match_id
    postContests: '/api/postcontest', // POST - contest_id, match_id, contest_name, contest_value, max_contest_size, entry_fee
    postStandings: '/api/selectplayer', //POST - id, contest_id, captain_id, vice_captain_id, wkeeper_id, player1_id...player8_id, user_id
    getPlayerAddresses: '/api/getaddressarray' //POST contest_id
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
const matches = [];
const fantacyMatchCreditForEachMatch = [];

export const upcomingMatches = async () => {
    host.pathname = endpoints.staticData;
    try {
        const response = await axios.get(host.href);
        const upcomingList = response.data.data.matcheslist;
        console.log("Upcoming Matches:", upcomingList);
        upcomingList.forEach(element => {
            var startDate = moment.unix(element.start_at).format("DD/MM/YYYY");
            let newStartDate = moment(startDate, 'DD/MM/YYYY');
            let newEndDate = moment(endDate, 'DD/MM/YYYY');
            element.start_at = startDate;
            if ((element.status === 'not_started' && newStartDate.isBefore(newEndDate)) && newStartDate.isAfter(todayDate)) {
                matches.push(element);
            }
        });
        return upcomingList;
    } catch (err) {
        console.log("Err", err)
    }
}

export const fetchlisting = async (props) => {
    var players;
    var credits = [];
    var batsmans;
    var bowlers;
    var allRounders;
    var wicketKeepers;
    var teamA;
    var teamB;
    host.pathname = endpoints.fantacyMatchCredits;
    const body = {
        "match_key": `${props}`
    }
    try {
        await axios.post(host.href, body).then(response => {
            console.log("Response:", response)
            if (response) {
                allRounders = response.data.data[0].players[0].all_rounder;
                wicketKeepers = response.data.data[0].players[0].keeper;
                batsmans = response.data.data[0].players[0].batsman;
                bowlers = response.data.data[0].players[0].bowler;
                var teams = Object.keys(response.data.data[0].teams);
                teamA = teams[0];
                teamB = teams[1];
                players = [...allRounders, ...wicketKeepers, ...batsmans, ...bowlers]
                console.log("Players", players);
                allRounders.map((index) => index.playerSelected = false)
                wicketKeepers.map((index) => index.playerSelected = false)
                batsmans.map((index) => index.playerSelected = false)
                bowlers.map((index) => index.playerSelected = false)
            }
        });
        return { bowlers, batsmans, wicketKeepers, allRounders, players, teamA, teamB }
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
    host.search = `?match_id=${match_id}`;
    try {
        const response = await axios.get(host.href);
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const postStandings = async (players, contest_id) => {
    console.log("conetst id: ", contest_id);
    const player_ids = players.map(player => player.key);
    const username = localStorage.getItem('username');
    if (!username) {
        console.log('username not found in local.');
        return;
    }
    const keys = [
        'id', 'contest_id', 'captain_id', 'vice_captain_id',
        'wkeeper_id', 'player1_id', 'player2_id', 'player3_id',
        'player4_id', 'player5_id', 'player6_id', 'player7_id', 
        'player8_id', 'user_id'
    ];
    const user = await getUser(username);
    console.log(user);
    const values = [uuid(), contest_id, ...player_ids, user.uuid];
    const mapped = keys.map((key, index) => {
        return [key, values[index]];
    });
    const payload = Object.fromEntries(new Map(mapped));
    console.log(payload);
    host.pathname = endpoints.postStandings;
    const response = await axios.post(host.href, payload);
    console.log (response);
}

const getUser = async (username) => {
    host.pathname = endpoints.getUser;
    const user = await axios.post(host.href, {username});
    return user.data.data[0];
}
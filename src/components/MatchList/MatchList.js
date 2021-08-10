import React from 'react';
import CricketmatchList from '../CricketmatchList/CricketmatchList';

const MatchList = () => {
    const matches = [
        {
            matchTitle: "Jharjhand T20",
            team1: "RAN",
            team2: "DHA",
            playersJoined: 170
        },
        {
            matchTitle: "Chennai T20",
            team1: "CSK",
            team2: "RCB",
            playersJoined: 240
        },
        {
            matchTitle: "Mumbai T20",
            team1: "MI",
            team2: "KKR",
            playersJoined: 113
        },
        {
            matchTitle: "Hyderabad T20",
            team1: "SRH",
            team2: "RR",
            playersJoined: 95
        }
    ];
    return (
        <div
              id="collapse-A"
              className="collapse show"
              data-parent="#content"
              role="tabpanel"
              aria-labelledby="heading-A"
            >
            <div className="card-body">
                {matches.map((match, index) => {
                    return <CricketmatchList {...match} />
                })}
            </div>
        </div>
    )
}

export default MatchList;
import React, { useEffect } from "react";
import MatchListCricket from "../MatchListCricket/MatchListCricket";

import moment from "moment";

var response;
const MatchList = () => {

  const [state, setState] = React.useState({});

  useEffect(() => {
    response = JSON.parse(localStorage.getItem('upcomingMatches'));
    response.forEach(element => {
      var matches = moment.unix(element.start_at).format("MM/DD/YYYY");
      element.start_at = matches;    
    });
  setState(response);
  }, [])



  // useEffect(() => {
  //   response = JSON.parse(localStorage.getItem('schedule'));
  //   setState(response);
  // }, [])
  // console.log("Response", response)
  // const matches = [
  //   {
  //     matchTitle: "Jharjhand T20",
  //     team1: "RAN",
  //     team2: "DHA",
  //     playersJoined: 170,
  //   },
  //   {
  //     matchTitle: "Chennai T20",
  //     team1: "CSK",
  //     team2: "RCB",
  //     playersJoined: 240,
  //   },
  //   {
  //     matchTitle: "Mumbai T20",
  //     team1: "MI",
  //     team2: "KKR",
  //     playersJoined: 113,
  //   },
  //   {
  //     matchTitle: "Hyderabad T20",
  //     team1: "SRH",
  //     team2: "RR",
  //     playersJoined: 95,
  //   },
  // ];
  return (
    <div
      id="collapse-cricket"
      className="collapse show"
      data-parent="#content"
      role="tabpanel"
      aria-labelledby="heading-cricket"
    >
      <div className="card-body">
        {response?.map((match, index) => {
         
            return <MatchListCricket {...match} />;
        })}
      </div>
    </div>
  );
};

export default MatchList;

import React, { useEffect } from "react";
import MatchListCricket from "../MatchListCricket/MatchListCricket";

var responsee
const MatchList = () => {


  const [response, setState] = React.useState({});

  useEffect(() => {
    responsee = JSON.parse(localStorage.getItem('schedule'));
    setState(responsee)
  }, [])

  const matches = [
    {
      matchTitle: "Jharjhand T20",
      team1: "RAN",
      team2: "DHA",
      playersJoined: 170,
    },
    {
      matchTitle: "Chennai T20",
      team1: "CSK",
      team2: "RCB",
      playersJoined: 240,
    },
    {
      matchTitle: "Mumbai T20",
      team1: "MI",
      team2: "KKR",
      playersJoined: 113,
    },
    {
      matchTitle: "Hyderabad T20",
      team1: "SRH",
      team2: "RR",
      playersJoined: 95,
    },
  ];
  return (
    <div
      id="collapse-cricket"
      className="collapse show"
      data-parent="#content"
      role="tabpanel"
      aria-labelledby="heading-cricket"
    >
      <div className="card-body">
        {responsee?.map((match, index) => {
          if (match.status === "not_started")
            return <MatchListCricket {...match} />;
        })}
      </div>
    </div>
  );
};

export default MatchList;

import React, { useEffect } from "react";
import MatchListCricket from "../MatchListCricket/MatchListCricket";
import { upcomingMatches } from "../../Helpers/APIHelpers";


const MatchList = () => {
  const [state, setState] = React.useState([]);

  useEffect(() => {
    // response = JSON.parse(localStorage.getItem('upcomingMatches'));
    upcomingMatches().then(res => {
      setState(res);
    })
  }, [])

  return (
    <div
      id="collapse-cricket"
      className="collapse show"
      data-parent="#content"
      role="tabpanel"
      aria-labelledby="heading-cricket"
    >
      <div className="card-body">
        {state?.map((match, index) => {
         
            return <MatchListCricket matchKey={match.key} {...match} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MatchList;

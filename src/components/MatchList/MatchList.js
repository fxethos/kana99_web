import React, { useEffect } from "react";
import MatchListCricket from "../MatchListCricket/MatchListCricket";
import { upcomingMatches } from "../../Helpers/APIHelpers";


const MatchList = () => {

  const [state, setState] = React.useState({});

  useEffect(() => {
    // response = JSON.parse(localStorage.getItem('upcomingMatches'));
    upcomingMatches().then(response => {
      setState(response);
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
         
            return <MatchListCricket {...match} />;
        })}
      </div>
    </div>
  );
};

export default MatchList;

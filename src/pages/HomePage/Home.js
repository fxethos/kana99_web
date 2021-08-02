import React from 'react'
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import { homeObjOne } from './Data';
import { InfoSection, JoinFantacy, PowerPlay, Members, FrequentQuestion} from '../../components';

function Home() {

  return (
    <React.Fragment>
      <InfoSection/>
      <JoinFantacy/>
       <PowerPlay/>
       <Members/>
       <FrequentQuestion/>
        {/* <Pricing /> */}
        {/* <InfoSection {...homeObjThree} />
         <InfoSection {...homeObjTwo} /> */}
        {/* <InfoSection {...homeObjFour} /> */}
  </React.Fragment>
  );

}

export default Home;

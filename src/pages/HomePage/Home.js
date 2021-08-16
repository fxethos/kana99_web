import React from "react";
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import { homeObjOne } from './Data';
import {
  InfoSection,
  JoinFantacy,
  PowerPlay,
  Members,
  FrequentQuestion,
  Navbar,
  Footer,
  FooterBottom,
} from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <InfoSection />
      <JoinFantacy />
      <PowerPlay />
      <Members />
      <FrequentQuestion />
      <Footer />
      <FooterBottom />
      {/* <Pricing /> */}
      {/* <InfoSection {...homeObjThree} />
         <InfoSection {...homeObjTwo} /> */}
      {/* <InfoSection {...homeObjFour} /> */}
    </React.Fragment>
  );
};

export default Home;

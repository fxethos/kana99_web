import React from "react";
import "./PowerPlay.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Button } from '../Button/Button';
import  PowerplayCard from '../PowerplayCard/PowerplayCard';
import { Bounce, JackInTheBox } from "react-awesome-reveal";
import PowerPlayCards from "../../content/PowerPlayCards";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const PowerPlay = () => {
  return (
    <React.Fragment>
      <div className="powerplay_block">
        <div className="container">
          <JackInTheBox triggerOnce="true">
            <div className="row align-items-center mb-3">
              <div className=" col-sm-6  col-lg-6 offset-sm-3 offset-lg-3">
                <h5 className="header-content_play">
                  WIN UP TO 10X YOUR MONEY
                </h5>
                <h1 className="header-title-play header-content_play">
                  Kana99 POWER PLAY
                </h1>
              </div>
              <div className="col-sm-6  offset-sm-3 align-self-center text-center mb-5">
                <p>
                  ‍Predict the correct over/under on 4 players, and win 10 times
                  your entry fee. A $50 entry pays $500. A $100 entry pays
                  $1000. It’s really that simple!
                </p>
              </div>
            </div>
          </JackInTheBox>
          <Carousel responsive={responsive}>
            {PowerPlayCards.map(card => {
              return (<PowerplayCard {...card} key={card.playerName} />)
            })}
          </Carousel>

          <Bounce triggerOnce="false">
            <div className="row align-items-center">
              <div className="col-sm-6  offset-sm-3 align-self-center text-center header-content_play ">
                <div className="form-group">
                  <label htmlFor="Entry">Entry</label>
                  <input
                    type="text"
                    className="form-control read"
                    id="Entry"
                    placeholder="$100"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="win">to WIN!</label>
                  <input
                    type="text"
                    className="form-control change"
                    id="win"
                    placeholder="$1000"
                  />
                </div>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PowerPlay;

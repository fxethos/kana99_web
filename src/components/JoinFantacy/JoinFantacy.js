import React from "react";
import { Link } from "react-router-dom";
import "./JoinFantacy.scss";
import { Button } from "../Button/Button";
import { JackInTheBox, Roll, Zoom } from "react-awesome-reveal";

const JoinFantacy = () => {
  return (
    <React.Fragment>
      <div className="joinfantacy_block">
        <div className="container">
          {/* <Zoom triggerOnce="true" Direction="right"> */}

          <JackInTheBox>
            <div className="row align-items-center">
              <div className="col-sm-12 align-self-center ">
                <h5 className="header-content">
                  Start Playing in 4 Easy Steps
                </h5>
                <h1 className="header-title header-content">
                  DAILY FANTASY, SOLANIFIED.
                </h1>
              </div>
            </div>
          </JackInTheBox>
          <div className="row align-items-center">
            <div className="col-sm-3">
              <div className="card radius shadowDepth1">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <span id="share" className="share-icon">
                      1
                    </span>
                  </div>
                  <article className="card__article">
                    <Zoom>
                      <h5>Select a Match</h5>
                      {/* <p className="orange">Make an entry under 60 seconds.</p> */}
                      <p>
                        Pick from a Range of Matches Across Various Tournaments
                      </p>
                    </Zoom>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card radius shadowDepth1">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <Link to="/" id="share" className="share-icon">
                      2
                    </Link>
                  </div>
                  <article className="card__article">
                    <Zoom>
                      <h5>Create a Team</h5>
                      {/* <p className="orange">It’s just you vs, the numbers.</p> */}
                      <p>
                        You are the Manager, so pick your team to lock horns
                        with the best
                      </p>
                    </Zoom>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card radius shadowDepth1">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <Link to="/" id="share" className="share-icon">
                      3
                    </Link>
                  </div>
                  <article className="card__article">
                    <Zoom>
                      <h5>Start Playing </h5>
                      <p>
                        Choose from a Wide Range of Games and Show Who's the
                        Boss
                      </p>
                    </Zoom>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card radius shadowDepth1">
                <div className="card__content card__padding">
                  <div className="card__share">
                    <Link to="/" id="share" className="share-icon">
                      4
                    </Link>
                  </div>
                  <article className="card__article">
                    <Zoom>
                      <h5>Play More to Win More</h5>
                      <p>Get Yourself on the Leaderboard to Win More</p>
                    </Zoom>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 offset-sm-4  header-content">
            <Button big fontBig primary>
              Play Fantasy
            </Button>
          </div>
          {/* </Zoom> */}
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <Roll triggerOnce="true">
            <div className="row">
              <div className="col-sm-6  col-lg-6 offset-sm-3 offset-lg-3 content-align">
                <h1 className="header-title header-content">
                  {" "}
                  <span
                    style={{
                      color: "white",
                      paddingRight: "10px",
                      fontFamily: "sports world",
                    }}
                  >
                    Kana99
                  </span>
                  IS THE GOAT
                </h1>
                <p>
                  We have a variety of unique contests not found in any other
                  Fantasy Gaming website. We have Power Play Contests, Seasonal
                  Leader Contests, Annual Leader Contests To Improve Your
                  Chances of Success. Leaders Will be Rewarded with SOL and also
                  our governance tokens.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 offset-sm-4 offset-xs-4">
              <Link to="/sign-up">
                <Button sm big fontBig primary>
                  SignUp and Play Now!
                </Button>
              </Link>
            </div>
          </Roll>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JoinFantacy;

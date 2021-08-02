import React from 'react'
import "./PowerplayCards.scss";
import player1 from "../../images/player1.png";
import { Link } from "react-router-dom";


function PowerplayCards() {
    return (

         <div className="card_play radius shadowDepth1">
                <div className="card__content_play card__padding_play">
                  <div className="card__share_play">
                    <Link to="/" id="share_play" className="share-icon_play">
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <img src={player1} alt="player-img" />
                  <article className="card__article_play">
                    <h5>
                      <b>LeBron James</b>
                    </h5>
                    <h5 style={{ color: "#838383" }}>SF - LAL</h5>
                    <p>Wed, Dec 30 8.30 PM VS SAS</p>
                  </article>
                  <div className="points">
                    <p>
                      <span className="points_value">25.5</span> points{" "}
                    </p>
                  </div>
                </div>
              </div>

    )
}

export default PowerplayCards;

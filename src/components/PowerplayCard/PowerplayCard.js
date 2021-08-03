import React from 'react'
import "./PowerplayCard.scss";
import player1 from "../../images/player1.png";
import { Link } from "react-router-dom";


const PowerplayCard = (props) => {
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
                      <b>{props.playerName}</b>
                    </h5>
                    <h5 style={{ color: "#838383" }}>{props.h3}</h5>
                    <p>{props.when}</p>
                  </article>
                  <div className="points">
                    <p>
                      <span className="points_value">{props.points}</span> points{" "}
                    </p>
                  </div>
                </div>
              </div>

    )
}

export default PowerplayCard;

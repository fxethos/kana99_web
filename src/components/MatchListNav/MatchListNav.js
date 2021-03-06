import React from "react";
import cricket from "../../images/tab-icons/cricket1.png";
import basketball from "../../images/tab-icons/basketball.png";
import baseball from "../../images/tab-icons/baseball.png";
import football from "../../images/tab-icons/football.png";

const MatchListNav = () => (
  <ul id="tabs" className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a
        id="tab-cricket"
        href="#pane-cricket"
        className="nav-link active"
        data-toggle="tab"
        role="tab"
      >
        <img src={cricket} className="" alt="cricket-icon" />
        <br></br>
        <span>Cricket</span>
      </a>
    </li>

    <li className="nav-item">
      <a
        id="tab-B"
        href="#pane-B"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <img src={football} className="" alt="football-icon" />
        <br></br>
        <span>Football</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-C"
        href="#pane-C"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <img src={basketball} className="" alt="basketball-icon" />
        <br></br>
        <span>Basketball</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-D"
        href="#pane-D"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <img src={baseball} className="" alt="baseball-icon" />
        <br></br>
        <span>Baseball</span>
      </a>
    </li>
  </ul>
);

export default MatchListNav;

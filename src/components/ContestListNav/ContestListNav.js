import React from "react";

const ContestListNav = () => (
  <ul id="tabs" className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a
        id="tab-all"
        href="#pane-all"
        className="nav-link active"
        data-toggle="tab"
        role="tab"
      >
        <span>AllContest</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-mega"
        href="#pane-mega"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>MegaContest</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-h2h"
        href="#pane-h2h"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>Head-2-Head</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-don"
        href="#pane-don"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>DoubleOrNothing</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-WTA"
        href="#pane-WTA"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>WinnerTakesAll</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-TXW"
        href="#pane-TXW"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>Top-X-Winners</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-CFC"
        href="#pane-CFC"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>Contest-For-Champions</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        id="tab-PC"
        href="#pane-PC"
        className="nav-link"
        data-toggle="tab"
        role="tab"
      >
        <span>PracticeContest</span>
      </a>
    </li>
  </ul>
);

export default ContestListNav;

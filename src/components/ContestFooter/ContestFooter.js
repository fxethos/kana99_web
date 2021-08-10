import React from "react";
import "./ContestFooter.scss";
// import Button from "react-bootstrap/Button";
import { Button } from "../Button/Button";

function ContestFooter() {
  return (
    <div>
      <div className="footer">
        <div className="row clearfix align-items-center">
          <div className="col-lg-3 offset-lg-3 col-md-4 offset-md-2 col-xs-12">
            <Button fontBig buttonStyle="btn--grey">
              Team Code
            </Button>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-12">
            <Button fontBig primary mobile>
              Create Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestFooter;

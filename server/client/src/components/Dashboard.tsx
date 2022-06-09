import React from "react";
import {Link} from "react-router-dom";

const Dashboard = (): JSX.Element => {
  return (
    <React.Fragment>
      <h3 style={{textAlign: "center"}}>Dashboard</h3>
      <div style={{backgroundColor: "lightyellow", textAlign: "center"}}>
        <h5>Type to Test:</h5>
        <p>Card Number: 4242424242424242</p>
        <p>CVC: Any 3 digits</p>
        <p>Date: Any future date</p>
        <p>
          Link:{" "}
          <a href="https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers" target="_blank" rel="noreferrer">
            Stripe Docs
          </a>
        </p>
      </div>

      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

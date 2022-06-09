import React from "react";
const Dashboard = (): JSX.Element => {
  return (
    <React.Fragment>
      <h3>Dashboard</h3>
      <div style={{backgroundColor: "lightyellow", textAlign: "center"}}>
        <h5>To test type:</h5>
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
    </React.Fragment>
  );
};

export default Dashboard;

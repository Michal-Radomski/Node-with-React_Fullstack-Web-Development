import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../redux/actions/index";

// import "materialize-css/dist/css/materialize.min.css"; //* npm package replaced with CDNjs
import "./App.scss";
import Header from "./Header";
import Landing from "./Landing";

const Dashboard = (): JSX.Element => {
  return (
    <>
      <h2>Dashboard</h2>
      <div>
        <h3>To test type:</h3>
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
    </>
  );
};
const SurveyNew = (): JSX.Element => <h2>SurveyNew</h2>;
const NotFound = (): JSX.Element => <h2>Page Not Found</h2>;

// console.log("process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY:", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

class App extends React.Component<{fetchUser: Fetch}, {}> {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Router>
            <div>
              {/* Header always visible */}
              <Header auth={null} />
              <Switch>
                <Route path="/" exact={true} component={Landing} />
                <Route path="/surveys" exact={true} component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, actions)(App);

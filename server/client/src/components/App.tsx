import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../redux/actions/index";

// import "materialize-css/dist/css/materialize.min.css"; //* npm package replaced with CDNjs
import "./App.scss";
import Header from "./Header";

const Dashboard = (): JSX.Element => <h2>Dashboard</h2>;
const SurveyNew = (): JSX.Element => <h2>SurveyNew</h2>;
const Landing = (): JSX.Element => <h2>Landing</h2>;
const NotFound = (): JSX.Element => <h2>Page Not Found</h2>;

class App extends React.Component<{fetchUser: Dispatch}, {}> {
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

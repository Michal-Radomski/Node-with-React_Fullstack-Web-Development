import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.scss";
import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <Router>
          <div>
            {/* Header always visible */}
            <Header />
            <Route path="/" exact={true} component={Landing} />
            <Route path="/surveys" exact={true} component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;

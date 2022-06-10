// SurveyNew shows SurveyFrom and SurveyFromReview

import React from "react";

import SurveyForm from "./SurveyForm";

class SurveyNew extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <h2>SurveyNew</h2>
        <SurveyForm />
      </React.Fragment>
    );
  }
}

export default SurveyNew;

// SurveyNew shows SurveyFrom and SurveyFromReview

import React from "react";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component<{}, {}> {
  //* Classical Way
  // constructor(props: {} ) {
  //   super(props);
  //   this.state={showFormReview: false}
  // }

  state = {showFormReview: false};

  renderContent() {
    if (this.state.showFormReview === true) {
      //* ===  if (this.state.showFormReview)
      return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />;
    } else {
      //* Can be without else
      return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{textAlign: "center"}}>New Survey</h2>
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

export default SurveyNew;

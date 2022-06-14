// SurveyFormReview shows users their form inputs for review

import React from "react";
import {connect} from "react-redux";
const SurveyFormReview = ({onCancel, formValues}: {onCancel: () => void; formValues: Values}): JSX.Element => {
  console.log({formValues});
  return (
    <React.Fragment>
      <div>
        <h5>Please confirm your entries</h5>
        <div>
          <div>
            <label>Survey Title</label>
            <div>{formValues.title}</div>
          </div>
          <div>
            <label>Subject Line</label>
            <div>{formValues.subject}</div>
          </div>
          <div>
            <label>Email Body</label>
            <div>{formValues.body}</div>
          </div>
          <div>
            <label>Recipients List</label>
            <div>{formValues.emails}</div>
          </div>
        </div>
        <br />
        <button className="yellow darken-3 btn-flat" onClick={onCancel}>
          Go Back <i className="material-icons">arrow_back</i>
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: State) => {
  // console.log({state});
  return {formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps)(SurveyFormReview);

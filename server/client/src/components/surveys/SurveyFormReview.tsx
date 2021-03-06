// SurveyFormReview shows users their form inputs for review

import React from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {withRouter, RouteComponentProps} from "react-router-dom";

import FIELDS from "./formFields";
import * as actions from "../../redux/actions/index";

const SurveyFormReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history,
}: {
  onCancel: () => void;
  formValues: {[name: string]: string};
  submitSurvey(formValues: Object, history: string[]): void;
  history: string[];
} & RouteComponentProps): JSX.Element => {
  console.log();
  // console.log({formValues});
  // {[name: string]: string}

  // const reviewFields = _.map(FIELDS, (field: {label: string; name: string; noValueError: string}) => {
  //* After Refactoring
  const reviewFields = _.map(FIELDS, ({label, name}: {label: string; name: string}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <h5>Please confirm your entries</h5>
        {/* <div>
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
        </div> */}

        {/* //* After Refactoring */}
        {reviewFields}
        <br />
        <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
          Go Back <i className="material-icons right">arrow_back</i>
        </button>
        <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
          Send Survey <i className="material-icons right">email</i>
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: State) => {
  // console.log({state});
  return {formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

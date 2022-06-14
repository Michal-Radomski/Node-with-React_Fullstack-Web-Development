// SurveyFormReview shows users their form inputs for review
import React from "react";

const SurveyFormReview = ({onCancel}: {onCancel: () => void}): JSX.Element => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Go Back <i className="material-icons">arrow_back</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;

// SurveyForm shows a form for a suer to add input

import React from "react";
import {reduxForm, Field} from "redux-form";

class SurveyForm extends React.Component<
  {handleSubmit: (arg0: (values: {surveyTitle: string}) => void) => React.FormEventHandler<HTMLFormElement>},
  {}
> {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit((values: {surveyTitle: string}) => console.log({values}))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm<{}, any>({
  //+ REMOVE  Any!!!1
  form: "surveyForm",
})(SurveyForm); //* Similar to connect form "react-redux"

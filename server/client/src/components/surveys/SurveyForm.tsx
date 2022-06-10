// SurveyForm shows a form for a suer to add input

import React from "react";
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends React.Component<
  {
    handleSubmit: (
      arg0: (values: {title: string; subject: string; body: string; recipients: string}) => void
    ) => React.FormEventHandler<HTMLFormElement>;
  },
  {}
> {
  renderFields() {
    return (
      <div>
        <Field label="Survey Title" type="text" name="title" component={SurveyField} />
        <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
        <Field label="Email Body" type="text" name="body" component={SurveyField} />
        <Field label="Recipients List" type="text" name="emails" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values: {title: string; subject: string; body: string; recipients: string}) =>
            console.log({values})
          )}
        >
          {/* <Field type="text" name="surveyTitle" component="input" /> */}
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm<{}, State>({
  form: "surveyForm",
})(SurveyForm); //* Similar to connect form "react-redux"

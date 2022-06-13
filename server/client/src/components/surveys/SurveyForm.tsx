// SurveyForm shows a form for a user to add input

import React from "react";
import {reduxForm, Field} from "redux-form";
import _ from "lodash";
import {Link} from "react-router-dom";

import SurveyField from "./SurveyField";

const FIELDS = [
  {label: "Survey Title", name: "title"},
  {label: "Subject Line", name: "subject"},
  {label: "Email Body", name: "body"},
  {label: "Recipients List", name: "emails"},
];

class SurveyForm extends React.Component<
  {
    handleSubmit: (
      arg0: (values: {title: string; subject: string; body: string; recipients: string}) => void
    ) => React.FormEventHandler<HTMLFormElement>;
  },
  {}
> {
  renderFields() {
    // return (
    //   <div>
    //     <Field label="Survey Title" type="text" name="title" component={SurveyField} />
    //     <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
    //     <Field label="Email Body" type="text" name="body" component={SurveyField} />
    //     <Field label="Recipients List" type="text" name="emails" component={SurveyField} />
    //   </div>
    // );

    return _.map(FIELDS, (field) => {
      return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />;
    });
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
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm<{}, State>({
  form: "surveyForm",
})(SurveyForm); //* Similar to connect form "react-redux"

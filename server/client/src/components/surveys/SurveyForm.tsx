// SurveyForm shows a form for a user to add input

import React from "react";
import {reduxForm, Field} from "redux-form";
import _ from "lodash";
import {Link} from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import FIELDS from "./formFields";

class SurveyForm extends React.Component<
  {
    handleSubmit: (arg0: (values: Values) => void) => React.FormEventHandler<HTMLFormElement>;
    validate(): void;
    onSurveySubmit(): void;
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
          // onSubmit={this.props.handleSubmit((values: Values) => {
          //   console.log({values});
          //   this.props.onSurveySubmit();
          // })}
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {/* <Field type="text" name="surveyTitle" component="input" /> */}
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel <i className="material-icons right">cancel</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//* First version
// interface Values {
//   body: string;
//   emails: string;
//   subject: string;
//   title: string;
// }

// function validate(values: Values) {
//   const errors = {title: "", subject: "", body: "", emails: ""};
//   if (!values.title) {
//     errors.title = "You must provide a title!";
//   }
//   if (!values.subject) {
//     errors.subject = "You must provide a subject!";
//   }
//   if (!values.body) {
//     errors.body = "You must provide a body!";
//   }
//   if (!values.emails) {
//     errors.emails = "You must provide a emails!";
//   }

//   console.log({errors});
//   return errors;
// }

//* Second version
function validate(values: {[name: string]: string}) {
  const errors: {[name: string]: string | null} = {};
  errors.recipients = validateEmails(values.recipients || "");

  // _.each(FIELDS, ({name, noValueError}) => {
  //   if (!values[name]) {
  //     errors[name] = noValueError;
  //   }
  // });

  FIELDS.forEach(({name, noValueError}) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  // console.log({errors});
  return errors;
}

export default reduxForm<{}, State>({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm); //* Similar to connect form "react-redux"

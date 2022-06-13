// SurveyField Contains Logic to Render a Single Label and Text Input

import React from "react";

const SurveyField = ({
  input,
  label,
  meta: {error, touched}, //* Two level Object Destructuring!!!
}: {
  input: React.FormEvent<HTMLInputElement>;
  label: string;
  meta: {error: string; touched: boolean};
}): JSX.Element => {
  // console.log({input});
  // console.log({meta});
  return (
    <div>
      <label>{label}</label>
      {/* //* All values are included from props.input e.g. onChange={input.onChange} etc */}
      <input {...input} />
      {/* //* If touched is true and error exists => shot the error! Jf touched is falsy JS stop to execute the statement */}
      {touched && error}
    </div>
  );
};

export default SurveyField;

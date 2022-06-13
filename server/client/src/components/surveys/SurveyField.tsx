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
      <input {...input} style={{marginBottom: "5px"}} />
      <div className="red-text" style={{marginBottom: "20px"}}>
        {/* //* If touched is true and error exists => shot the error! If touched is falsy JS stop to execute the expression */}
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;

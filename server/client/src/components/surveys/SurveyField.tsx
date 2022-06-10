// SurveyField Contains Logic to Render a Single Label and Text Input

import React from "react";

const SurveyField = ({input, label}: {input: React.FormEvent<HTMLInputElement>; label: string}): JSX.Element => {
  // console.log({input});
  return (
    <div>
      <label>{label}</label>
      {/* //* All values are included from props.input e.g. onChange={input.onChange} etc */}
      <input {...input} />
    </div>
  );
};

export default SurveyField;

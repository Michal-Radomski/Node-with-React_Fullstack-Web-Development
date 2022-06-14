const messageError: string = "Provide a Survey";

//* Capital letter because FIELDS are constants
const FIELDS: {label: string; name: string; noValueError: string}[] = [
  {label: "Survey Title", name: "title", noValueError: `${messageError} Title`},
  {label: "Subject Line", name: "subject", noValueError: `${messageError} Subject`},
  {label: "Email Body", name: "body", noValueError: `${messageError} Body`},
  {label: "Recipients List", name: "recipients", noValueError: `${messageError} Emails`},
];

export default FIELDS;

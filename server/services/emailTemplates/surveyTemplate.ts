export {};
const keys = require("../../config/keys");

module.exports = (survey: {body: string; id: string}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div style="text-align: center; background-color: whitesmoke">
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>

        ${
          /* //* This is comment inside template string
        <div>
        <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
        <a href="http://localhost:3000">No</a>
        </div>
        */ ""
        }
        
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>   
      </div>
    </body>
  </html>
`;
};

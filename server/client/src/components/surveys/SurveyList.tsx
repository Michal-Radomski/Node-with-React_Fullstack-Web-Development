import React from "react";
import {connect} from "react-redux";

import {fetchSurveys} from "../../redux/actions/index";

interface Survey {
  body: string;
  dateSent: Date;
  _id: string;
  title: string;
  yes: number;
  no: number;
}

class SurveyList extends React.Component<{fetchSurveys(): void; surveys: Survey[]}, {}> {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey: Survey) => {
      return (
        <div className="card blue lighten-5" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">Sent On: {new Date(survey.dateSent).toLocaleString()}</p>
          </div>
          <div className="card-action">
            <p className="purple-text darken-4" style={{fontSize: "125%"}}>
              Yes: <span style={{fontWeight: "bolder"}}>{survey.yes}</span>
            </p>
            <p className="purple-text darken-4" style={{fontSize: "125%"}}>
              No: <span style={{fontWeight: "bolder"}}>{survey.no}</span>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h4 style={{textAlign: "center"}}>Last Surveys</h4>
        {this.renderSurveys()}
      </div>
    );
  }
}

// function mapStateToProps(state:State) {
// return {surveys: state.surveys}
// }
function mapStateToProps({surveys}: {surveys: State}) {
  return {surveys};
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);

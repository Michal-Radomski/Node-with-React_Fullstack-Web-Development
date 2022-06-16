import React from "react";
import {connect} from "react-redux";

import {fetchSurveys} from "../../redux/actions/index";

class SurveyList extends React.Component<{fetchSurveys(): void}, {}> {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <div>SurveyList</div>;
  }
}

// function mapStateToProps(state:State) {
// return {surveys: state.surveys}
// }
function mapStateToProps({surveys}: {surveys: State}) {
  return {surveys};
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);

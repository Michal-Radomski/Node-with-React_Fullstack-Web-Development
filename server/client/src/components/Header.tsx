/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {connect} from "react-redux";

type HeaderProps = {auth: Auth | null | boolean};
type HeaderState = {};

class Header extends React.Component<HeaderProps, HeaderState> {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">LogOut</a>
          </li>
        );
    }
  }
  render() {
    console.log("this.props:", this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="https://mern-node-react-app.herokuapp.com" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state: State) {
//   return {auth: state.auth};
// }
//* refactor
const mapStateToProps = (state: State) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Header);

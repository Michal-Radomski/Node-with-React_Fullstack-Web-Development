/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Payments from "./Payments";

type HeaderProps = {auth: Auth | null | false};
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
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{margin: "0 10px", color: "black", fontWeight: "bold"}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">LogOut</a>
          </li>,
        ];
    }
  }
  render() {
    console.log("this.props.auth:", this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
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

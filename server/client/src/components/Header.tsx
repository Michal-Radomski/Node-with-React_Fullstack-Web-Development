/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="https://mern-node-react-app.herokuapp.com" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="#">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

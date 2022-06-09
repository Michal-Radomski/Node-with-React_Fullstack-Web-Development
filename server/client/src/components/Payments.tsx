import React from "react";
import StripeCheckOut, {Token} from "react-stripe-checkout";
import {connect} from "react-redux";
import * as actions from "../redux/actions/index";

class Payments extends React.Component<{handleToken: (token: Token) => void}, {}> {
  render() {
    //* debugger;
    return (
      <div>
        {/* amount: US cents!, token -> callback */}
        {/* @ts-ignore */}
        <StripeCheckOut
          amount={500}
          token={(token) => {
            console.log({token});
            this.props.handleToken(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string}
          currency="USD"
          name="Emaily"
          description="For Testing Only"
          panelLabel="Pay only...   "
          zipCode={false}
          allowRememberMe={false}
        >
          <button className="btn">Add Credits: Pay With Card</button>
        </StripeCheckOut>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);

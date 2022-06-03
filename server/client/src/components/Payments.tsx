import React from "react";
import StripeCheckOut from "react-stripe-checkout";

class Payments extends React.Component<{}, {}> {
  render() {
    //* debugger;
    return (
      <div>
        {/* amount: US cents!, token -> callback */}
        <StripeCheckOut
          amount={500}
          token={(token) => console.log({token})}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string}
        />
      </div>
    );
  }
}

export default Payments;

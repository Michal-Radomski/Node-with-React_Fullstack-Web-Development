import React from "react";
import StripeCheckOut from "react-stripe-checkout";

class Payments extends React.Component<{}, {}> {
  render() {
    //* debugger;
    return (
      <div>
        {/* amount: US cents!, token -> callback */}
        {/* @ts-ignore */}
        <StripeCheckOut
          amount={500}
          token={(token) => console.log({token})}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string}
          currency="USD"
          name="Emaily"
          description="For Testing Only"
          panelLabel="Pay only...   "
          zipCode={false}
          allowRememberMe={false}
        >
          <button className="btn">Pay With Card</button>
        </StripeCheckOut>
      </div>
    );
  }
}

export default Payments;

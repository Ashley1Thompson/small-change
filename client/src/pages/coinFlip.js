import React from "react";
import { Navigate } from "react-router-dom";
import DeedForm from "../components/DeedForm";

// import { useMutation } from "@apollo/client";

// import { ADD_GOOD_DEED } from "../utils/mutations";
// import { QUERY_GOOD_DEEDS, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

class CoinFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "doing",
    };
    this.coinToss = this.coinToss.bind(this);
  }
  coinToss() {
    this.setState({}, () => {
      if (this.setState({ result: "doing" })) {
        this.setState({ result: "done" });
      } else {
        this.setState({ result: "done" });
      }
    });
  }

  render() {
    if (!Auth.loggedIn()) {
      return <Navigate replace to="/" />;
    } else {
      return (
        <div className="App">
          <div id="coin" className={this.state.result} key={+new Date()}>
            <div class="side-a">
              <h2>
                Deed
                <br />
                Is
                <br /> Done.
              </h2>
            </div>
            <div className="side-b">
              <h2>
                Deed
                <br />
                Needs
                <br /> Doin'
              </h2>
            </div>
          </div>
          <h3>
            Once you've done your good deed for the day,
            <br /> click the button below to flip your coin!
          </h3>
          <button
            id="btn"
            className="
            btn
            btn-primary
            btn-block
            py-3"
            onClick={this.coinToss}
            data-cy="coin-flip"
          >
            Flip the Coin!
          </button>
          <DeedForm />
        </div>
      );
    }
  }
}

export default CoinFlip;

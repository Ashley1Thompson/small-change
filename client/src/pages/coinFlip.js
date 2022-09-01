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
              <h2>Deed Done.</h2>
            </div>
            <div className="side-b">
              <h2>Deed Needs Doin'</h2>
            </div>
          </div>
          <h1>
            Be the (Small) Change You
            <br /> Want to See in the World
          </h1>
          <button id="btn" onClick={this.coinToss}>
            Did the deed?
            <br />
            Flip the coin!
          </button>
          <DeedForm />
        </div>
      );
    }
  }
}

export default CoinFlip;

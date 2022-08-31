import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_GOOD_DEED } from "../utils/mutations";

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "doing",
    };
    this.coinFlip = this.coinFlip.bind(this);
  }

  coinFlip() {
    this.setState({}, () => {
      this.setState({ result: "done" });
      console.log("done");
    });
    const [goodDeedText, setGoodDeedText] = useState("");
    const [addGoodDeed, { error }] = useMutation(ADD_GOOD_DEED, {
      update(cache, { data: { addGoodDeed } }) {
        try {
          const { goodDeeds } = cache.readQuery({ query: QUERY_GOOD_DEEDS });

          cache.writeQuery({
            query: QUERY_GOOD_DEEDS,
            data: { goodDeeds: [addGoodDeed, ...goodDeeds] },
          });
        } catch (e) {
          console.error(e);
        }

        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, goodDeeds: [...me.goodDeeds, addGoodDeed] } },
        });
      },
    });

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data} = await addGoodDeed({
          variables: {
            goodDeedText,
            gooddeedAuthor: Auth.getProfile().data.username,
          }
        });

        setGoodDeedText('');
      } catch (err) {
        console.error(err);
      }
    };

  render() {
    return (
      <div className="Coin">
        <div id="coin" className={this.state.result}>
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
        <input />
        <br />
        <br />
        <button id="btn " onClick={this.coinFlip}>
          Log Your Good Deed for the Day
        </button>
      </div>
    );
  }
}

export default Coin;

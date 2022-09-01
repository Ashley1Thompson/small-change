import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_GOOD_DEED } from "../../utils/mutations";
import { QUERY_GOOD_DEEDS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const DeedForm = () => {
  const [goodDeedText, setGoodDeedText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

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

      // update me object's cache
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
      const { data } = await addGoodDeed({
        variables: {
          goodDeedText,
          goodDeedAuthor: Auth.getProfile().data.username,
        },
      });

      setGoodDeedText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "goodDeedText" && value.length <= 280) {
      setGoodDeedText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Inspire Others</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="goodDeedText"
                placeholder="Made someone smile ..."
                value={goodDeedText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Log Your Deed
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You will need to log in above. <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default DeedForm;
